ALTER TABLE "portfolios" ALTER COLUMN "links" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "portfolios" ALTER COLUMN "followers" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "portfolios" ALTER COLUMN "following" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "portfolios" ALTER COLUMN "repos" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "portfolios" ALTER COLUMN "font" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "portfolios" ALTER COLUMN "colors" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "stars" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "forks" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "topics" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "sort_order" SET NOT NULL;