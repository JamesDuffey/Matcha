const express = require('express');
const router = express.Router();
const User= require('../models/User');

//Get Back all the post
router.get('/', async (req,res) => {
    try{
        const user = await User.find();
        res.json(user);
    }catch(err){
        res.json({message:err});
    }
});
//Submit post
router.post('/',async (req,res) => {
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        sp: req.body.sp,
        bio: req.body.bio
    });
    try {
        const savedPost = await user.save();
        res.json(savedPost);
    }catch (err) {
        res.json({message: err});
    }
});
//Specific post
router.get('/:postId', async(req,res) => {
    try{
    const user = await User.findById(req.params.postId);
    res.json(user);
    }catch(err){
        res.json({message: err});

    }
});
//Delete Post
router.delete('/:postId',async(req,res) => {
    try{
        const removeUser = await User.remove({_id:req.params.postId});
        res.json(removeUser);
    }catch(err){
        res.json({message:err});
    }
});
//Update a post
router.patch('/:postId',async(req,res) => {
    try{
        const updatedUser = await User.updateOne(
            { _id: req.params.postId } ,
            { $set: {age: req.body.age } }
        );
        res.json(updatedUser);
    } catch (err){
        res.json({message: err});
    }
});

module.exports = router;