CREATE TABLE IF NOT EXISTS "call" (
	"id" text PRIMARY KEY NOT NULL,
	"method" text NOT NULL,
	"request" text NOT NULL,
	"response" text NOT NULL,
	"token" text NOT NULL,
	"channelId" text NOT NULL,
	"createdAt" text NOT NULL,
	"updatedAt" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "channel" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"userId" text NOT NULL,
	"createdAt" text NOT NULL,
	"updatedAt" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"mail" text NOT NULL,
	"password" text NOT NULL,
	"verified" boolean NOT NULL,
	"createdAt" text NOT NULL,
	"updatedAt" text NOT NULL,
	CONSTRAINT "user_mail_unique" UNIQUE("mail")
);
