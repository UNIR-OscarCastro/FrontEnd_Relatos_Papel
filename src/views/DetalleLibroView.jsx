import { useParams } from "react-router-dom";
import { books } from "../data/database";
import DetalleLibro from "../components/DetalleLibro";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const DetalleLibroView = () => {
  const { id } = useParams();

  const libro = books.find(
    (item) => item.id === parseInt(id)
  );

  if (!libro) return <p>Libro no encontrado</p>;

  const breadcrumbItems = [
    { label: "Inicio", to: "/" },
    { label: libro.categoria, to: `/libros?categoria=${encodeURIComponent(libro.categoria)}` },
    { label: libro.nombre, to: "" },
  ];

  return (
    <div className="container mt-4">
      <Breadcrumb items={breadcrumbItems} />
      <DetalleLibro libro={libro} />
    </div>
  );
};

export default DetalleLibroView;