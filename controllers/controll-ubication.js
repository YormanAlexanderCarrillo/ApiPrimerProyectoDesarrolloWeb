const ubication = require('../models/ubication')

module.exports= {

    obtainAll: async (req, res)=>{
        try{
            const data = await ubication.find()
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
    addUbication: async (req, res)=>{
        try{
            const Ubication = new ubication(req.body)
            const dataUbication = await Ubication.save()
            res.status(200).json({
                "status": true,
                "data": dataUbication
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
            const {idUbication} = req.params
            const dataUbication= await ubication.findByID(idUbication)
            res.status(200).json({
                "status": true,
                "data": dataUbication
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
            const {idUbication} = req.params
            const dataUbicationDelete = await ubication.findByIdAndDelete(idUbication)
            res.status(200).json({
                "status": true,
                "data": dataUbicationDelete
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
            const {idUbication} = req.params
            const dataToUpdate = req.body
            const dataUpdate = await ubication.findByIdAndUpdate(idUbication, dataToUpdate)
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