export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Sobre a Equipe
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Este sistema foi desenvolvido por{" "}
          <span className="font-semibold">Allyson</span> e{" "}
          <span className="font-semibold">Levi</span> como um exemplo de
          gerenciamento de atividades docentes.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <span className="font-medium text-blue-500">Frontend:</span> Next.js
            e Tailwind CSS
          </li>
          <li>
            <span className="font-medium text-blue-500">Backend:</span> Prisma e
            Supabase
          </li>
          <li>
            <span className="font-medium text-blue-500">Banco de Dados:</span>{" "}
            PostgreSQL
          </li>
        </ul>
      </div>
    </div>
  );
}
