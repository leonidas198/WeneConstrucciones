import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

export const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  useEffect(() => {
      document.title = "Contacto | Aresle Construcciones SRL";
    }, []);

  const [estado, setEstado] = useState<"enviando" | "enviado" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita recargar la página
    setEstado("enviando");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        e.currentTarget, // aquí se pasa el form entero
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setEstado("enviado");
          setForm({ nombre: "", email: "", mensaje: "" }); // limpia el formulario
        },
        (error) => {
          console.error(error);
          setEstado("error");
        }
      );
  };

  return (
    <section className="bg-gray-300 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-10">
          Contáctanos
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 grid gap-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows={5}
              required
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="bg-cyan-700 text-white py-3 px-6 rounded-xl hover:bg-cyan-800 transition"
          >
            {estado === "enviando" ? "Enviando..." : "Enviar"}
          </button>

          {estado === "enviado" && (
            <p className="text-green-600 mt-2">✅ Mensaje enviado con éxito.</p>
          )}
          {estado === "error" && (
            <p className="text-red-600 mt-2">❌ Ocurrió un error. Intenta nuevamente.</p>
          )}
        </form>
      </div>
    </section>
  );
};
