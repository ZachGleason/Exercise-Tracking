const Weight = require('../models/weight.model');    

const createWeight = (request, response) => {
    const { body } = request;
    Weight.create(body) 
    .then((Weight) => response.json(Weight))
    .catch((err) => response.json(err));
}

const showWeights = (req, res) => {
    Weight.find()
        .then((allWeights) => res.json(allWeights))
        .catch((err) => console.log(err))
}

const deleteWeight = ( req, res) => {
    Weight.deleteOne({ _id: req.params.id})
    .then((deletedWeight) => {
        res.json(deleteWeight)
    })
    .catch(err => res.json(err));
}

const getOneWeight = (req, res) => {
    Weight.findOne({ _id:req.params.id })
    .then((oneWeight) => res.json(oneWeight))
    .catch((err) => console.log(err))
}

const updateWeight = (req, res) => {
    Weight.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedWeight => resp.json(updatedWeight))
        .catch(err => res.json(err))
}


module.exports = {  
    createWeight,
    showWeights,
    deleteWeight,
    getOneWeight,
    updateWeight,
}