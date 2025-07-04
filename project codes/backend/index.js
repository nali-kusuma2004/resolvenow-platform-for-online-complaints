const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { users } = require('./schema'); // Importing the user schema
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/complaintdb")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Not connected", err));

// Schemas
const complaintSchema = new mongoose.Schema({
    name: String,
    type: String,
    complaintaction: String
});



// Models
const Complaint = mongoose.model("complaint", complaintSchema);
// const UsersData = mongoose.model("usersdata", userSchema);

// ✅ Complaint APIs
app.post("/api/complaint", async (req, res) => {
    try {
        const newComplaint = new Complaint(req.body);
        const saveComplaint = await newComplaint.save();
        res.json({ message: 'Complaint saved successfully', data: saveComplaint });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save complaint', error: error.message });
    }
});

app.get("/api/complaint", async (req, res) => {
    try {
        const data = await Complaint.find();
        res.json({ message: 'Complaints fetched successfully', data: data });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch complaints', error: error.message });
    }
});

app.put("/api/complaint/:id", async (req, res) => {
    try {
        const updated = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Complaint updated', data: updated });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update complaint', error: error.message });
    }
});

// ✅ User Registration API
app.post("/api/users",async (req, res) => {
    try {
        const {email,name,password}=req.body;
        // Check if user already exists
        const existinguser=await users.findOne({email:email});
        if(existinguser){
            res.json({message:"user already exist",data:existinguser})
        }
        else{
        const newUser = new users(req.body);
        const saveUser = await newUser.save();
        res.json({ message: 'User saved successfully', data: saveUser });
        }
    } catch (error) {
        res.json({ message: 'Failed to save user', error: error.message });
    }
});
app.post("/api/userlog" ,async (req,res)=>{
    try{
        const {email,password,usertype}=req.body;
         const userdata =await users.find({email:email,password:password,usertype:usertype});
         if(userdata){
            // Assuming you want to send a success message back to the client

            res.json({ message: 'User found', data:userdata });  
         }
         else{
            res.json({ message: 'User not found' });
         }
    }
    catch(err){
        res.json({message:"error in login" +err.message});
    }
})

// ✅ Simple route
app.get("/App", (req, res) => {
    res.send("Home page");
});


// ✅ Start Server
const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
