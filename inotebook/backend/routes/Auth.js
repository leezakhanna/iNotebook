const express=require('express')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User=require('../models/User')
const { body, validationResult } = require('express-validator');
const router=express.Router();
JWT_SECRET='leezaisag$oodgi$%l'
// Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Check whether the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    const salt =  await bcrypt.genSalt(10);
const secPass = await bcrypt.hashSync(req.body.password, salt);
     // Create a new user
     user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    });
    const data={
user:{
  id:user.id
}
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
 
    res.json({authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
})
module.exports=router