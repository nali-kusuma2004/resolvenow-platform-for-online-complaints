const express=require('express');
// const path=require('path')
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/complaintdb");
const complaintschema=new mongoose.Schema({
    name:String,
    type:String,
    complaintaction:String
})

const  complaint= mongoose.model("complaint" ,complaintschema);

app.post("/api/complaint",async (req,res)=>{
    const newcomplaint=new complaint(req.body);
    const savecomplaint=await newcomplaint.save();
    res.json({message:'complaint saved successfully',data:savecomplaint});
})

app.get("/api/complaint",async (req,res)=>{
    const data=await complaint.find();
    res.json({message:'complaint fetched successfully',data:data})  
}
);
app.put("/api/complaint/:id",async (req,res)=>{
    console.log(req.params.id);
    const updated=await complaint.findByIdAndUpdate(req.params.id,req.body);
    res.json({message:'complaint updated',data:updated})
})



// app.use(express.static(path.join(__dirname,"frontend")))

app.use("/App",(req,res)=>{
    res.send("home page ")
});
const port=5000;
app.listen(port,()=>{
        console.log("server is running on port "+port);
});
