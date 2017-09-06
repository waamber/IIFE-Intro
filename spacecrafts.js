var SolarSystem = (function(oldSolarSystem){
	const spaceCrafts = ["Millenium Falcon", "Death Star", "PEW PEW Fighter", "X-Wing"];

oldSolarSystem.getSpaceCrafts = function(){
	return spaceCrafts;
};	

oldSolarSystem.setSpaceCrafts = function(newSpaceCraft){
	spaceCrafts.push(newSpaceCraft);
};
 
	return oldSolarSystem
})(SolarSystem || {});