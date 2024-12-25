export function ContactForm() {
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
          placeholder="Tu mensaje"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-blanco bg-transparent p-1  shadow-sm focus:border-verde focus:ring focus:ring-verde focus:ring-opacity-50"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-verde text-blanco px-4 py-2 rounded-md shadow-sm hover:bg-verdeclaro focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-verde"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
