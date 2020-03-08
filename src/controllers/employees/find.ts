import {Request, Response} from 'express';
import {empleados} from '../../fakeData/empleados.json';
import {Employee} from '../../models/Employee';

//Filtrar por id
export default(req: Request, res: Response) => {
    const id: string = req.params.id;
    const find: Employee = empleados.find(i => i.id === id);

    if (!find){
        return res.sendStatus(404);
    }
    
    res.status(200).json(find)
};
