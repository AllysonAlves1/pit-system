"use client";
import supabase from "@/lib/supabase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditarPIT() {
    const router = useRouter();
    const { id } = router.query;
  
    const [semestre, setSemestre] = useState('');
    const [atividades, setAtividades] = useState([{ tipo: '', descricao: '' }]);
  
    useEffect(() => {
      const fetchPIT = async () => {
        const res = await fetch(`/api/pit/${id}`);
        const pit = await res.json();
        setSemestre(pit.semestre);
        setAtividades(pit.atividades);
      };
  
      if (id) fetchPIT();
    }, [id]);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const res = await fetch(`/api/pits`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, semestre, atividades }),
      });
  
      if (res.ok) {
        alert('PIT atualizado com sucesso!');
        router.push('/pits');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Semestre"
          value={semestre}
          onChange={(e) => setSemestre(e.target.value)}
        />
        {atividades.map((atividade, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Tipo"
              value={atividade.tipo}
              onChange={(e) => {
                const newAtividades = [...atividades];
                newAtividades[index].tipo = e.target.value;
                setAtividades(newAtividades);
              }}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={atividade.descricao}
              onChange={(e) => {
                const newAtividades = [...atividades];
                newAtividades[index].descricao = e.target.value;
                setAtividades(newAtividades);
              }}
            />
          </div>
        ))}
        <button type="submit">Salvar Alterações</button>
      </form>
  );
}