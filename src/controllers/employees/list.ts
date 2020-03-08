import {Request, Response} from 'express';
import { empleados } from '../../fakeData/empleados.json';

export default (req: Request, rest: Response) => {
    rest.status(200).json(empleados);
}