const admin = require('../models/admin')

module.exports= {
    obtainAll: async (req, res)=>{
        try{
            const dataUsers = await admin.find()
            res.status(200).json({
                "status": true,
                "data": dataUsers
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
   

    },
    addAdmin: async (req, res)=>{
        try{
            const Admin = new admin(req.body)
            const data = await Admin.save()
            res.status(200).json({
                "status": true,
                "data": data
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    findById: async(req, res)=>{
        try{
            const {idAdmin} = req.params
            const dataAdmin = await admin.findById(idAdmin)
            res.status(200).json({
                "status": true,
                "data": dataAdmin
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error" : error
            })
        }
    }
}