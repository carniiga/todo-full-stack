/*
  Warnings:

  - Added the required column `finish` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "todo" ADD COLUMN     "finish" TEXT NOT NULL;
