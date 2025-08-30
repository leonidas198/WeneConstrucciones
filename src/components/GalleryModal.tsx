import { useEffect } from "react";

type GalleryModalProps = {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
};

export default function GalleryModal({
  images,
  isOpen,
  onClose,
}: GalleryModalProps) {
  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // seguridad extra al desmontar
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative max-w-5xl w-full p-4">
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 bg-red-500 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Contenedor con scroll */}
        <div className="max-h-[80vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagen ${index + 1}`}
                className="rounded-lg shadow-lg object-cover w-full h-48"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
