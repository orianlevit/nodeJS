var connect = require('connect')
var http = require('http')

var app = connect()

function profile(request, response){
    console.log('User requested profile')
}

// function doFirst(request, response, next){
//     console.log('Texas')
//     next()
// }
// function doSecond(request, response, next){
//     console.log('Delaware')
//     next()
// }
// app.use(doFirst)
// app.use(doSecond)


app.use('/profile', profile)

http.createServer(app).listen(8888)
console.log('Server is running...')