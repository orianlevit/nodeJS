

var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response){
    response.writeHead(404, {'Contenct-Type': 'text/plain'});
    response.write('Error 404: Page not found!');
    response.end()
}

//Handle user request
function onRequest(request, response){

    if( request.method == 'GET' && request.url == '/' ){
        response.writeHead(200, {'Contenct-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(response);
    }else{
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log('Server is running...');