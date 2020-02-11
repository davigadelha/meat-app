import {Request, Response} from 'express';
import {User, users} from './users';

import * as jwt from 'jsonwebtoken';
import { apiConfig } from './api-config';

export const handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body;

    if (isValid(user)) {
        const dbUSer: User = users[user.email];
        const token = jwt.sign({sub: dbUSer.email, iss: 'meat-app'},
            apiConfig.secret);
        return resp.json({name: dbUSer.name, email: dbUSer.email, accesToken: token});
    }else {
        resp.status(403).json({message: 'Dados inválidos.'});
    }
}

function isValid(user: User): boolean {
    if (!user) {
        return false;
    }
    const dbUSer = users[user.email]
    return dbUSer !== undefined && dbUSer.matches(user);
}
