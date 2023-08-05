const express = require('express')
const router = express.Router()

const {obtainAll, addEvent, findById, erase, update} = require ('../controllers/controll-event')

router.get('/', obtainAll)
router.post('/', addEvent)
router.get('/:idEvent', findById)
router.put('/:idEvent', update)
router.delete('/:idEvent', erase)

module.exports = router