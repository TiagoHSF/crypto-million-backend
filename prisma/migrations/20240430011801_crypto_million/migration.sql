-- CreateTable
CREATE TABLE "user" (
    "uuid" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "validado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
