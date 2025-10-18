// post Request used to send data to the server (server ko data Send karne ke liye use hita hai post request);
// client se jab server ko data send krna hota hai toh hum POST req ka use krte hai 

import express from 'express';
 
import users from './data.js';



const app = express();

app.use(express.json());

const PORT = 9000;

app.post('/api/v1/users' , (req,res)=>{


// console.log(req.body);

const {name , displayname} = req.body;

const userId = Number(users.id);

const newUser = {
    id: userId.length + 1,
    name,
    displayname,
}

users.push(newUser);

res.status(201).send({
    massage:"User created",
    data:newUser
});
});



app.listen(PORT,(req,res)=>{
    console.log(`server is running at port ${PORT}`);
});




