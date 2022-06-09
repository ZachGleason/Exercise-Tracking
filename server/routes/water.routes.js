const WaterController = require('../controller/water.controller');

module.exports = (app) => {
    app.get('/api/waters', WaterController.showWaters)
    app.get('/api/water/:id', WaterController.getOneWater)
    app.put('/api/water/:id', WaterController.updateWater)
    app.post('/api/water', WaterController.createWater)
    app.delete('/api/water/:id', WaterController.deleteWater)
}