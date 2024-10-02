CREATE TABLE `calls` (
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
CREATE TABLE `channel` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`userId` text NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`mail` text NOT NULL,
	`password` text NOT NULL,
	`verified` integer NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_mail_unique` ON `user` (`mail`);