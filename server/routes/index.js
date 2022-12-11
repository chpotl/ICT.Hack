const express = require('express');
const projectRoutes = require('../routes/projectRoutes');
const userRoutes = require('../routes/userRoutes');
const countryRoutes = require('../routes/countryRoutes');
const roleRoutes = require('../routes/roleRoutes');
const categoryRoutes = require('../routes/categoryRoutes');
const tagRoutes = require('../routes/tagRoutes');
const trendRoutes = require('../routes/trendRoutes');

const router = express.Router();

router.use('/project', projectRoutes);
router.use('/user', userRoutes);
router.use('/country', countryRoutes);
router.use('/role', roleRoutes);
router.use('/category', categoryRoutes);
router.use('/tag', tagRoutes);
router.use('/trend', trendRoutes);

module.exports = router;
