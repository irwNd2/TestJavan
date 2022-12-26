DROP TABLE IF EXISTS "public"."Children";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Children_id_seq";

-- Table Definition
CREATE TABLE "public"."Children" (
    "id" int4 NOT NULL DEFAULT nextval('"Children_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "gender" varchar(255),
    "ParentId" int4,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "Children_ParentId_fkey" FOREIGN KEY ("ParentId") REFERENCES "public"."Parents"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Children" ("id", "name", "gender", "ParentId", "createdAt", "updatedAt") VALUES
(1, 'Budi', 'Laki-Laki', 1, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."Children" ("id", "name", "gender", "ParentId", "createdAt", "updatedAt") VALUES
(2, 'Nida', 'Perempuan', 1, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."Children" ("id", "name", "gender", "ParentId", "createdAt", "updatedAt") VALUES
(3, 'Andi', 'Laki-Laki', 1, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."Children" ("id", "name", "gender", "ParentId", "createdAt", "updatedAt") VALUES
(4, 'Sigit', 'Laki-Laki', 1, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');