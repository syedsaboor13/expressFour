import express from "express"

const app = express()
const PORT = 5000 // ==> http://localhost:5000
app.use(express.json())
// if you didnt write this line
// you cannot take data from user


app.get("/", (req ,res)=>{
    try {
        let data = ["Bob","Alex"]
        console.log(data);
        res.status(200).json({data : data})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : error})
    }
})

// POST API
// Reason : to take data from user

// How to make a post api
// 1. add this line on top
// app.use(express.json())
// 2. use req code
// let userData = req.body;


app.post("/register", (req, res)=>{
    try {
        let userInput = req.body;
        console.log(userInput);
        res.status(200).json({ msg : "register sucssful"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : error})
    }
})

app.post("/login", (req, res) =>{
    try {
        // taking new inputs
        // console.log(req.body);
        let email = req.body.email;
        let password = req.body.password
        console.log(email + password);
        if (password.length < 3){
            return res.status(405).json({ msg : "Password is too short"})
        }

        let outermessage = `My email is ${email} and my Password is ${password}`
        console.log(outermessage);
        res.status(200).json({ msg : outermessage})

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg : error })
    }
})

app.listen(PORT, ()=>{
    console.log("Sever is live");
})