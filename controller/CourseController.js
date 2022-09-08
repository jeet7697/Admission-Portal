const courseModel = require('../Models/course')


class CourseController{

    static btech= async(req,res)=>{
    
        try{
            const result = await courseModel.find()
           // console.log(result)
           const { username, email, _id } = req.user;
            res.render('top/btech',{name:username})

        }catch(err){
            console.log(err)
        }
      
    }

    static btechinsert = async (req, res) => {
        console.log(req.body);
    
        try {
            const {username, email, mobile, address,gender, college, course,branch,  user_id} = req.body
            
            
    
            const result = new courseModel({
                username: username,
                email: email,
                mobile: mobile,
                address: address,
                gender:gender,
                 
                college: college,
                course: course,
                branch:branch,
                user:req.user.id
               
                 
               
            })
           
            await result.save()
            req.flash('error' , 'sign up successfully')
            res.redirect('/displaybtech')
        
    
        } catch (err) {
            console.log(err);
        }
    }
    static displaybtech =async(req,res)=>{
        try{
            const{_id} = req.user
            const result = await courseModel.find({user:_id})
            console.log(result)
            const { username, email,  } = req.user;
            res.render('top/displaybtech',{data:result,name:username});

        }catch(err){
            console.log(err)
        }
 }

 static btechview =async(req,res)=>{
    // res.render('top/view')
    // console.log(req.params.id)
    try{
        const result = await courseModel.findById(req.params.id)
        console.log(result)
        const { username, email,} = req.user;
        res.render('top/view',{data:result,name:username})

    }catch(err){
        console.log(err)
    }
}
static btechedit =async(req,res)=>{
    // res.render('top/view')
    // console.log(req.params.id)
    try{
        const result = await courseModel.findById(req.params.id)
        console.log(result)
        const { username, email,} = req.user;
        res.render('top/edit',{data:result,name:username})

    }catch(err){
        console.log(err)
    }
}
static btechupdate =async(req,res)=>{
   
    try{
        const result = await courseModel.findByIdAndUpdate(req.params.id,req.body);
        console.log(result)
        res.redirect('/displaybtech')

    }catch(err){
        console.log(err)
    }
}

    




    static mtech= async(req,res)=>{
    
        try{
            const result = await courseModel.find()
           // console.log(result)
           const { username, email, _id } = req.user;
            res.render('course/mtech',{name:username})

        }catch(err){
            console.log(err)
        }
      
    }

    static mtechinsert = async (req, res) => {
        console.log(req.body);
    
        try {
            const {username, email, mobile, address,gender, college, course,branch,  user_id} = req.body
            
            
    
            const result = new courseModel({
                username: username,
                email: email,
                mobile: mobile,
                address: address,
                gender:gender,
                 
                college: college,
                course: course,
                branch:branch,
                user:req.user.id
               
                 
               
            })
           
            await result.save()
            req.flash('error' , 'sign up successfully')
            
            res.redirect('/displaybtech',{name:username})
        
    
        } catch (err) {
            console.log(err);
        }
    }

   
static mba=async(req,res)=>{
       try{
        const result = await courseModel.find()
        const { username, email, _id } = req.user;
        res.render('course/mba',{name:username})
       }catch(err){
        console.log(err)
       }
    }

    static mbainsert = async (req, res) => {
        console.log(req.body);
    
        try {
            const {username, email, mobile, address,gender, college, course,branch,  user_id} = req.body
            
            
    
            const result = new courseModel({
                username: username,
                email: email,
                mobile: mobile,
                address: address,
                gender:gender,
                 
                college: college,
                course: course,
                branch:branch,
                user:req.user.id
               
                 
               
            })
           
            await result.save()
            req.flash('error' , 'sign up successfully')
            res.redirect('/displaybtech')
        
    
        } catch (err) {
            console.log(err);
        }
    }

    


}
module.exports = CourseController;