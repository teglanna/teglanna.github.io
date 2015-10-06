$(document).ready(function() {

    // Item lists 
	installationItems = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg'];
	portraitItems = ["img/portrait/nemo", "img/portrait/katinka2", "img/portrait/peti", "img/portrait/kata", "img/portrait/katinka", "img/portrait/ferenc", "img/portrait/monika", "img/portrait/anya", "img/portrait/szerdi", "img/portrait/popi", "img/portrait/bazsi", "img/portrait/apa"];
	krokiItems = ["img/kroki1", "img/kroki2", "img/kroki3", "img/kroki4", "img/kroki5"];	
	maxiItems = ['img/kilog', 'img/medvetanc', 'img/lajhar', 'img/balna', 'img/ezso', 'img/zao', 'img/cas', 'img/susnyas', 'img/bundi', 'img/eb', 'img/kutyak', 'img/lajhar-port'];
	miniItems = ['img/small/10', 'img/small/12', 'img/small/11', 'img/small/1b', 'img/small/9', 'img/small/5b', 'img/small/6b', 'img/small/5', 'img/small/7', 'img/small/3b', 'img/small/4b', 'img/small/7b', 'img/small/6', 'img/small/16', 'img/small/18', 'img/small/20', 'img/small/32', 'img/small/40', 'img/small/47', 'img/small/56', 'img/small/48b', 'img/small/75', 'img/small/78', 'img/small/80' ];
	linoItems = ["img/lino/istanbul", "img/lino/mk", "img/lino/cseh_map", "img/lino/daru", "img/lino/ko", "img/lino/1", "img/lino/2", "img/lino/3", "img/lino/7"];


	//Create functions

	createIntallation = function(items) {
		for (var i=0; i < items.length; i++){
			$('#gallery').append('<li class="installation"><a href="' + items[i]+ '"data-lightbox="installation" data-title="Tape Directions" data-desc="Right direction assignment Füle/Szekszárd, 2014"><img src='+items[i]+'></li>');
		}						
	};

	createPortrait = function(items) {
		for (var i=0; i < items.length; i++){
			$('#gallery').append('<li class="portrait"><a href="' + portraitItems[i]+ '.jpg" data-lightbox="portrait" data-title="Portrait" data-desc="Oil on canvas, 2012"><img src='+portraitItems[i]+'-thumb.jpg></li>');
		}
	};

	createKroki = function(items) {
		for (var i=0; i < items.length; i++){
			$('#gallery').append('<li class="drawing"><a href="' + krokiItems[i]+ '.jpg" data-lightbox="drawing" data-title="Kroki" data-desc="Walnut stain"><img src='+krokiItems[i]+'-thumb.jpg></li>');
		}
	};

	createMaxi = function(items) {
		for (var i=0; i < items.length; i++){
			$('#gallery').append('<li class="maxi"><a href="' + maxiItems[i]+ '.jpg" data-lightbox="maxi" data-title="Abstracts I."><img src='+maxiItems[i]+'-thumb.jpg></li>');
		}
	};

	createMini = function(items) {
		for (var i=0; i < items.length; i++){
			$('#gallery').append('<li class="mini"><a href="' + miniItems[i]+ '.jpg" data-lightbox="mini" data-title="Abstracts II."><img src='+miniItems[i]+'-thumb.jpg></li>');
		}
	};

	createLino = function(items) {
		for (var i=0; i < items.length; i++){
			$('#gallery').append('<li class="linocut"><a href="' + linoItems[i]+ '.jpg" data-lightbox="linocut" data-title="Linocut"><img src='+linoItems[i]+'-thumb.jpg></li>');
		}
	};


	createIntallation(installationItems);
	
	createMaxi(maxiItems);

	createPortrait(portraitItems);

	createKroki(krokiItems);

	createLino(linoItems);

	createMini(miniItems);
});