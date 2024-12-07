import { useState } from "react";

export default function AtividadeForm({ docenteId, semestreId, onSave }:any) {
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipo && descricao) {
      onSave({ docenteId, semestreId, tipo, descricao });
      setTipo("");
      setDescricao("");
    }
  };

  return (
    <form className="p-4 bg-white shadow rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Adicionar Atividade</h2>
      <select
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="">Selecione o tipo</option>
        <option value="aulas">Aulas</option>
        <option value="apoio_ensino">Apoio ao Ensino</option>
        <option value="pesquisa">Pesquisa</option>
        <option value="extensao">Extensão</option>
        <option value="administrativa">Atividades Administrativas</option>
      </select>
      <textarea
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Salvar
      </button>
    </form>
  );
}
