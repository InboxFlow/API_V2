-- CreateIndex
CREATE INDEX "request_fulltext_idx" ON "call"("request");

-- CreateIndex
CREATE INDEX "response_fulltext_idx" ON "call"("response");
