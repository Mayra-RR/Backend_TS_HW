import express, { Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes';
import employeesRoutes from './routes/employeesRoutes'
import auth from "./routes/authRoutes";
import tokenValidator from "./middleware/token";

const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// user routes
app.use('/users', [tokenValidator, userRoutes]);

// user routes
app.use('/employees', employeesRoutes);

// Auth routes
app.use('/auth', auth);

export default app;