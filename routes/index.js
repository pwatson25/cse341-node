const routes = require('express').Router();
const router = express.Router();

router.use('/contacts', require('./contacts'))

// routes.get('/', (req, res) => {
//     res.send('Joshua Watson')
// });

module.exports = routes;