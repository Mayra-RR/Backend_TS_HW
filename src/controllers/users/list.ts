import {Request, Response} from 'express';
import {usuarios} from '../../fakeData/usuarios.json';

export default (req: Request, rest: Response) => {
    rest.status(200).json(usuarios)
}