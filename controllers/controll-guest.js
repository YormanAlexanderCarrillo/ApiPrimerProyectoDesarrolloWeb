const guest = require('../models/guest')

module.exports= {

    obtainAll: async (req, res)=>{
        try{
            const data = await guest.find()
            return res.status(200).json({
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
    addGuest: async (req, res)=>{
        try{
            const Guest = new guest(req.body)
            const dataGuest = await Guest.save()
            res.status(200).json({
                "status": true,
                "data": dataGuest
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    findByID: async(req, res)=>{
        try{
            const {idGuest} = req.params
            const dataGuest = await guest.findOne({id: idGuest})
            res.status(200).json({
                "status": true,
                "data": dataGuest
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error" : error
            })
        }
    },
    erase: async (req, res)=>{
        try{
            const {idGuest} = req.params
            const dataGuestDelete = await guest.deleteOne({id: idGuest})
            res.status(200).json({
                "status": true,
                "data": dataGuestDelete
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "data": error
            })
        }
    },
    update: async (req, res)=>{
        try{
            const {idGuest} = req.params
            const dataToUpdate = req.body
            const dataUpdate = await guest.findByIdAndUpdate(idGuest, dataToUpdate)
            res.status(200).json({
                "status": true,
                "data" :dataUpdate
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }   
    }
}