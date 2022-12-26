DROP TABLE IF EXISTS "public"."Parents";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Parents_id_seq";

-- Table Definition
CREATE TABLE "public"."Parents" (
    "id" int4 NOT NULL DEFAULT nextval('"Parents_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "gender" varchar(255),
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Parents" ("id", "name", "gender", "createdAt", "updatedAt") VALUES
(1, 'Bani', 'Laki-Laki', '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
