const express=require("express");
const mysql=require("mysql2");
const bodyParser=require("body-parser");
const app=express();
const port =3000;
const cors=require('cors')
app.use(cors());
app.use(bodyParser.json());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"jwt_security",
    port:3306
});
db.connect((err)=>{
    if(err){
        console.error("error showing while"+err.stack);
    }
    else {
        console.log("db successfully connected"+db.threadId);
    }
});
//post method
app.post("/addbankdetails",(req,res)=>{
    const {accountno,branch,ifsccode,name,amount,date}=req.body;
    db.query("insert into bank (accountno,branch,ifsccode,name,amount,date) values (?,?,?,?,?,?)"
    ,[accountno,branch,ifsccode,name,amount,date],(error,results,fields)=>{
        if(error){
            console.error("error showing while insertdata",error.stack);
            res.status(500).send({error:"error"})
        }
        else{
            res.status(200).send({msg:"send successfully"});
        }
      });
});
//getById method
app.get("/getById/:accountno", (req, res) => {
    const accountno = req.params.accountno;
  
    db.query(
      "SELECT * FROM bank WHERE accountno = ?",
      [id],
      (error, results, fields) => {
        if (error) {
          console.error("Error executing query: " + error.stack);
          res.status(500).send("Error");
        } else {
        
            res.status(200).send(results[0]);
          
        }
      }
    );
  });
  app.get("/getbyall", (req, res) => {
    db.query('SELECT * FROM bank', (error, results, fields) => {
      if (error) {
        console.error("Error in statement", error.stack);
        res.status(500).send({ error: "Internal Server Error" });
      } else {
        res.status(200).send(results);
      }
    });
  });
  app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
  
    db.query('DELETE FROM bank WHERE id = ?', [id], (error, results, fields) => {
      if (error) {
        console.error("Error in delete statement", error.stack);
        res.status(500).send({ error: "Internal Server Error" });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).send({ message: "Record deleted successfully" });
        } else {
          res.status(404).send({ error: "Record not found" });
        }
      }
    });
  });
  
  

app.listen(port,()=>{
    console.log(`application connect ${port}`);
});