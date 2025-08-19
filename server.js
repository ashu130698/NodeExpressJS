
let http =require('http');

let server = http.createServer ((req,res)=>{
if (req.url == "/users") {
    let email= req.headers.email;
    res.write(`You are getting a response in user ${email}`);
    res.end();
} else if (req.url == "/products") {
    res.write('You are getting a response in products');
    res.end();
} else {
    res.statusCode=404;
    res.write('Invalid user');
    res.end();
}
});

let port = 8080;

server.listen(port,()=>{
    console.log(`server is listening at ${port}`)
});

