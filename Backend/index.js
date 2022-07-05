const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
const nodemailer = require("nodemailer");
const path = require('path');


const port = process.env.PORT || 8080;
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./dist/frontend'));

app.post('/api/sendmail',(req,res)=>{

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: POST,PATCH, GET, DELETE, PUT, OPTIONS");
    let email = req.body.email;
    let name = req.body.name;
    let name1 = req.body.name1;
     var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'sruthigopinath42@gmail.com',
            pass:'lqdvrkpnhybtcfiy'
        }
    });

    var mailOptions = {
        from: 'sruthigopinath42@gmail.com',
        to: email,
        subject:'Happy 2022',
        text:`Hi...${name}, ${name1} send you 2022 wishes`,
        html: `Hi...${name}, ${name1} send you 2022 wishes,
        <p>Click here to know more <a href="https://wishing-app-for-everyone.herokuapp.com/greeting">here</a><p/>`
    };
 
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log(info.response)
        }
    })

})

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist//frontend/index.html'));
});

app.listen(port,()=>{
    console.log('server is ready');
});