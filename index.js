import express from 'express';

const app = express();
 
const PORT = 5000;

let allUSers = []

app.post('/user', (req, res)=>{
    
    // extract these data from the payload(req.body)
    const {first_name, last_name, date_of_birth, school} = req.body;

    // store the data in the allUSers array variable
    allUSers.push({
        "first_name": first_name,
        "last_name": last_name,
        "date_of_birth": date_of_birth,
        "school": school,
    })

    res.send('User has been created')
})

app.get('/users', (req, res)=>{
    res.send(allUSers)
});



app.listen(PORT, ()=>console.log("Server is up and running"))