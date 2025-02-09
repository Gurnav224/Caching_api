
const mongoose = require('mongoose');

 const cachingItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    }
 })

 const cacheItem = mongoose.model('CacheItem', cachingItemSchema);


 module.exports = cacheItem;