//import cloudinary modules
const cloudinary = require("cloudinary").v2;
const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

//configure cloudinary
cloudinary.config({
    cloud_name: 'dvjw7expw',
    api_key: '941327781763824',
    api_secret: 'vZ3V8deYC8SfXh9f9mrlJ_YeigI'
})


//configure multjer-storage-cloudinary
const clStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: "vnr2021",
            public_id: file.fieldname + '-' + Date.now()
        }
    }
})


//configure multer
const multerObj = multer({ storage: clStorage })

module.exports=multerObj;