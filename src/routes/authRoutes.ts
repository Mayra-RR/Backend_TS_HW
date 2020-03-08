import express, {Router} from 'express';
import login from "../controllers/auth/login"
import credentials from "../middleware/credentials";
const router: Router = express.Router();

//Ruta login
router.post('/login', [credentials, login]);

export default router;
