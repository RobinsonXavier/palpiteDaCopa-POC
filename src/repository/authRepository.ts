import { users, sessions } from "@prisma/client";
import prisma from "../database/db.js";
import { signUp } from '../protocols/authProtocols.js';

async function insertUser (user: signUp): Promise<signUp>{
    const result = await prisma.users.create({
        data: user
    });

    return result;
};

async function searchEmail(email:string): Promise<users>{
    const result = await prisma.users.findFirst(
        {
            where: {
                email
            }
        }
    );

    return result;
}

async function loginUser(userId: number, token: string): Promise<sessions>{
    const status: number = Date.now();

    return prisma.sessions.create({
        data: {
            userId,
            token,
            lastStatus: status
        }
    })
}

async function searchSession(userId: number): Promise<sessions> {
    return prisma.sessions.findFirst({
        where:{
            userId
        }
    });
}

async function searchToken(token: string): Promise<sessions>{
    return prisma.sessions.findFirst({
        where:{
            token
        }
    })
};

export {
    insertUser,
    searchEmail,
    loginUser,
    searchSession,
    searchToken
};