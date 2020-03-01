
require('http').createServer(
    (req,res)=>{
        console.log("hello your request has been fully recieved");
        res.end(`omg we are serving on ${process.env.PORT}`)
    }
).listen(8080)
console.log("although this would output first as sync, server is starting")