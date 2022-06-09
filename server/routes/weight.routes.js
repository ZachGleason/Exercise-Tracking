const WeightController = require('../controller/weight.controller');

module.exports = (app) => {
    app.get('/api/weights', WeightController.showWeights)
    app.get('/api/weight/:id', WeightController.getOneWeight)
    app.put('/api/weight/:id', WeightController.updateWeight)
    app.post('/api/weight', WeightController.createWeight)
    app.delete('/api/weight/:id', WeightController.deleteWeight)
}