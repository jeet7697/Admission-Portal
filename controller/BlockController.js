const BlockModel = require('../Models/block')

class BlockController{
    static Home =(req,res)=>
    {
       
       

        res.render("home",{message:req.flash('error'),name:""});
    }
    
    
    static login =(req,res)=>
    {
        const { username, email, _id } = req.user;
        res.render("home",{message:req.flash('error'),name:""});
    }

    static about =(req,res)=>
    {
        const { username, email, _id } = req.user;
        res.render("about",{name:username});
    }

    static gallery =(req,res)=>
    {
        const { username, email, _id } = req.user;
        res.render("gallery",{name:username});
    }

    static contact =(req,res)=>
    {
        const { username, email, _id } = req.user;
        res.render("contact",{name:username});
    }
   


}

    module.exports = BlockController;