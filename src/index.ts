import express, { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import cors from 'cors';

const app = express();
const port = 8888;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/auth', authRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../src/views/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
