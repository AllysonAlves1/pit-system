import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type Docente = {
  nome: string;
  email: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { nome, email }: Docente = req.body;
      try {
        const docente = await prisma.docente.create({ data: { nome, email } });
        return res.status(201).json(docente);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao criar docente" });
      }

    case "GET":
      try {
        const docentes = await prisma.docente.findMany();
        return res.status(200).json(docentes);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar docentes" });
      }

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
