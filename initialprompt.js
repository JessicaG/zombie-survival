var timeofday = function(){
	var timeofday = prompt ("What time is it?");
	if (timeofday >=3pm && timeofday<6pm) {
	 result = "You need to wait until dusk to move to the nearest neighborhood";
	}
	if (timeofday >=5pm && timeofday<9pm) {
		 result = "Time to make your move, go find the house with the white picket fence.";
		}
	if (timeof day <9pm>){
		result ="Eeeps, cutting it close there beauty queen! Tomorrow night, less time in the shower, more time thinking about flesh eating. Go on though, run your arse off to the closest house.";
	}
	alert (result);
}