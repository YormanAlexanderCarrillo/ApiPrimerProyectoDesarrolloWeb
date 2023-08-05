const express = require('express')
const router = express.Router()

const {obtainAll, addOrganizer, findByID, erase, update} = require ('../controllers/controll-organizer')
const { addGuest } = require('../controllers/controll-guest')

router.get('/', obtainAll)
router.post('/', addOrganizer)
router.get('/:idOrganizer', findByID)
router.delete('/:idOrganizer', erase)
router.put('/:idOrganizer', update)

module.exports = router