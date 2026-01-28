import express from 'express';
import dotenv from 'dotenv';
import router from './server/routes/main.js';
import connectDB from './server/config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.set('view engine', 'ejs');
app.use('/', router);
app.set(express.static('public'));

connectDB();




app.listen(PORT, ()=>{
   console.log(`Server is running on http://localhost:${PORT}`);

})