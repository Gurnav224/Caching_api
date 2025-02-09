const cacheItem = require("../models/cacheItem.model");

const CACHE_MAX_SIZE = 10;

const createCache = async (req, res) => {
  const { name, description } = req.body;

  if (!name || description === undefined) {
    return res
      .status(400)
      .json({ error: 'Both "name" and "description" must be provided.' });
  }

  const counts = await cacheItem.countDocuments();

  if (counts >= CACHE_MAX_SIZE) {
    return res
      .status(400)
      .json({ error: "Cache is full, cannot add more items" });
  }

  try {
    const existingItem = await cacheItem.findOne({ name });

    if (existingItem) {
      console.log("existing Item", existingItem);
      existingItem.description = description;
      await existingItem.save();

      return res
        .status(200)
        .json({ message: "existing cache updated successfully" });
    } else {
      const cache = new cacheItem({ name, description });
      await cache.save();
      return res
        .status(200)
        .json({ message: "new cache item stored successfully" });
    }
  } catch (error) {
    console.log("Error in POST /cache", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


const getCacheByName = async (req, res) => {
     const {key} = req.params;
    try {
        const cache = await cacheItem.findOne({name:key});
        if(!cache) {
          return  res.status(400).json({ error: `Key "${key}" not found.`})
        }
        res.status(200).json({message:'cache by name', cache});
    } catch (error) {
        console.log("Error in GET /cache/:key", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const deleteCacheByName = async (req, res) => {
    const { key } = req.params;
    try {
        const deleteCache = await cacheItem.deleteOne({name:key});
        if(deleteCache.deletedCount === 1){
            return res.status(200).json({ message: `Key "${key}" deleted successfully.` });
        }
        return res.status(404).json({ error: `Key "${key}" not found.` });  
    } catch (error) {
        console.error('Error in DELETE /cache/:key:', err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = { createCache  , getCacheByName , deleteCacheByName};
