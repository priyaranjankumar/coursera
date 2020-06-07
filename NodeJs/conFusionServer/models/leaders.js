const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const leaderSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required:true
    },
    designation:{
        type:String,
        required:true,
        
    },
    abbr:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,

    }

});
var Leader = mongoose.model('leader',leaderSchema);
module.exports= Leader;