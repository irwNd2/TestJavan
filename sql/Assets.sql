DROP TABLE IF EXISTS "public"."Assets";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS "Assets_id_seq";

-- Table Definition
CREATE TABLE "public"."Assets" (
    "id" int4 NOT NULL DEFAULT nextval('"Assets_id_seq"'::regclass),
    "name" varchar(255) NOT NULL,
    "ParentId" int4,
    "ChildId" int4,
    "GrandChildId" int4,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "Assets_ParentId_fkey" FOREIGN KEY ("ParentId") REFERENCES "public"."Parents"("id"),
    CONSTRAINT "Assets_ChildId_fkey" FOREIGN KEY ("ChildId") REFERENCES "public"."Children"("id"),
    CONSTRAINT "Assets_GrandChildId_fkey" FOREIGN KEY ("GrandChildId") REFERENCES "public"."GrandChildren"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Assets" ("id", "name", "ParentId", "ChildId", "GrandChildId", "createdAt", "updatedAt") VALUES
(1, 'Samsung Universe 9', NULL, 1, NULL, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."Assets" ("id", "name", "ParentId", "ChildId", "GrandChildId", "createdAt", "updatedAt") VALUES
(2, 'Samsung Galaxy Book', NULL, 1, NULL, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."Assets" ("id", "name", "ParentId", "ChildId", "GrandChildId", "createdAt", "updatedAt") VALUES
(3, 'Huawei P30', NULL, 2, NULL, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08');
INSERT INTO "public"."Assets" ("id", "name", "ParentId", "ChildId", "GrandChildId", "createdAt", "updatedAt") VALUES
(4, 'Samsung Universe 9', NULL, 3, NULL, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(5, 'Huawei P30', NULL, 4, NULL, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(6, 'iPhone 9', NULL, NULL, 1, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(7, 'iPhone X', NULL, NULL, 2, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(8, 'Samsung Universe 9', NULL, NULL, 3, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(9, 'Huawei P30', NULL, NULL, 4, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(10, 'iPhone X', NULL, NULL, 4, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(11, 'Samsung Galaxy Book', NULL, NULL, 5, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(12, 'iPhone X', NULL, NULL, 6, '2022-12-26 00:00:00+08', '2022-12-26 00:00:00+08'),
(13, 'MacBook Pro', 1, NULL, NULL, '2022-12-26 20:04:46.512+08', '2022-12-26 20:06:14.76+08');