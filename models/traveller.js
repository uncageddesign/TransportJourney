const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const allStartLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return allStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const allEndLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return allEndLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const usedTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return usedTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return journeyDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0)
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transport = this.journeys.map((journey) => {
    return journey.transport;
  })
  let uniqueTransport = transport.filter((usedTransport, index) => {
    return transport.indexOf(usedTransport) === index;
  });
  return uniqueTransport;
};


module.exports = Traveller;
