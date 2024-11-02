-- AddForeignKey
ALTER TABLE "channel" ADD CONSTRAINT "channel_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
