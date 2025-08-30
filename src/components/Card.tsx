
type CardProps = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Imagen */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
}
