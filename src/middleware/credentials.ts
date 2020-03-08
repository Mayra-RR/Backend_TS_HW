import { Request, Response, NextFunction } from 'express';
import { Credentials, credentialsSchema } from '../models/credentials';
export default (req: Request, res: Response, next:NextFunction) => {
    const credential: Credentials = req.body;
    const validation = credentialsSchema.validate(credential);
    if (validation.error){
        return res.status(400).json(validation.error.details);
    }

    next();

}