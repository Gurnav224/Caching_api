const { createCache , getCacheByName, deleteCacheByName} = require('../controllers/cacheItem.controller');

const router = require('express').Router();


router.post('/cache', createCache);
router.get('/cache/:key', getCacheByName)
router.delete('/cache/:key', deleteCacheByName)

module.exports = router;