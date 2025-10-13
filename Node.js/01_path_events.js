
const { ifError } = require('assert');
const EventEmitter = require('events');
const fs = require('fs');
const userEmit = new EventEmitter();

const eventObj = {
    userLoggedIn: 0,
    userLogOut: 0,
    userPurchased: 0,
    userUpdated: 0
}

const log = "events.json"

if(fs.existsSync(log)){
    const data = fs.readFileSync(log,"utf-8");
    Object.assign(eventObj,JSON.parse(data));
}

function fileSaver(){
    fs.writeFileSync(log,JSON.stringify(eventObj,null,2));

}




userEmit.on("userLoggedIn", (userName)=>{
console.log(`User logged in: ${userName}`);
eventObj.userLoggedIn += 1;
fileSaver();

});



userEmit.on("userLogOut", (userName)=>{
console.log(`User logged out: ${userName}`);
eventObj.userLogOut += 1;
fileSaver();
});



userEmit.on("userPurchased", (username,item)=>{
    console.log("userPurchased", item);
    eventObj.userPurchased += 1;
    fileSaver();
})

userEmit.on("userUpdated",(userName, update)=>{
    console.log("userUpdated" , update);
    eventObj.userUpdated += 1;
    fileSaver();
})

userEmit.emit("userLoggedIn", "Ram Sagar");


userEmit.emit("userLogOut", "Ram Sagar");


userEmit.emit("userPurchased", "Ram Sagar" ,{item: "Laptop", price: 30000});

userEmit.emit("userUpdated", "Ram Sagar", "Profile Picture");


userEmit.on('stats',()=>{
    console.log(`userLoggedIn ${eventObj.userLoggedIn}`);
    console.log(`userlogout : ${eventObj.userLogOut} `);
    console.log(`userPurchased : ${eventObj.userPurchased}`);
    console.log(`user Updated : ${eventObj.userUpdated}`);
})


userEmit.emit("stats");




