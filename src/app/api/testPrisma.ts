import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        // Aqui você está buscando docentes, mas você pode ajustar para qualquer outra tabela que queira acessar
        const docentes = await prisma.docente.findMany();
        
        // Retorna os docentes encontrados
        return res.status(200).json(docentes);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        return res.status(500).json({ error: "Erro ao buscar dados do banco de dados" });
      }

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
