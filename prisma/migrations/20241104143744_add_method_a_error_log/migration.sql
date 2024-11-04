/*
  Warnings:

  - Added the required column `method` to the `errorLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "errorLog" ADD COLUMN     "method" TEXT NOT NULL;
