import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import * as authProtocols from '../protocols/authProtocols.js';
import * as authRepository from '../repository/authRepository.js';
import signupSchema from '../schemas/signupSchema.js';
import signinSchema from '../schemas/signinSchema.js';


async function signup ( req: Request, res: Response) {
    const { name, email, password } = req.body as authProtocols.signUpUser;

    const { error } = signupSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    const hashPassword: string = bcrypt.hashSync(password, 10);

    try {
        const result = await authRepository.searchEmail(email);

        if (result.rows[0]) {
            return res.status(409).send("Email has already been registered");
        }

        await authRepository.insertUser(name, email, hashPassword);

        return res.status(201).send("User created");
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }

};

async function signin (req: Request, res: Response) {
    const { email, password } = req.body as Pick<authProtocols.signUpUser, "email" | "password">;

    const { error } = signinSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            message: error.message
        });
    }

    try {

        const user = await authRepository.searchEmail(email);

        const verifyPassword: boolean = bcrypt.compareSync(password, user.rows[0].password);

        if (!verifyPassword) {
            return res.status(401).send("email or password incorrect");
        }

        const token: string = uuidv4();
        const userId: number = user.rows[0].id;

        await authRepository.loginUser(userId, token);

        return res.status(200).send("logged");

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};



export {
    signin,
    signup,
};