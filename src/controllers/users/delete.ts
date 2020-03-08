import {Request, Response} from 'express';
import {usuarios} from '../../fakeData/usuarios.json';

//Delete
export default (req: Request, res:Response )=> {
    const user = req.params.id;
    const index= usuarios.findIndex(x => x.id === user);

    if(index < 0){ 
        return res.sendStatus(400);
    } 
    
    usuarios.splice(index, 1);
    res.sendStatus(200);
};

