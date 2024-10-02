CREATE TABLE `call` (
	`id` text PRIMARY KEY NOT NULL,
	`method` text NOT NULL,
	`request` text NOT NULL,
	`response` text NOT NULL,
	`token` text NOT NULL,
	`channelId` text NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `calls`;