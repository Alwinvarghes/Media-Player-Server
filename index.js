//import json-server libary

const jsonServer = require('json-server')

//create server using create function 
const mediaPlayerserver = jsonServer.create()

//create path for db.json file
const router = jsonServer.router('db.json')

//create middleware to convert json into js
const middleware = jsonServer.defaults()

//connect
mediaPlayerserver.use(middleware)
mediaPlayerserver.use(router)

//setup port for the server
const port = 4000 ||  process.env.PORT

//run the server
mediaPlayerserver.listen(port,()=>{
    console.log('media run success');
})



