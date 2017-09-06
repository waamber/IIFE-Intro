// let Something = (function(oldSomething){
// 	const animals = ["cat", "dog"];
// 	somethingOld.niceFunction = function(){
// 		console.log("im a nice function");
// 	}
// 	return oldSomething;
// })(Something || {});

var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn","uranus", "neptune"];
	const spaceCrafts = ["Millenium Falcon", "Death Star", "PEW PEW Fighter", "X-Wing"];

oldSolarSystem.getPlanets = function(){
	return planets;
};

oldSolarSystem.setPlanet = function(newPlanet){
	planets.push(newPlanet);
};

oldSolarSystem.getSpaceCrafts = function(){
	return spaceCrafts;
};	

oldSolarSystem.setSpaceCrafts = function(newSpaceCraft){
	spaceCrafts.push(newSpaceCraft);
};

	return oldSolarSystem
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
let mySpaceCrafts = SolarSystem.getSpaceCrafts();