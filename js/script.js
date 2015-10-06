$(document).ready(function() {

	$('#home').show();
	$('ul#gallery').hide();
	$('h1#heading').hide();

	$('nav a').on('click', function(){
		$('#home').hide();
		$('ul#gallery').show();
		$('h1#heading').show();
		//Current class asignment
		$('nav li.current').removeClass('current');
	 	$(this).parent().addClass();

	 	//Set heading
	 	$('h1#heading').text($(this).text());

	 	//Get & filter link text
	 	var category = $(this).text().toLowerCase().replace(' ','-');

	 	//Remove hidden class if 'all-projects' is selected
	 	if(category == 'all-projects') {
	 		$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
	 	} else {
	 		$('ul#gallery li').each(function() {
	 			if (!$(this).hasClass(category)) {
	 				$(this).hide().addClass('hidden');
	 			} else {
	 				$(this).fadeIn('slow').removeClass('hidden');
	 			}
	 		});
	 	}
	 	//Stop link behaviour
	 	return false;
	});


	//Mouseenter overlay
	$('ul#gallery li').on('mouseenter', function() {
		//Get data attribute values

		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		//Validation
	 	if (desc == null) {
	 		desc = 'Click to Enlarge';
	 	}

	 	if (title == null) {
	 		title = '';
	 	}


	 	//Img opacity
	 	//$('ul#gallery li img').css('opacity','0.4');		
		//Create overlay div
		
		$(this).append('<div class="overlay"></div>');
				
		var overlay = $(this).children('.overlay');

		//Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		
		//Overlay fade in
		overlay.fadeIn(800);

		
	});

	//Mouseleave overlay
	$('ul#gallery li').on('mouseleave', function() {
		//Create overlay div
		$(this).append('<div class="overlay"></div>');
		var overlay = $(this).children('.overlay');

		//Overlay fade out
		overlay.fadeOut(800);
	});

	

	
});