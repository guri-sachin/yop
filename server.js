require("dotenv").config();
const express =require("express");
 var nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path =require("path");
const app = express();
var mysql = require('mysql');
const bodyParser =require('body-parser');
const cors=require("cors");
app.use(bodyParser.json());
app.use(express.json())
var colors = require('colors');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));



  
app.use(cors());





//create connection
const conn =mysql.createConnection({
    host:'database-1.cp8omipjfldw.ap-northeast-1.rds.amazonaws.com',
    user:'root',
    password: 'guri1234',
    database:'track',
    port:'3306'

});



//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log ('Mysql Connected...');
});

colors.enable()

console.log('Error!'.underline.yellow);
console.log('Warning!'.red);
console.log('This is okay!'.green);





//route for enquery 
app.post('/location',(req,res) =>{


    let sql ="UPDATE location SET lon='"+req.body.lon+"',lat='"+req.body.lat+"' WHERE id='"+req.body.id+"'";
  let data ="lon='"+req.body.lon+"',lat='"+req.body.lat+"'";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json({data});
         console.log(results);
    });

});

//route for enquery 
app.get('/loee',(req,res) =>{
    let sql ="SELECT * FROM location where id=1";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});



//setInterval(function (){console.log(results)} , 5000);
//route for enquery 
app.get('/oyo',(req,res) =>{
    let sql ="UPDATE victory SET col1='"+req.body.name+"' WHERE id=1";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
           console.log(results)
    });
});
//route for enquery 
app.get('/oyop',(req,res) =>{
    let sql ="UPDATE product SET name='"+req.body.name+"',price='"+req.body.price+"' WHERE id="+req.body.id;
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
           console.log(results)
    });
});


//route for insert data to reasons (rea) 
app.post('/yio',(req,res) => {

    let data ={reason:req.body.setName};
    
    console.log(data);
    let sql = "INSERT INTO my SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
       
    
        });
});

//route for enquery 
app.get('/enq',(req,res) =>{
    let sql ="SELECT * FROM enquery";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//route for delete enquery
app.get('/enuerydelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM enquery WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Enwuiry');
        });
});



