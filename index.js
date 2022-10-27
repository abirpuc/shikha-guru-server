const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000;

const course = require("./data/course.json");
const allcourse = require("./data/allcourse.json")

app.use(cors());

app.get('/',(req,res)=>{
    res.send('The server is running!!');
})

app.get('/course-data',(req,res) =>{
   res.send(course);
})

app.get('/all-courses',(req,res) =>{
    res.send(allcourse)
})

app.get('/details/:id',(req,res) =>{
    const id = (req.params.id);
    const data = allcourse.find(d => d._id === id)
    res.send(data)
})

app.get('/single-courses/:id',(req,res) =>{
    const id = (req.params.id)
    if(id==='8'){
        res.send(allcourse)
    }
    const data = allcourse.filter(d => d.course_id === id)
    res.send(data);
})

app.listen(port,()=>{
    console.log(`this server port is ${port}`);
})