const Post = require("../model/postModel");

const { validatePost } = require("../validation/postValidation");

const createPost = async (req, res) => {
    try{
        const { error } = await validatePost(req.body);
        if (error)
        return res.status(400).send({ message: error.details[0].message });

        let newPost = req.body; // { title , content }
        newPost.authorId = req.user._id; // { title , content , authorId }
        newPost = new Post(newPost);
        await newPost.save();
        // console.log( req.user._id )
        res.status(201).send( { message : "Post Created Succesfully " , newPost  })
    }
    catch(err){
        res.send(err);
    }
};

const updatePost = async (req, res) => {
    try{
        // Update the most only if the same loggedIn user 
    }
    catch(err){
        res.send(err);
    }
};

module.exports.createPost = createPost;
module.exports.updatePost = updatePost;
