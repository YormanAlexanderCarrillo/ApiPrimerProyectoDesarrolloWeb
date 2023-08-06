const express = require('express')
const router = express.Router()

const {obtainAll, addUbication, findByID, erase, update} = require ('../controllers/controll-ubication')

router.get('/', obtainAll)
router.post('/', addUbication)
router.get('/:idUbication', findByID)
router.delete('/:idUbication', erase)
router.put('/:idUbication', update)

module.exports = router