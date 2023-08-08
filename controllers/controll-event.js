const event = require('../models/event')

module.exports= {
    obtainAll: async (req, res)=>{
        try{
            const data = await event.find()
                        .populate('guest')
                        .populate('organizer')
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
    addEvent: async (req, res)=>{
        try{
            const Event = new event(req.body)
            const data = await Event.save()
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
            const {idEvent} = req.params
            const dataEvent = await event.findOne({id: idEvent})
                .populate('guest')
                .populate('organizer')
            res.status(200).json({
                "status": true,
                "data": dataEvent
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
            const {idEvent} = req.params
            const dataEventDelete = await event.deleteOne({id: idEvent})
            res.status(200).json({
                "status": true,
                "data": dataEventDelete
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
            const {idEvent} = req.params
            const dataToUpdate = req.body
            const dataUpdate = await event.findByIdAndUpdate(idEvent, dataToUpdate)
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