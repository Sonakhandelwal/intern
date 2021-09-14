const mongo = require('./DBConnection')

var User = function()
{
    this.loginUser = (data,callback)=>
    {
        mongo(db=>
            {
            if(db)
            {
                db.collection('user').findOne(data,(err,record)=>
                {
                    if(err)
                    callback(false)
                    else
                    callback(record)
                });
            }
            else
            {
              callback(false)

            }
        });

    }

    this.saveUser = (data,callback)=>
    {        
        mongo(db=>{
            if(db){
                db.collection('user').insertOne(data,(err)=>
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
}

module.exports = new User()