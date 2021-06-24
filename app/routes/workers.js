let router = require("express").Router();
let workercontrollers = require('../controllers/workercontrollers');

router.get('/',(req, res) => {
    workercontrollers.readAll(req, res);
});
router.get('/:id', (req, res) => {
    workercontrollers.search(req, res);
});
router.put('/:id', (req, res) => {
    workercontrollers.modify(req, res);
});
router.post('/', (req, res) => {
    workercontrollers.create(req, res);
});
router.delete('/:id', (req, res) => {
    workercontrollers.delete(req,res);
});

module.exports = router