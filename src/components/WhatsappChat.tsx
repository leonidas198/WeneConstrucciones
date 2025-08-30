import { useState } from "react";

const encode = (s: string) => encodeURIComponent(s);

export default function WhatsappChat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("Hola, quiero más información 👋");
  const phone = import.meta.env.VITE_WHATSAPP_PHONE as string;

  const sendToWhatsApp = () => {
    if (!phone) {
      console.error("Falta VITE_WHATSAPP_PHONE en .env");
      return;
    }
    const url = `https://wa.me/${phone}?text=${encode(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ventana de chat */}
      {open && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-cyan-700 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt="Aresle SRL"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold leading-tight">Wene Construcciones SRL</p>
                <p className="text-xs text-cyan-100 leading-tight">
                  Respuesta rápida en horario laboral
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white text-xl leading-none"
              aria-label="Cerrar"
              title="Cerrar"
            >
              ✕
            </button>
          </div>

          <div className="px-4 py-3 text-sm text-gray-700">
            <p className="mb-3">
              ¡Hola! 👋 Somos Wene Construcciones SRL. Contanos en qué te ayudamos
              (módulos, galpones o casas) y un asesor te responde por WhatsApp.
            </p>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={3}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div className="px-4 pb-4">
            <button
              onClick={sendToWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition"
            >
              Continuar en WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-xl flex items-center justify-center text-white text-2xl transition"
        aria-label="WhatsApp"
        title="Chatear por WhatsApp"
      >
        {/* Ícono simple (puedes reemplazar por un SVG de WhatsApp) */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="text-white"
      >
        <path d="M13.601 2.326A7.854 7.854 0 0 0 8 0a7.948 7.948 0 0 0-6.867 11.958L0 16l4.227-1.1A7.948 7.948 0 0 0 8 16c4.418 0 8-3.582 8-8a7.854 7.854 0 0 0-2.399-5.674zM8 14.5a6.47 6.47 0 0 1-3.285-.89l-.236-.14-2.5.65.666-2.433-.154-.25A6.47 6.47 0 0 1 1.5 8c0-3.59 2.91-6.5 6.5-6.5S14.5 4.41 14.5 8s-2.91 6.5-6.5 6.5zm3.64-4.991c-.198-.099-1.17-.578-1.351-.643-.182-.066-.314-.099-.445.099-.132.198-.51.643-.624.775-.115.132-.23.148-.428.05-.198-.1-.836-.308-1.592-.984a5.93 5.93 0 0 1-1.096-1.354c-.115-.198-.012-.305.087-.403.089-.088.198-.23.297-.345.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.073-.61-1.47-.16-.383-.323-.33-.445-.336-.115-.006-.248-.007-.38-.007a.73.73 0 0 0-.529.248c-.182.198-.693.678-.693 1.654s.71 1.917.81 2.049c.099.132 1.398 2.136 3.395 2.993.475.205.844.327 1.132.419.475.151.907.129 1.248.078.38-.057 1.17-.48 1.336-.943.165-.463.165-.86.116-.943-.05-.082-.182-.132-.38-.231z" />
      </svg>
      </button>
    </div>
  );
}