//route for list users
app.get('/plan',(req,res) =>{
    let sql ="SELECT * FROM plans ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for plan edit
app.get('/edi/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM plans WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for product update
app.post('/updat',(req,res)=>{
    let sql ="UPDATE plans SET title='"+req.body.title+"',description='"+req.body.description+"',amount='"+req.body.amount+"'  WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.redirect('/');
    });


});

//route for insert data to status
app.post('/rec/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
      console.log(data);
	
    let sql ="UPDATE transactions SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status processing
app.post('/pro/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE transactions SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status recived
app.post('/pen/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE transactions SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});


//route for accept users
app.get('/merry/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
  
    let sql = "insert into hotspot (location,dsc,pub,title) select location,description,published,title from spot where id="+id
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});




//route for delete users from requst

app.get('/sharry/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM spot WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});



//route for delete users
app.get('/rila/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into reject(user_email,title,description,published,location) select user_email,title,description,published,location from spot where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for select subscribe users
app.get('/sub',(req,res) =>{
    let sql ="select * from subscribe;";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});



//route for delete users from request

app.get('/tila/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM spot WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for activate users
app.get('/pinoa/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into blockusers select * from subscribe where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for delete blockusers

app.get('/noia/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM subscribe WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
       res.send(results)
      
        });
  
});

//route for activate users
app.get('/mino/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into subscribe select * from blockusers where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for delete product

app.get('/kika/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "DELETE FROM blockusers WHERE id="+id;
  
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});


//route for block users
app.get('/nois',(req,res) =>{
    let sql ="SELECT * FROM blockusers";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});



//route for insert data to hotspot
app.post('/hots',(req,res) => {
    let data = {location:req.body.location,dsc: req.body.description,pub:req.body.published,title:req.body.title};
    console.log(data);
    let sql = "INSERT INTO hotspot SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});

//route for list allhotspots
app.get('/allm',(req,res) =>{
    let sql ="SELECT * FROM hotspot ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});





//route for list users
app.get('/users',(req,res) =>{
    let sql ="SELECT * FROM users ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for insert data 
app.post('/Save',(req,res) => {
    let data = {username:req.body.username, email_address: req.body.email_address,password:req.body.password};
    console.log(data);
    let sql = "INSERT INTO register SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});


//route for list req hotspot
app.get('/hotti',(req,res) =>{
    let sql ="SELECT * FROM spot ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//route for list rejected users
app.get('/reje',(req,res) =>{
    let sql ="SELECT reject.id,reject.user_email,reject.title,reject.location,reject.description,reject.published,my.reason from reject join my on reject.id = my.id";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//route for list userlocation
app.get('/lusers',(req,res) =>{
    let sql ="SELECT * FROM userlocation ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for list transactions
app.get('/history',(req,res) =>{
    let sql ="SELECT * FROM transactions ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//route for list count of users
app.get('/sums',(req,res) =>{
    let sql =" select * from subscribe";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for list count of requests
app.get('/spots',(req,res) =>{
    let sql =" select * from spot";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for latest requests
app.get('/newreq',(req,res) =>{
    let sql ="SELECT * FROM spot WHERE LoginDate >= CURRENT_DATE";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
}); 


//route for list todays added users
app.get('/current',(req,res) =>{
    let sql ="SELECT * FROM subscribe WHERE pdate >= CURRENT_DATE";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});





//app api
//route for list subscription plans
app.get('/subplan',(req,res) =>{
    let sql ="SELECT * FROM plans ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});


//app api
//route for list allhotspot users
app.get('/aphotspot',(req,res) =>{
    let sql ="SELECT * FROM hotspot ";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//app api
//route for getting the enquiry from users
//inserted data by users
app.post('/enquiryap',(req,res) => {
    let data = {name:req.body.name,email:req.body.email,phone:req.body.phone,message:req.body.message};
    console.log(data);
    let sql = "INSERT INTO enquery SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});

//app api
//route for getting the Transaction history from users
//inserted data by users
app.post('/transaction',(req,res) => {
    let data = {username:req.body.username,email:req.body.email,phone:req.body.phone,subscription:req.body.subscription,plan:req.body.plan,status:req.body.status};
    console.log(data);
    let sql = "INSERT INTO transactions SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});

//app api
//route for getting the hotspot data from users
//inserted data by users
app.post('/reqhotspot',(req,res) => {
    let data = {user_email:req.body.user_email,title:req.body.title,description:req.body.description,published:req.body.published,location:req.body.location,date:req.body.date};
    console.log(data);
    let sql = "INSERT INTO spot SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});

//app api
//route for getting the data from users
//inserted data by users
app.post('/subscriber',(req,res) => {
    let data = {username:req.body.username,email:req.body.email,phone:req.body.phone,subscription:req.body.subscription,pdate:req.body.pdate,edate:req.body.edate};
    console.log(data);
    let sql = "INSERT INTO subscribe SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});



//admin login
//route for login page
app.post('/login',(req, res)=>{

    let sql = "select * from login where username='"+req.body.username+"' and password='"+req.body.password+"'" ;
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});


//app api
//route for getting the users lat long


    app.post('/location',(req,res) => {
        let data =   {lat:req.body.lat}
    
        setInterval ( ()=>
            console.log(data),4000
            );
        let sql = "INSERT INTO loc SET ?";
        let query = conn.query(sql, data,(err, results) => {
            if(err)throw err;
        
            });
    });
   



//app api
//sinup api for app
app.post('/sign',(req, res) => {

    let data = {username: req.body.username,email:req.body.email, password: req.body.password,subscription:req.body.subscription,date:req.body.date};
    console.log(data);

    let sql = "INSERT INTO signup SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err){
            res.send('user is already exist')
        }else{
            res.send('account created')
        }
        
        });
});

//app api
//route for login page
app.post('/log',(req, res) => {
    let data = {email: req.body.email, password: req.body.password};
    console.log(data);
    let sql = "INSERT INTO log SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err){
            res.send('user is already exist')
        }else{
            res.json(results);
        }
        });
});

//api for userlogin
app.post('/userlog',(req, res)=>{

    let sql = "select * from log where email='"+req.body.email+"' and password='"+req.body.password+"'" ;
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(results.length == 0){
            res.send('wrong email or password')
        }else{
            res.send('login succesfull')
        }
        });
});




//app api
//account data of user
app.get('/account/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="select username,email,subscription from signup where id="+id;
    let query =conn.query(sql, (err,results)=>{
        console.log(results);
        if (err) throw err;
        res.json(results);
        });
});


//app api
//app api for insert user emergency contect 
app.post('/Emergency',(req,res) => {
    let data = {id:req.body.id,Cname:req.body.Cname,Cphone:req.body.Cphone};
    console.log(data);
    let sql = "INSERT INTO Emergrncy SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
    
        });
});
//app api
//app api for get emergency users

app.get('/emselect/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="select Cname,Cphone from Emergrncy where id="+id;
    let query =conn.query(sql, (err,results)=>{
        console.log(results);
        if (err) throw err;
        res.json(results);
        });
});





//app api
//app api for delete emergency users
app.get('/emdelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="delete from Emergrncy where id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.send('user delete');
        });
});



//api for forgot password
app.post('/userfor',(req, res)=>{

    let sql = "select * from log where email='"+req.body.email+"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(results.length == 0){
            res.send('wrong email address')
        }else{
            res.send('email exist')
        }
        });
});

// change password 

app.post('/change',(req, res)=>{

    let sql = "select * from log where email='"+req.body.email+"' and password='"+req.body.password+"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        console.log(results)
        if(results.length == 0){
            res.status(500).json({ success: false});
        }else{
              let sql="UPDATE log SET password='"+req.body.password1+"' where email='"+req.body.email+"'";
            let query=conn.query(sql,(err,result)=>{
                if(err) throw err;
                res.status(200).json({ success: true });


            });
        }
        });
});


app.post('/cha',(req, res)=>{

    let sql = "select * from log where email='"+req.body.email+"' and password='"+req.body.password+"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(results.length == 0){
            res.status(500).json({ success: false,});
        }else{
            res.status(200).json({ success: true });
        }
        });
});

                
        





//route for password update
app.post('/passupdate',(req,res)=>{
    let sql ="UPDATE log SET password='"+req.body.password+"' WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.status(200).json({ success: true });
    });


});


  
//route for delete user account
app.get('/accdelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM signup WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.send('user delete');
        });
});




//route for list req hotspot
app.get('/lock',(req,res) =>{
    let sql ="SELECT lat FROM loc";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

//route for list req hotspot
app.get('/lockup',(req,res) =>{
    let sql ="SELECT lon FROM loc";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json(results);
    });
});

// ------------------------email send--------------------

app.get("/api/sendforgotmail/:email",(req, res) => {
    try {
      const email = req.params.email;
      console.log(req.params);
    //   const result = passwordChangingMail(email);
    let sql = "select*from log where email='"+req.params.email+"'";
    
    let query = conn.query(sql,(err, results) => {
        console.log(results)
         if (results.length != 0) {
        res.status(200).json(true);
       
        
          var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "surbhigulhana3@gmail.com",
                pass: "wxcmkmpfmtdquyrn",// generated ethereal password
            },
          });
        
          // send mail with defined transport object
          var info =  transporter.sendMail({
            from: "surbhigulhana3@gmail.com", // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world? we are here", // plain text body
            html: "<b>Hello create your new password</b> <a href=http://localhost:3000/setpassword/${email}", // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
        
  
        
     
          
        
        }else{
            res.status(200).json({ success: false });
        }
    
     });
     
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

      
        
     }     catch (err) {
         console.log(err);
          res.status(500).json(false);
     }
      });

      
// change password for forgot password

app.post('/newpass',(req, res)=>{

    let sql = "select *from log where email='"+req.body.email+"'";
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        console.log(results)
        if(results.length == 0){
            res.status(500).json({ success: false});
        }else{
              let sql="UPDATE log SET password='"+req.body.password+"' where email='"+req.body.email+"'";
            let query=conn.query(sql,(err,result)=>{
                if(err) throw err;
                res.status(200).json({ success: true });


            });
        }
        });
});



app.listen(3306,()=>{
    console.log(`express server running on 3306`);
});
