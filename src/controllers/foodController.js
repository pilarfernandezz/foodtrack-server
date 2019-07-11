exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.getFood = (req, res, next) => {
    var food = new Object();
    food.id = "id";
    food.name = "nome";
    food.barCode = "barCode";
    food.batch= "batch";
    food.trackingSteps = new Object();
    food.trackingSteps.step = "step";
    food.trackingSteps.status = "status";
    food.trackingSteps.date  = "date";
    food.trackingSteps.foodSituation = "foodSituation";
    food.incidentSteps = new Object();
    food.incidentSteps.step = "step";
    food.incidentSteps.status = "status";
    food.incidentSteps.date  = "date";
    food.incidentSteps.disposal = "disposal";
    res.status(200).send(food);
};

exports.foodExists = (req, res, next) => {
    res.status(200).send();
};

exports.createFood = ('/createFood',(req, res) => {
    res.status(200).send();
})

exports.insertNewTrackingStep = ('/insertNewTrackingStep',(req, res) => {
    var food = new Object();
    food.id = "id"; 
    food.name = "nome";
    food.barCode = "barCode"   
    food.batch = "batch";
    food.trackingSteps = new Object();
    food.trackingSteps.step = "step";
    food.trackingSteps.status = "status";
    food.trackingSteps.date  = "date";
    food.trackingSteps.foodSituation = "foodSituation";
    food.incidentSteps = new Object();
    res.status(200).send(food);
})

exports.insertNewIncident = ('/insertNewIncident',(req, res) => {
    var food = new Object();
    food.id = "id"; 
    food.name = "nome";
    food.barCode = "barCode"   
    food.batch = "batch";
    food.trackingSteps = new Object();
    food.incidentSteps = new Object();
    food.incidentSteps.step = 'step';
    food.incidentSteps.status = req.query.incidentType;
    food.incidentSteps.date  = "date";
    food.incidentSteps.disposal = req.query.disposal;
    res.status(200).send(food);
})


exports.trackFood = (req, res, next) => {
    var food = new Object();
    food.id = "id";
    food.name = "nome";
    food.barCode = "barCode";
    food.batch= "batch";
    food.trackingSteps = new Object();
    food.trackingSteps.step = "step";
    food.trackingSteps.status = "status";
    food.trackingSteps.date  = "date";
    food.trackingSteps.foodSituation = "foodSituation";
    food.incidentSteps = new Object();
    food.incidentSteps.step = "step";
    food.incidentSteps.status = "status";
    food.incidentSteps.date  = "date";
    food.incidentSteps.disposal = "disposal";
    res.status(200).send(food);
};