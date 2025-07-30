import express from 'express';
import { calculateMonthlyPayment } from './controllers/mortgage.controller';

const app = express();

app.use(express.json());

app.post('/mortgage-quote', calculateMonthlyPayment);

export default app;