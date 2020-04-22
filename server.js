var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/profile") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Profile.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/contact") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Contact.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/aboutus") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>About Us.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/data") {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            "users": [
              {
                "userId": 1,
                "firstName": "Krish",
                "lastName": "Lee",
                "phoneNumber": "123456",
                "emailAddress": "krish.lee@learningcontainer.com"
              },
              {
                "userId": 2,
                "firstName": "racks",
                "lastName": "jacson",
                "phoneNumber": "123456",
                "emailAddress": "racks.jacson@learningcontainer.com"
              },
              {
                "userId": 3,
                "firstName": "denial",
                "lastName": "roast",
                "phoneNumber": "33333333",
                "emailAddress": "denial.roast@learningcontainer.com"
              },
              {
                "userId": 4,
                "firstName": "devid",
                "lastName": "neo",
                "phoneNumber": "222222222",
                "emailAddress": "devid.neo@learningcontainer.com"
              },
              {
                "userId": 5,
                "firstName": "jone",
                "lastName": "mac",
                "phoneNumber": "111111111",
                "emailAddress": "jone.mac@learningcontainer.com"
              }
            ]
           }
           ));  
        res.end(); 
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(3000); //6 - listen for any incoming requests

console.log('Node.js web server at port 3000 is running..')