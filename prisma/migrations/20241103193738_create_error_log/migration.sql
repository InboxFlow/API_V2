-- CreateTable
CREATE TABLE "errorLog" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "request" TEXT NOT NULL,
    "params" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,

    CONSTRAINT "errorLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "errorLog" ADD CONSTRAINT "errorLog_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
