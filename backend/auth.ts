import {Request, Response} from 'express';
import {User, users} from './users';


export const handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body;

    if (isValid(user)) {
        const dbUSer: User = users[user.email];
        return resp.json({name: dbUSer.name, email: dbUSer.email});
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
