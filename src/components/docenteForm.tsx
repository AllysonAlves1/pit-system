import { useState } from "react";

export default function DocenteForm({ onSave }: any) {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      onSave({ nome });
      setNome("");
    }
  };

  return (
    <form className="p-4 bg-white shadow rounded-lg" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Cadastrar Docente</h2>
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        placeholder="Nome do docente"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
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
