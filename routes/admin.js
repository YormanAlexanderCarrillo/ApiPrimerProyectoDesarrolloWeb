const express = require('express')
const router = express.Router()

const { addAdmin, findById, obtainAll} = require ('../controllers/controll-admin')

router.get('/', obtainAll)
router.post('/', addAdmin)
router.get('/:idAdmin', findById)

module.exports = router
