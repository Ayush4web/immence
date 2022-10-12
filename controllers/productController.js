const express = require('express')
const app = express()

const Product =  require('../modals/productModal')

const getAllProducts = async (req, res) => {
     
     try {
          const p = await Product.find({})
          res.json(p)
     } catch (error) {
          console.log(error)
     }
}

const getSingleProduct = async (req, res) => {
     res.send("single product")
}


module.exports = { getAllProducts, getSingleProduct }