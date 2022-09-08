const express = require("express");
const AdminController = require("../controller/AdminController");
const BlockController = require("../controller/BlockController");
const Coursecontroller = require("../controller/CourseController");
;
const UserController = require("../controller/user/UserController");

const {CheckUserAuth, AuthRole} = require('../middleware/auth');
const AddController = require("../controller/admin/AddController");





const router =express.Router()

//UserController


router.get("/register",UserController.register);
router.get("/login",UserController.login)
router.post("/registerinsert", UserController.registerinsert);
router.post("/verifylogin", UserController.Verifylogin);

router.get("/logout",UserController.logout);









//BLOCK CONTROLLER
router.get("/",BlockController.Home)
router.get("/about",CheckUserAuth,BlockController.about)
router.get("/gallery",CheckUserAuth,BlockController.gallery)
router.get("/contact",CheckUserAuth,BlockController.contact)

router.get("/user/login",BlockController.login)



//btech method
router.get('/top/btech',CheckUserAuth,Coursecontroller.btech)
router.post('/btechinsert',CheckUserAuth,Coursecontroller.btechinsert)
router.get('/displaybtech',CheckUserAuth,Coursecontroller.displaybtech)

router.get('/course/view/:id',CheckUserAuth,Coursecontroller.btechview)
router.get('/course/edit/:id',CheckUserAuth,Coursecontroller.btechedit)
router.post('/course/btechupdate/:id',CheckUserAuth,Coursecontroller.btechupdate)

//mtech method
router.get('/course/mtech',CheckUserAuth,Coursecontroller.mtech)
router.post('/mtechinsert',CheckUserAuth,Coursecontroller.mtechinsert)

//mba
router.get('/course/mba',CheckUserAuth,Coursecontroller.mba)

router.post('/mbainsert',CheckUserAuth,Coursecontroller.mbainsert)

//admin
router.get('/dashboard',CheckUserAuth,AdminController.Dashboard)

router.get('/admin/dashboard',CheckUserAuth, AuthRole('admin'),AddController.dashboard)











module.exports = router;