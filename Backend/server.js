import app from './app.js'
import cloudinary from 'cloudinary'
cloudinary.v2.config({
    process.env
})
app.listen(process.env.PORT,()=>{
    console.log(`sever running on port ${process.env.PORT}`);
})