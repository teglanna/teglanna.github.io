var work = {
	"jobs" : [
		
		{
			"title": "SOFTWARE SUMMER INTERN AT PULILAB",
			"locdate": "BUDAPEST, AUG - SEPT 2015",
			"description": "I was developing a hybrid mobile android app with JavaScript, JQuery, Cordova, Onsen UI + Angular.js and Django REST.",
			"url": "medium.com/the-pulilab-team"
		},

		{
			"title": "EVS IN ISTANBUL, ART TEACHER",
			"locdate": "2014",
			"description": "I participated in the program of European Voluntary Service, held arts and crafts, theater workshops and operated the foundation's website.",
			"url": "basaksanatvakfi.org.tr"
		},
		{
			"title": "ART WORKSHOPS AND CAMPS CO-ORGANIZER,",
			"locdate": "VARGA IMRE GALLERY, BUDAPEST | 2012 - 2015",
			"description": "I held arts and crafts sessions and summer camps for youth.",
			"url": "facebook.com/Alkotonapok"
		},
		{
			"title": "DRAWING TEACHER AT VERES PETER SECONDARY SCHOOL,",
			"locdate": "BUDAPEST  2010-2012",
			"description": "I was teaching drawing lesson and organizing exhibitons and workshops.",
			"url": "verespg.hu"
		}
		
	]
}





function displaywork() {
   for (job in work.jobs) {

	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDate = HTMLworkLocDate.replace("%data%", work.jobs[job].locdate);
	var formattedDesc =  HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedURL = '<a href="http://' + work.jobs[job].url +'" target="blank">' + work.jobs[job].url + "</a>";

	//HTMLworkURL.replace("%data%", work.jobs[job].url);
	$("#work ul").append('<li>'+formattedTitle+formattedDate+formattedDesc+formattedURL+'</li>');
	};
  }

displaywork();



var projects = {
	"projects" : [
	{
		"img": "images/pylvax.png",
		"description": "I take part in organizing the one-day coding workshop for women at Budapest",
		"url": "pylvax.com",
	},
	{
		"img": "images/paint.png",
		"description": "Static website for my artworks",
		"url": "teglanna.github.io",
	},
	{
		"img": "images/code.png",
		"description": "Django based site for code snippets and learning stuffs",
		"url": "teglanna.pythonanywhere.com",
	},
	{
		"img": "images/teglassy.png",
		"description": "Wordpress site for my architect mother",
		"url": "teglassy.hu",
	},
	{
		"img": "images/tundemama.png",
		"description": "Editing a tale blog and creating illustrations to it",
		"url": "tundemamamesei.blogspot.hu",
	},
	{
		"img": "images/megoldas.png",
		"description": "My first static website",
		"url": "megoldasproblemakra.hu",
	},
   ]
}


projects.display = function() {
	for (project in projects.projects) {
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].img);
		var formattedDesc =  HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedURL = '<a href="http://' + projects.projects[project].url +'" target="blank">' + projects.projects[project].url + "</a>";

		$("#project ul").append('<li>'+formattedImage+formattedDesc+formattedURL+'</li>');
		};
}

projects.display();


var social = {
	"social" : [
		
		{
			"title": "DJANGO GIRLS BUDAPEST",
			"description": "I'm a co-organizer of a free programming workshops for women.",
			"url": "djangogirls.org/budapest"
		},

		{
			"title": "PYTHON MEETUP, PYLVAX GROUP",
			"description": "I help to organize events for Python community as meetups and learning groups:",
			"url": "pylvax.com"
		},
		
	]
}

social.display = function() {
	for (soc in social.social) {
		var formattedTitle = HTMLsocialTitle.replace("%data%", social.social[soc].title);
		var formattedDesc =  HTMLsocialDescription.replace("%data%", social.social[soc].description);
		var formattedURL = '<a href="http://' + social.social[soc].url +'" target="blank">' + social.social[soc].url + "</a>";

		$("#soci ul").append('<li>'+formattedTitle+formattedDesc+formattedURL+'</li>');
		};
}

social.display();

var maxiItems = ['images/bundi','images/medvetanc', 'images/kutyak','images/eb', 'images/zao','images/ezso', 'images/cas', 'images/susnyas'];

createMaxi = function(items) {
		for (var i=0; i < items.length; i++){
			$('#some ul').append('<li class="maxi"><a href="' + maxiItems[i]+ '.jpg" data-lightbox="maxi" data-title="Abstracts I."><img src='+maxiItems[i]+'-thumb.jpg></li>');
		}
	};

createMaxi(maxiItems);

