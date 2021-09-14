const mongo = require('./DBConnection')
const {ObjectId} = require("mongodb")

var Product = function()
{
    this.saveProduct = (data,callback)=>
    {        
        data.pic = "noimg.png"
        mongo(db=>{
            if(db){
                db.collection('product').insertOne(data,(err)=>
                {
                    if(err)
                        callback(false);
                    else
                        callback(true);                        
                });                
            }else{
                callback(false)
            }
        })
    }

    this.uploadImage = (pid,filename,callback)=>
    {
        mongo(db=>{
            if(db){

                var where = { _id : ObjectId(pid) }
                var newvalue = { $set : {pic : filename} }
                db.collection('product').updateOne(where,newvalue,(err)=>
                {
                    if(err){
                        console.log(err)
                        callback(false)
                    }else{
                        callback(true)
                    }
                });

            }else{
                callback(false)
            }
        });
    }

    this.listProduct = (callback)=>
    {        
        mongo(db=>{
            if(db){
                db.collection('product').find().toArray((err,result)=>
                {
                    if(err)
                    {
                        console.log(err)
                        callback([])
                    }else
                        callback(result)
                });                
            }else{
                callback([])
            }
        })
    }

    this.searchProduct = (cid,callback)=>
    {        
        mongo(db=>{
            if(db){
                db.collection('product').find({cate:cid}).toArray((err,result)=>
                {
                    if(err)
                    {
                        console.log(err)
                        callback([])
                    }else
                        callback(result)
                });                
            }else{
                callback([])
            }
        })
    }
}

module.exports = new Product()