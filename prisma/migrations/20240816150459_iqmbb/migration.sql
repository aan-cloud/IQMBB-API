-- CreateTable
CREATE TABLE "operator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "addres" TEXT NOT NULL,
    "healty" BOOLEAN NOT NULL,

    CONSTRAINT "operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tube" (
    "id" TEXT NOT NULL,
    "part" TEXT NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "tube_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scedule" (
    "id" SERIAL NOT NULL,
    "operator" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "machine" TEXT NOT NULL,
    "tube" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "section_name_key" ON "section"("name");

-- AddForeignKey
ALTER TABLE "scedule" ADD CONSTRAINT "scedule_operator_fkey" FOREIGN KEY ("operator") REFERENCES "operator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scedule" ADD CONSTRAINT "scedule_section_fkey" FOREIGN KEY ("section") REFERENCES "section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scedule" ADD CONSTRAINT "scedule_machine_fkey" FOREIGN KEY ("machine") REFERENCES "machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scedule" ADD CONSTRAINT "scedule_tube_fkey" FOREIGN KEY ("tube") REFERENCES "tube"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
