export default function ListPIT({ pits, onEdit, onDelete }: any) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Atividades Cadastradas</h2>
      {pits.length === 0 ? (
        <p className="text-gray-500">Nenhuma atividade cadastrada.</p>
      ) : (
        <ul className="space-y-4">
          {pits.map((pit) => (
            <li key={pit.id} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold">{pit.docente?.nome || "Docente"}</h3>
              <p>{pit.semestre}</p>
              <p>
                <span className="font-medium">{pit.tipo}:</span> {pit.descricao}
              </p>
              <div className="flex space-x-2 mt-2">
                <button className="text-blue-500" onClick={() => onEdit(pit)}>
                  Editar
                </button>
                <button
                  className="text-red-500"
                  onClick={() => onDelete(pit.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
