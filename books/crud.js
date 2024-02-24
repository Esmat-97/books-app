const express=require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const con =  mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'books'
});



app.get('/', (req, res) => {
  con.query("SELECT * FROM books", (err, result) => {
      if (err) {
          console.error("Error executing doctors query:", err);
          return res.status(500).json({ error: "Failed to fetch doctors data" });
      }
      else{
        res.json({result});
      }

      
  });
});


    







    
app.listen(2000,()=>{
console.log('the server listen at posrt http://localhost:2000');
});