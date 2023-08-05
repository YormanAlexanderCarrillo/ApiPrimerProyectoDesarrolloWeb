const express = require('express')
const router = express.Router()

const {obtainAll, addGuest, findByID, erase, update} = require ('../controllers/controll-guest')

router.get('/', obtainAll)
router.post('/', addGuest)
router.get('/:idGuest', findByID)
router.delete('/:idGuest', erase)
router.put('/:idGuest', update)

module.exports = router