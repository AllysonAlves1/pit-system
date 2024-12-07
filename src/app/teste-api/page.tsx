"use client";
import { useState } from "react";

export default function TestPit() {
  const [response, setResponse] = useState<any>(null);
  const [semestre, setSemestre] = useState<string>("");
  const [docenteId, setDocenteId] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  // Função de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!semestre || !docenteId) {
      setError("Todos os campos devem ser preenchidos.");
      return;
    }
    
    setError(null);

    try {
      const res = await fetch("/api/pit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          semestre,
          docenteId,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data);
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Erro ao criar PIT");
      }
    } catch (error) {
      setError("Erro ao comunicar com o servidor.");
    }
  };

  return (
    <div>
      <h1>Criar PIT</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="semestre">Semestre</label>
          <input
            type="text"
            id="semestre"
            placeholder="Semestre"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="docenteId">ID do Docente</label>
          <input
            type="number"
            id="docenteId"
            placeholder="ID do Docente"
            value={docenteId}
            onChange={(e) => setDocenteId(Number(e.target.value))}
          />
        </div>

        <div>
          <button type="submit">Criar PIT</button>
        </div>
      </form>

      {/* Exibe mensagem de erro, se houver */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Exibe a resposta da API, se houver */}
      {response && (
        <div>
          <h2>Resposta:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
