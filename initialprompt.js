var timeofday = function(){
	var timeofday = prompt ("What time is it? Note: must be in miliatry style");
	if (timeofday >=15 && timeofday<17) {
	 result = "You need to wait until dusk to move to the nearest neighborhood";
	}
	if (timeofday >=17 && timeofday<21) {
		 result = "Time to make your move, go find the house with the white picket fence.";
		}
	if (timeofday <21>){
		result ="Eeeps, cutting it close there beauty queen! Tomorrow night, less time in the shower, more time thinking about flesh eating. Go on though, run your arse off to the closest house.";
	}
	if (timeofday.length ===0 || timeofday >100 ){
			result = "Hold up, you gotta enter a number between 1 - 24."
		}
	alert (result);
}