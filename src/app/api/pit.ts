import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type PIT = {
  semestre: string;
  docenteId: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST":
      const postData: PIT = req.body;
      try {
        const pit = await prisma.pIT.create({
          data: { 
            semestre: postData.semestre, 
            docenteId: postData.docenteId 
          },
        });
        return res.status(201).json(pit);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao criar PIT" });
      }

    case "GET":
      const semestreQuery = req.query.semestre;
      try {
        const pits = await prisma.pIT.findMany({
          where: { 
            semestre: String(semestreQuery) // Fazendo a conversão para string explicitamente
          },
          include: {
            atividades: true,   // Inclui as atividades associadas
            docente: true,      // Inclui o docente associado
          },
        });
        return res.status(200).json(pits);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar PITs" });
      }

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
