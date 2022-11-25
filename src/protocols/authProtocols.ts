import { users } from "@prisma/client";

export type signUp = Omit<users, "id">;