import {Request, Response} from 'express';
import {usuarios} from '../../fakeData/usuarios.json';
import {User} from '../../models/User';

//Filtrar por id
export default(req: Request, res: Response) => {
    const id: string = req.params.id;
    const find: User = usuarios.find(i => i.id === id);

    if (!find){
        return res.sendStatus(404);
    }
    
    res.status(200).json(find)
};
