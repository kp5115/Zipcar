const {
  User, Location, Vehicletype, Vehicle,
} = require('../models/index');

function addlocationHandler(req, res) {
  Location.create({
    ...req.body,
  }).then(() => {
    res.status(200).send('added');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function getLocationsHandler(req, res) {
  Location.findAll({ raw: true, attributes: ['id', 'name', 'address', 'capacity'] }).then((locations) => {
    res.status(200).send(locations);
  },
  (err) => {
    res.status(400).send(err);
  });
}

function deleteLocationsHandler(req, res) {
  Location.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('removed');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function editLocationsHandler(req, res) {
  Location.update({
    ...req.body,
  }, {
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('Done');
  },
  (err) => {
    res.status(400).send(err);
  });
}


function addVehicletypeHandler(req, res) {
  Vehicletype.create({
    ...req.body,
  }).then(() => {
    res.status(200).send('added');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function getvehicletypeHandler(req, res) {
  Vehicletype.findAll({ raw: true }).then((vehicletype) => {
    res.status(200).send(vehicletype);
  },
  (err) => {
    res.status(400).send(err);
  });
}

function deletevehicletypeHandler(req, res) {
  Vehicletype.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('removed');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function editvehicletypeHandler(req, res) {
  Vehicletype.update({
    ...req.body,
  }, {
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('Done');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function addvehicleHandler(req, res) {
  Vehicle.create({
    ...req.body,
  }).then(() => {
    res.status(200).send('added');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function getvehicleHandler(req, res) {
  Vehicle.findAll({ raw: true }).then((vehicle) => {
    res.status(200).send(vehicle);
  },
  (err) => {
    res.status(400).send(err);
  });
}

function deletevehicleHandler(req, res) {
  Vehicle.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('removed');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function editvehicleHandler(req, res) {
  Vehicle.update({
    ...req.body,
  }, {
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('Done');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function getmemebersHandler(req, res) {
  User.findAll({
    where: {
      isAdmin: 0,
    },
    raw: true,
    nest: true,
  })
    .then((result) => {
      res.status(200).send(result);
    },
    (err) => {
      res.status(400).send(err);
    });
}

function editmemberHandler(req, res) {
  User.update({
    memberstatus: req.body.status,
  }, {
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('done');
  },
  (err) => {
    res.status(400).send(err);
  });
}

module.exports = {
  addlocationHandler,
  getLocationsHandler,
  deleteLocationsHandler,
  editLocationsHandler,
  addVehicletypeHandler,
  getvehicletypeHandler,
  deletevehicletypeHandler,
  editvehicletypeHandler,
  addvehicleHandler,
  getvehicleHandler,
  deletevehicleHandler,
  editvehicleHandler,
  getmemebersHandler,
  editmemberHandler,
};
