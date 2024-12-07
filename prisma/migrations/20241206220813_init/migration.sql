-- CreateTable
CREATE TABLE "Docente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Docente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PIT" (
    "id" SERIAL NOT NULL,
    "semestre" TEXT NOT NULL,
    "docenteId" INTEGER NOT NULL,

    CONSTRAINT "PIT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atividade" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "pitId" INTEGER NOT NULL,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Docente_email_key" ON "Docente"("email");

-- AddForeignKey
ALTER TABLE "PIT" ADD CONSTRAINT "PIT_docenteId_fkey" FOREIGN KEY ("docenteId") REFERENCES "Docente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_pitId_fkey" FOREIGN KEY ("pitId") REFERENCES "PIT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
