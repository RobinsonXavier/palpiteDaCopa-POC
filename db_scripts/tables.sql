
CREATE DATABASE "palpitesDaCopaDb";

----------------------------------------------------------------------------

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	"email" VARCHAR(100) UNIQUE NOT NULL,
	"hits" INTEGER NOT NULL
);

CREATE TABLE "games" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"status" VARCHAR(6) NOT NULL,
	"scoreBoard" VARCHAR(5) NOT NULL
);

CREATE TABLE "bets" (
	"id" SERIAL PRIMARY KEY,
	"userId" INTEGER REFERENCES "users"("id") NOT NULL,
	"gameId" INTEGER REFERENCES "games"("id") NOT NULL,
	"bet" VARCHAR(5) NOT NULL
);

CREATE TABLE "sessions" (
	"id" SERIAL PRIMARY KEY,
	"userId" INTEGER REFERENCES "users"("id") UNIQUE NOT NULL,
	"token" VARCHAR(255) UNIQUE NOT NULL,
	"lastStatus" BIGINT NOT NULL
);