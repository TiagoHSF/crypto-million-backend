-- CreateTable
CREATE TABLE "Operation" (
    "uuid" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "moeda" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "expiracao" TEXT NOT NULL,
    "hora" TEXT NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("uuid")
);
