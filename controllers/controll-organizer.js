const organizer = require('../models/organizer')

module.exports= {

    obtainAll: async (req, res)=>{
        try{
            const data = await organizer.find()
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
        
    }
    ,
    addOrganizer: async (req, res)=>{
        try{
            const Organizer = new organizer(req.body)
            const data = await Organizer.save()
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
    findByID: async(req, res)=>{
        try{
            const {idOrganizer} = req.params
            const dataOrganizer = await organizer.findOne({id: idOrganizer})
            res.status(200).json({
                "status": true,
                "data": dataOrganizer
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error" : error
            })
        }
    },
    erase : async (req, res)=>{
        try{
            const {idOrganizer} = req.params
            const dataOrganizerDelete = await organizer.deleteOne({id: idOrganizer})
            res.status(200).json({
                "status": true,
                "data": dataOrganizerDelete
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
            const {idOrganizer} = req.params
            const dataToUpdate = req.body
            const dataUpdate = await organizer.findByIdAndUpdate(idOrganizer, dataToUpdate)
            res.status(200).json({
                "status": true,
                "data": dataUpdate
            })
        }catch(error){
            res.status(500).json({
                "status": false,
                "error": error
            })
        }   
    }

}