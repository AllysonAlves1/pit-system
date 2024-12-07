"use client";
import AtividadeForm from "@/components/atividadeForm";
import DocenteForm from "@/components/docenteForm";
import SemestreSelector from "@/components/semestreForm";
import { useEffect, useState } from "react";
import ListPIT from "./list/page";
import Link from "next/link";
import supabase from "@/lib/supabase";

type PIT = {
  id: number;
  semestre: string;
  docente: { nome: string };
  atividades: { tipo: string; descricao: string }[];
};

export default function CriarPIT() {
  const [semestre, setSemestre] = useState<string>("");
  const [pits, setPits] = useState<PIT[]>([]);

  const handleSaveDocente = async (docente: {
    nome: string;
    email: string;
  }) => {
    try {
      const response = await fetch("/api/docente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(docente),
      });

      if (!response.ok) throw new Error("Erro ao salvar o docente");

      const data = await response.json();
      console.log("Docente salvo:", data);
      alert("Docente cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar docente");
    }
  };

  const handleSaveAtividade = async (atividade: {
    tipo: string;
    descricao: string;
    pitId: number;
  }) => {
    try {
      const response = await fetch("/api/atividade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(atividade),
      });

      if (!response.ok) throw new Error("Erro ao salvar a atividade");

      const data = await response.json();
      console.log("Atividade salva:", data);
      alert("Atividade cadastrada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar atividade");
    }
  };

  const handleTestPrismaConnection = async () => {
    try {
      const response = await fetch("/api/testPrisma", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Erro ao testar a conexão com o banco de dados");

      const data = await response.json();
      console.log("Conexão com o banco de dados bem-sucedida:", data);
      alert("Conexão com o banco de dados bem-sucedida!");
    } catch (error) {
      console.error(error);
      alert("Erro ao testar a conexão com o banco de dados");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <Link
        href="/sobre"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 absolute right-4"
      >
        Sobre
      </Link>
      <button className="p-4" onClick={() => handleTestPrismaConnection()}>Testar</button>
      <SemestreSelector semestre={semestre} onChange={setSemestre} />
      <DocenteForm onSave={handleSaveDocente} />
      <AtividadeForm semestreId={semestre} onSave={handleSaveAtividade} />
      <ListPIT pits={pits} />
    </div>
  );
}
