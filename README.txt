Plugin Name	: 	jquery.image.Slider
Description	: 	This is a jQuery plugin that can be used to slide or fade set images 
			in your webpage
Version		: 	1.0.0
Author		: 	Nathan Senevirathne
Author URI	: 	http://www.brightkidz.com.au
Created Date	: 	24/12/2014
Instructions	: 	Please read the instructions on readme file to find how to use it. 
			If you find any bug or any concern please let me know. 
			Thanks for using it!


Please run the index.html file to see the instructions and the working copy of the implementation.

Instructions:

Step 1: Add the links for js. 
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
<script type="text/javascript"  src="js/jquery.imageSlider.js"></script>


Step 2: Make a un-ordered list of images anywhere in your html file. 
	Don't go to add any styles since styling canvas be done using the calling function.
	<ul>
		<li><img src="images/1.jpg" ></li>
		<li><img src="images/2.jpg" ></li>
		<li><img src="images/3.jpg" ></li>
		<li><img src="images/4.jpg" ></li>
	</ul>
	
Step 3: Call any one of following ways to add the sliding or fading effect for all the images 
	you have within ul tags.
	<script>
		<!-- call slide with full set of parameters -->
		$('ul').imageSlider({speed: 2100, pause:5000, transition:'slide', border:true, borderColor:'#000000', borderWidth : 10});
			
		<!-- call fade with full set of parameters -->
		$('ul').imageSlider({speed: 2100, pause:5000, transition:'fade', border:true, borderColor:'#000000', borderWidth : 10});
			
		<!-- call slide with only speed and pause parameters -->
		$('ul').imageSlider({speed: 3000, pause:8000, transition:'slide'});
			
		<!-- call fade with no other parameters -->
		$('ul').imageSlider({transition:'fade'});
			
		<!-- call slide with no other parameters -->
		$('ul').imageSlider({transition:'slide'});
			
		<!-- call with no parameters (it will slide as its the default setting) -->
		$('ul').imageSlider();
	</script>

Enjoy!
And if you find any bugs please let me know.
Thank You!