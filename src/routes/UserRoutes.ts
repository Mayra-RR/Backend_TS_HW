import listUsers from '../controllers/users/list';
import createUsers from '../controllers/users/create';
import editUsers from '../controllers/users/edit';
import deleteUsers from '../controllers/users/delete';
import findUsers from '../controllers/users/find';
import express, {Router} from 'express';
import userValidationSchema from '../middleware/users'


const router: Router = express.Router();

// Listar
router.get('/list', listUsers);

// Create
router.post('/create', [userValidationSchema], createUsers);

// Edit
router.put('/edit', [userValidationSchema], editUsers);

// Delete
router.delete('/delete/:id', deleteUsers);

// Find
router.get('/find/:id', findUsers)

export default router;