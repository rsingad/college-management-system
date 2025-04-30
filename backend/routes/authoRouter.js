const express=require("express");
const router=express.Router();
const {getAllauth, postAuthUser,loginAuthUser}=require('../controllers/authController')
router.get("/",getAllauth);
router.post("/",postAuthUser);
router.post('/login', loginAuthUser);

// Route for sending OTP
// router.post('/sendOtp',sendOtp);
// Route for verifying OTP
// router.post('/verifyOtp', verifyOtp);
module.exports=router;
