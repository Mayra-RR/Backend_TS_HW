import {Request, Response} from 'express';
import {empleados} from '../../fakeData/empleados.json';

//Delete
export default (req: Request, res:Response )=> {
    const employee = req.params.id;
    const index= empleados.findIndex(x => x.id === employee);

    if(index < 0){ 
        return res.sendStatus(400);
    } 
    
    empleados.splice(index, 1);
    res.sendStatus(200);
};

