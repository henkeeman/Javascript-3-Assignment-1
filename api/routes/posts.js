const express = require('express');
const Post = require('../models/Post');
const auth = require('../authentication/auth')
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY

router.post('/',auth.verifyToken,(req,res) => {
    const post = new Post({
        title: req.body.title,
        information: req.body.information,
        date: req.body.date,
        userid: req.body.userid

    });
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err })
    })
})

router.get('/', async (req,res) => {
    let decoded = ''
    try {
      const token = req.headers.authorization.split(" ")[1];
      decoded = jwt.verify(token,secretKey)
      console.log(decoded.id);
  } catch {
      console.log("fail")
  }
    Post.find({"userid": `${decoded.id}`}, (err, data) => {

        if(err) {
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Something went wrong when fetching the products',
            err
          })
        }
        
        res.status(200).json(data)
      })
})
router.delete('/:id',auth.verifyToken, async (req,res) => {

    Post.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if(err) {
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Something went wrong when deleting the todo',
            err
          })
        }
    
        if(!data) {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Not found'
          })
        }
        res.status(200).json({id : data._id})
    })
})

router.get('/:id', async (req,res) => {

    Post.findById({ _id: req.params.id }, (err, data) => {

        if(err) {
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Something went wrong when fetching the product',
            err
          })
        }
    
        res.status(200).json(data)
      })
})

router.patch('/:id',auth.verifyToken, async (req,res) => {

    Post.findOneAndUpdate({ _id: req.params.id },{
      title: req.body.title,
      information: req.body.information,
      date: req.body.date
    },
        (err, data) => {
        if(err) {
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Something went wrong when updating the todo',
            err
          })
        } 
    
        if(!data) {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Not found'
          })
        }
        
        res.status(200).json(data)
    
      })
})

module.exports = router;