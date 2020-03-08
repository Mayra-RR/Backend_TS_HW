import listEmployees from '../controllers/employees/list';
import createEmployees from '../controllers/employees/create';
import editEmployees from '../controllers/employees/edit';
import deleteEmployees from '../controllers/employees/delete';
import findEmployees from '../controllers/employees/find';
import express, {Router} from 'express';
import employeesValidationSchema from '../middleware/employees'


const router: Router = express.Router();

// Listar
router.get('/list', listEmployees);

// Create
router.post('/create', [employeesValidationSchema], createEmployees);

// Edit
router.put('/edit', [employeesValidationSchema], editEmployees);

// Delete
router.delete('/delete/:id', deleteEmployees);

// Find
router.get('/find/:id', findEmployees)

export default router;