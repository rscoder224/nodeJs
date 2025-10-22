

const events = require('events');

const fs = require('fs');

// console.log(events);

const crypto = require('crypto');

const path = require('path');
const { log } = require('console');

const count = {
    logincount : 0,
    logoutcount : 0,

}

const logfile = 'count.json';


if(fs.existsSync(logfile)){
const data =  fs.readFileSync(logfile, "utf-8");
Object.assign(count,JSON.parse(data));
}


const fileSaver = ()=>{
    fs.writeFileSync(logfile,JSON.stringify(count,null,1));
}





const file = path.join('manager' , 'file' , "students");


const user = new events();



user.on("LOGIN",(username,password)=>{
 const hash = crypto.createHash('sha256').update(password).digest('hex');
    console.log(`${username} Log in successfully ${hash} `);
    count.logincount++;
    fileSaver();

});


user.on("LOGOUT",(username)=>{
    console.log(`${username} Log out successfully`);
count.logoutcount++;
fileSaver();

});




user.emit('LOGIN',"Kall","babu");


user.emit('LOGOUT',"Kall");













