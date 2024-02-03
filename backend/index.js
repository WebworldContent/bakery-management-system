import express from 'express';
import cors from 'cors';
import menuRoute from './routes/menuRoute';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json())

app.use('/',(req, res, next) => {
    res.send('Hello world');
});

app.use('/admin', menuRoute);


app.listen(PORT, () => console.log(`listing on port :- ${PORT}...`));
