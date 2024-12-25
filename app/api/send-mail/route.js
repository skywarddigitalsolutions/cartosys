import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Todos los campos son obligatorios." }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "matiasroel241201@gmail.com", // Cambia esto por tu correo
        pass: "abwe vfym wthm ufen", // Cambia esto por tu contraseña de aplicación
      },
    });

    await transporter.sendMail({
      from: email, // Dirección del remitente
      to: "matiasroel241201@gmail.com", // Tu correo donde recibirás los mensajes
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ message: "Correo enviado con éxito." }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(
      JSON.stringify({ message: "Error al enviar el correo." }),
      { status: 500 }
    );
  }
}
