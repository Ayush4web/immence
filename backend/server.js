const express = require('express')
const app = express();

const productRoute = require('./routes/productRoutes')
const connectDB = require('./db/connect')

app.use('/', (req,res) => {
  res.json({
    "msg": 'Welcome to the Assignment part',
    "endpoint":"Use /api/products to see all products"
   })
})
app.use('/api',productRoute)

const port = 5000
MONGO_URI = 'mongodb+srv://Ayush:OiYxB6qVs5nfaJRu@cluster0.8jw7piq.mongodb.net/'

const start = async () => {
  try {
    await connectDB(MONGO_URI).then(console.log('Connected to db'))
    app.listen(port, () =>
      console.log(`Server is Listening on Port:${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()


// Populating data to db

// const data = {
//   "name": 'SAMSUNG Galaxy S20 FE 5G 64GB',
//  "primaryImg": "https://res.cloudinary.com/dzk05iz3l/image/upload/v1665562003/Immence%20Assginment/product_iimage_1_m9nwtn.png",
  
//  "descImg": ["https://res.cloudinary.com/dzk05iz3l/image/upload/v1665562117/Immence%20Assginment/1_2_jb4gzw.png", "https://res.cloudinary.com/dzk05iz3l/image/upload/v1665562118/Immence%20Assginment/2_2_njwswn.png", "https://res.cloudinary.com/dzk05iz3l/image/upload/v1665562118/Immence%20Assginment/3_2_x8vzr9.png", "https://res.cloudinary.com/dzk05iz3l/image/upload/v1665562118/Immence%20Assginment/4_2_oig9h8.png", "https://res.cloudinary.com/dzk05iz3l/image/upload/v1665562118/Immence%20Assginment/5_2_njiuag.png", "https://res.cloudinary.com/dzk05iz3l/image/upload/v1665562118/Immence%20Assginment/6_2_oxobrj.png"],
  
//   "styles": [""],

//  "stars": 3.5,
//   "ratings":7114,

//  "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, labore illo in consectetur magni placeat enim saepe ducimus at temporibus accusantium doloremque unde ea consequuntur dolore laborum quod sit nisi.",
   
//   "color": "Orange",

// }
// const Product = require('./modals/productModal')
// const populate = async() => {
   
//     const p = await Product.create(data)
// }

// populate()