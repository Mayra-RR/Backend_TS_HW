import {Request, Response} from 'express';
import {usuarios} from '../../fakeData/usuarios.json';
import {User} from '../../models/User';

//Actualizar
export default(req: Request, res: Response)=> {
    const user: User = req.body;
    const index = usuarios.findIndex(u => u.id === user.id);

    usuarios.splice(index, 1, user);
    res.status(200).json(user);
 };
