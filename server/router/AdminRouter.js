
//get router
//router.get("/login",(request,response)=>
//{
// var email = request.query.email;
// var pwd = request.query.password;
//if(email=="admin@techmall.com" && pwd =="12345")
//response.send({status:true})
// else
// response.send({status:false})
 //})

//post router

const { response } = require('express')
const express = require('express')
const { request } = require('http')
const path = require('path')
const router  = express.Router()

const categoryModal = require('../modal/CategoryModel')
const productModal = require('../modal/ProductModel')

router.post("/login",(request,response)=>
{
    var email = request.body.email;
    var pwd = request.body.password;
    if(email=="admin@techmall.com" && pwd=="123")
    {
        request.session.user = {
            type:'admin',
            email:email
        }
        response.send({status:true})
    }
    else
        response.send({status:false})        
})

router.all("/category",(request,response)=>
{
    if(request.method=="GET")    // list Category
    {
        categoryModal.listCategory((result)=>
        {
            response.send(result)
        })
    }else // Category Save
    {
        console.log(request.body)
        categoryModal.saveCategory(request.body,(result)=>
        {
            response.send({status:result})
        })
    }
});

router.post("/searchproduct",(request,response)=>
{
    productModal.searchProduct(request.body.cid,(result)=>
        {
            response.send(result)
        }) 
})

router.all("/product",(request,response)=>
{
    if(request.method=="GET")    // list Category
    {
        productModal.listProduct((result)=>
        {
            response.send(result)
        })
    }else 
    {
        //console.log(request.body)
        productModal.saveProduct(request.body,(result)=>
        {
            response.send({status:result})
        })
    }
});

router.post("/uploadpic",(request,response)=>
{   
    var uploadFile = request.files.product_image
    var filename = Date.now() + path.extname(uploadFile.name);

    uploadFile.mv(path.join(__dirname,"../../dist/assets/product",filename))
    uploadFile.mv(path.join(__dirname,"../../src/assets/product",filename))

    productModal.uploadImage(request.body.pid,filename,(result)=>
    {
        response.send({status:result,filename:filename})
    })
})



module.exports = router 