// pages/api/atividade.ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type Atividade = {
  tipo: string;
  descricao: string;
  pitId: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { tipo, descricao, pitId }: Atividade = req.body;
      try {
        const atividade = await prisma.atividade.create({
          data: { tipo, descricao, pitId },
        });
        return res.status(201).json(atividade);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao criar atividade" });
      }

    case "DELETE":
      const { id } = req.query;
      try {
        await prisma.atividade.delete({ where: { id: parseInt(id as string, 10) } });
        return res.status(204).end();
      } catch (error) {
        return res.status(500).json({ error: "Erro ao deletar atividade" });
      }

    default:
      res.setHeader("Allow", ["POST", "DELETE"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
