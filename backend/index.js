import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.use('/',(req, res, next) => {
    res.send('Hello world');
})


app.listen(PORT, () => console.log(`listing on port :- ${PORT}...`));
