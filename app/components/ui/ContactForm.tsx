"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.message || "Error desconocido");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action="mailto:cartosys@gmail.com"
      method="post"
      encType="text/plain"
      className="space-y-8"
    >
      <div>
        <label className="block text-sm font-medium text-blanco" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          required
          className="mt-1 block w-full rounded-md border border-blanco bg-transparent p-1  shadow-sm focus:border-verde focus:ring focus:ring-verde focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blanco" htmlFor="email">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tu@email.com"
          required
          className="mt-1 block w-full rounded-md border border-blanco bg-transparent p-1 shadow-sm focus:border-verde focus:ring focus:ring-verde focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blanco" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Tu mensaje" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-verde text-blanco" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
        {submitStatus === "success" && (
          <p className="text-green-500">Mensaje enviado con éxito. Gracias por contactarnos.</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500">Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.</p>
        )}
      </form>
    </Form>
  );
}
