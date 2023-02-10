$(document).ready(function() {
    //Run text fadeing in
    $("#logoAnimateFade").fadeOut(0).fadeIn(5000);
    $("#textFadeInOne").fadeOut(0);
    $("#textFadeInTwo").fadeOut(0);
    $("#textFadeInThree").fadeOut(0);
    $("#textFadeInFour").fadeOut(0);
    $("#textFadeInFive").fadeOut(0);
    $("#textFadeInSix").fadeOut(0);
    $("#textFadeInSeven").fadeOut(0);
    $("#textFadeInEight").fadeOut(0);
    $("#animateCopy").fadeOut(0);
    $("#animateDate").fadeOut(0);


    setTimeout( function () {
        $("#textFadeInOne").fadeIn(5000);
    },
    1000);
    setTimeout( function () {
        $("#textFadeInTwo").fadeIn(5000);
    },
    1000);
    setTimeout( function () {
    $("#textFadeInThree").fadeIn(5000);
    },
    2000);
    setTimeout( function () {
    $("#textFadeInFour").fadeIn(5000);
    },
    3000);
    setTimeout( function () {
    $("#textFadeInFive").fadeIn(5000);
    },
    4000);
    setTimeout( function () {
    $("#textFadeInSix").fadeIn(5000);
    },
    5000);
    setTimeout( function () {
    $("#textFadeInSeven").fadeIn(5000);
    },
    6000);
    setTimeout( function () {
    $("#textFadeInEight").fadeIn(5000);
    },
    7000);
    setTimeout( function () {
    $("#animateCopy").fadeIn(5000);
    },
    0);
    setTimeout( function () {
    $("#animateDate").fadeIn(5000);
    },
    0);

    //Stager animations
    $("#logoAnimateFade").delay(14000);
    $("#picFloatLeft").delay(14000);
    $("#slide").delay(14000);
    $("h2").delay(14000);
    $("#animateCopy").delay(8000);
    $("#animateDate").delay(8000);
    
    //Animate the logo when the Sam's Gloves is hovered over
    $("#logoAnimateFade").mouseover(function(evt) {
    	$("#picFloatLeft").fadeOut(1000).fadeIn(1000);
        
        // cancel the default action of the link
	    evt.preventDefault();

    }); //End hover

    //Include an advertisement that changes its image every 3 seconds
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;
    //Start slide show
    setInterval( function () {
    	$("#slide").fadeOut(1000,
    	    function () {
    	    	if (nextSlide.next().length == 0) {
    	    		nextSlide = $("#slides img:first-child");
    	    	}
    	    	else {
    	    		nextSlide = nextSlide.next();
    	    	}
    	    	nextSlideSource = nextSlide.attr("src");
    	    	nextCaption = nextSlide.attr("alt");
    	    	//debugger;
    	    	$("#slide").attr("src", nextSlideSource).fadeIn(1000);
    	    }
        ); //End callback
    },
    3000);

    /*Did not know that setInterval was a method till I 
        looked at this website. Thought it was just
        a function name*/
        //https://www.w3schools.com/jsref/met_win_setinterval.asp

    //Create an interval timer based animation
        //This is for the "An interval based animation"

    $("#animateCopy").css('position', 'relative');
    
    $("#animateDate").css('position', 'relative');

    setInterval( function () {
        $("#animateCopy").animate(
            {right: "+=205"}, 1000);
        $("#animateCopy").animate(
            {right: "-=205"}, 1000); 
        $("#animateDate").animate(
            {left: "+=205"}, 1000);
        $("#animateDate").animate(
            {left: "-=205"}, 1000);     
    },
    1000);

    //Create an event based animation when the expand heading button is clicked
        //This is for the "An event based animation"
    $("h2").css('position', 'relative');

    $("#expandButton").click(function() {
        $("h2").animate(
            { "font-size": "275%"}, 4000);
        $("h2").animate(
            {"font-size": "175%"}, 1000);
         
    }); //End "An event based animation"

    //Create an event based animation that slides the headings to the right when clicked
        //This is for the "A use of the .animate method"
    $("#slideButton").click(function() {
        $("h2").animate(
            {left: "+=205"}, 2000);
        $("h2").animate(
            {left: "-=205"}, 2000);    
    }); //End "A use of the .animate method"
    
}); //End ready

