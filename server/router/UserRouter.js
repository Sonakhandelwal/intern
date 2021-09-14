const express = require('express')
const path = require('path')
const router  = express.Router()

const userModel = require("../modal/UserModel")

router.post("/register",(request,response)=>
{
    userModel.saveUser(request.body,(status)=>
    {
        response.send({status:status})
    })
})

router.post("/login",(request,response)=>
{
    userModel.loginUser(request.body,(record)=>
    {
        if(record)
        {
            request.session.user = {
                type:'user',
                name: record.name,
                
                email:record.email
            }
        
        response.send({status:true})
        }
        else
        response.send({status:false})
    })
})

module.exports = router