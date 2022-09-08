const courseModel = require('../../Models/course')

class AddController{
    static dashboard = async(req,res) =>{
        try{
            const{_id} = req.user
            const result = await courseModel.find()
           // console.log(result)
           const { username, email} = req.user;
            res.render('top/display',{data:result,name:username});

        }catch(err){
            console.log(err)
        }
    }

}

module.exports = AddController;