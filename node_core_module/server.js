const http = require("http");


const app = http.createServer((request , response) => {
    // console.log(request.method);

    if(request.url === "/home" ){
        response.end('Hi Home!! ')
    }

    else if(request.url === "/about" ){
        response.writeHead(205, {
            'Content-Length': Buffer.byteLength("fdsf"),
            'Content-Type': 'text/'
          }).end('Hi About!! ')
    }

    else if( request.url === "/form"  && request.method == "POST"){
        response.writeHead(201).end('Form Submitted')
    }

    else{
        response.writeHead(404).end('Bad Request')
    }
    
});


app.listen( 3001 , "127.0.0.1", function() {
    console.log('Listening on port 3001');
} );
