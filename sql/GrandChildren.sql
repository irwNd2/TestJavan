DROP TABLE IF EXISTS "public"."GrandChildren";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "GrandChildren_id_seq";

-- Table Definition
CREATE TABLE "public"."GrandChildren" (
    "id" int4 NOT NULL DEFAULT nextval('"GrandChildren_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "gender" varchar(255),
    "ChildId" int4,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "GrandChildren_ChildId_fkey" FOREIGN KEY ("ChildId") REFERENCES "public"."Children"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."GrandChildren" ("id", "name", "gender", "ChildId", "createdAt", "updatedAt") VALUES
(1, 'Hari', 'Laki-Laki', 1, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."GrandChildren" ("id", "name", "gender", "ChildId", "createdAt", "updatedAt") VALUES
(2, 'Siti', 'Perempuan', 1, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."GrandChildren" ("id", "name", "gender", "ChildId", "createdAt", "updatedAt") VALUES
(3, 'Bila', 'Perempuan', 2, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."GrandChildren" ("id", "name", "gender", "ChildId", "createdAt", "updatedAt") VALUES
(4, 'Lesti', 'Perempuan', 2, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(5, 'Diki', 'Laki-Laki', 3, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(6, 'Doni', 'Laki-Laki', 4, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(7, 'Toni', 'Laki-Laki', 4, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');