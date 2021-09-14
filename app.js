const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const fileUpload = require('express-fileupload')

const server = express()

const adminRouter = require('./server/router/AdminRouter')
const userRouter = require('./server/router/UserRouter')


server.use(express.static(path.join(__dirname,"dist")))
server.use(express.json())
server.use(fileUpload())
server.use(cookieParser())
server.use(expressSession({secret:"Sona"}))

server.use("/admin",adminRouter)
server.use("/user",userRouter)

server.get("/checksession",(request,response)=>
{
    if(request.session.user==undefined)
    response.send({status:false})
    else
    response.send({status:true,info:request.session.user})
})

server.get("/logout",(request,response)=>
{
    request.session.destroy()
    response.send({status:true})
})

server.listen(8000,()=>
{
    console.log("Server : http://localhost:8000")
})
