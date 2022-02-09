const express = require("express");
const cors = require("cors");
const pool = require("./database");
const { reset } = require("nodemon");
const app = express();
const food = require('./routes/food')
const animals = require ('./routes/animals')
const education = require('./routes/education')

app.use(express.json());
app.use(cors());
app.listen(5000, () => {
  console.log("app listening to port 5000. TeeHee");
});

//food
//first parameter apending url
//second parameter is the router

app.use('/food', food)

app.use('/animals', animals)

app.use('/contact', contact)

app.use('/education', education)



/*TBC by Boo
app.put('/countries/:id', async(req,res)=>{

        const id = req.params.id;
        const country=req.body
    try {
    
        const response = await pool.query('SELECT * FROM countries WHERE id=$1',[id])
        console.log(response.rows[0])
        res.json(response.rows[0])
    } catch (e) {
        console.log(e.message)
    }
})*/
