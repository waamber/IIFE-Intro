var SolarSystem = (function(oldSolarSystem){
	const stars = ["Michael Jackson", "Brad Pitt", "Uma Thruman", "John Travolta"];

	oldSolarSystem.listStars = function(){
		return stars;
	};

	oldSolarSystem.byeStar = function(newStar){
		stars.pop();
	};

	oldSolarSystem.hiStar = function(newStar){
		stars.push();
	};

	oldSolarSystem.shwiftyStar = function(newStar){
		stars.shift();
	}

	return oldSolarSystem
})(SolarSystem || {});