import {Request, Response} from 'express';
import {empleados} from '../../fakeData/empleados.json';
import {Employee} from '../../models/Employee';

//Actualizar
export default(req: Request, res: Response)=> {
    const employee: Employee = req.body;
    const index = empleados.findIndex(u => u.id === employee.id);

    empleados.splice(index, 1, employee);
    res.status(200).json(employee);
 };
