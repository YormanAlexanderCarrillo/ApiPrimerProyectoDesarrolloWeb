const express = require('express')
const router = express.Router()

const {obtainAll, addUbication, findByID, erase, update} = require ('../controllers/controll-ubication')

router.get('/', obtainAll)
router.post('/', addUbication)
router.get('/:idGuest', findByID)
router.delete('/:idGuest', erase)
router.put('/:idGuest', update)

module.exports = router