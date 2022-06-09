const Water = require('../models/water.model');    

const createWater = (request, response) => {
    const { body } = request;
    Water.create(body) 
    .then((Water) => response.json(Water))
    .catch((err) => response.json(err));
}

const showWaters = (req, res) => {
    Water.find()
        .then((allWaters) => res.json(allWaters))
        .catch((err) => console.log(err))
}

const deleteWater = ( req, res) => {
    Water.deleteOne({ _id: req.params.id})
    .then((deletedWater) => {
        res.json(deleteWater)
    })
    .catch(err => res.json(err));
}

const getOneWater = (req, res) => {
    Water.findOne({ _id:req.params.id })
    .then((oneWater) => res.json(oneWater))
    .catch((err) => console.log(err))
}

const updateWater = (req, res) => {
    Water.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedWater => resp.json(updatedWater))
        .catch(err => res.json(err))
}


module.exports = {  
    createWater,
    showWaters,
    deleteWater,
    getOneWater,
    updateWater,
}