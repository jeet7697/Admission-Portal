
const courseModel = require('../Models/course')

class AdminController{
    static Dashboard = async(req,res)=>{
       try{
        const { username, email, _id } = req.user;
        //console.log(req.user)
      
       
        const btech = await courseModel.findOne({user:_id,course:'BTECH'})
        const mtech = await courseModel.findOne({user:_id,course:'MTECH'})
        const mba = await courseModel.findOne({user:_id,course:'MBA'})
        res.render('dashboard',{name:username,email:email, b:btech, m:mtech,ma:mba});

         
       }catch(err){

        console.log(err)
       }
        
    }

}
module.exports = AdminController;


