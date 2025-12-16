import mongoose from 'mongoose';

const botschema=new mongoose.Schema({
    
    text:{
        type:String,
        reuired:true
    },
    timestamp:{
        type:Date,
        default:Date.now

    }
})
const Bot=mongoose.model("Bot",botschema);
export default Bot;