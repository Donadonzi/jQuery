$(function() {
  
	// $(".red-box").toggle(2000),
	// // $(".green-box").fadeTo(3000, .5),
	// // $(".blue-box").fadeTo(4000, .8),
	// $(".green-box").fadeToggle()
	// $(".green-box").slideUp(1000),
	// $(".green-box").slideDown(2000)
	// $('p').hide();
	// $('p').slideDown(2000);
	// $('p').animate({
	// 	fontSize: '2rem'
	// }, 1000);
	// $('.green-box').animate({
	// 	'margin-right': '+=20rem'
	// }, 2000);
	// $('.green-box').animate({
	// 	'margin-right': '-=20rem'
	// }, 2000, 'linear', function() {
	// 	// alert("I'm done!");
	// 	$('.red-box').animate({
	// 		marginRight: '20rem'
	// 	}, function() {
	// 		$('.green-box').slideUp(1000);
	// 	});
	// });

	// $('.lightbox').delay(5000).fadeIn(1000);

	// $('p').css('color', 'blue'),
	// $('input[type="email"]').css('background-color', 'yellow')

	// $('h2:first').css('color', 'green'),
	// // $('li:last-child').css('color', 'green')
	// $('li:last').css('color', 'green'),
	// $('input:text').css('background-color', 'red')

	// $('#list').find('ul').css('background-color', 'red')
	// $('#list').children('li').css('background-color', 'red')
	// $('#test').next().css('background-color', 'red')
	// $(':header').next().css('background-color', 'yellow'),
	// $('form').children(':password').css('background-color', 'red')

	// $('#list').find('li').filter(':even').css('background-color', 'yellow')
	// $('#list').find('li').filter(function(index) { 
	// 	return index === 4;
	// }).css('background-color', 'yellow'),
	// $('li').filter(function(index) { 
	// 	return index === 4;
	// }).css('background-color', 'yellow')
	// $('li').eq(-4).css('background-color', 'purple'),
	// $('li').eq(2).css('background-color', 'purple'),
	// $('li').not('#list ul li').css('background-color', 'blue')

	// $('#list li:first ul').append('<li>Hey!</li>'),
	// $('<li>Hey again!</li>').appendTo($('#list li:last')),
	// $('<h5>Donya</h5>').prependTo('h1'),
	// $('.blue-box').after('<div class="blue-box">I am new!</div>'),
	// $('.green-box').before( function() {
	// 	return $('<div class="green-box">I am being added via function</div>')
	// });

	// var greenBox = $('<div class="green-box">I am new!!</div>');
	// $('.red-box, .blue-box').replaceWith(greenBox);
	// $(greenBox).replaceAll('.red-box, .blue-box');

	// $('form').children().not("textarea, input:text, br").remove();
	// $('form').empty();
	// $('p:first').empty();

// =========================== MANIPULATING ATTRIBUTES =================================
	// $('#special-link').attr('href', 'http://google.com');
	// console.log($('#special-link').attr('href'));
	// var checkBool = $('input:checkbox').prop('checked');
	// console.log(checkBool);
	// console.log($('input:text').val());
	// console.log($('input[type="range"]').val());
	// $('input:text').val("Donya Teymz");
	// console.log($('input:text').val());

// =========================== MAKING AN IMAGE SLIDESHOW =================================
	// var sources = [
	// 	"./images/laptop-mobile_small.jpg",
	// 	"./images/laptop-on-table_small.jpg",
	// 	"./images/people-office-group-team_small.jpg"
	// ];

	// var image = $('.gallery').find('img').first();

	// var i = 0;
	// setInterval( function() {
	// 	i = (i+1) % sources.length;
	// 	image.fadeOut( function() {
	// 		$(this).attr('src', sources[i]).fadeIn(); // $(this) = image
	// 	});
	// }, 2000);

	// $('.gallery').css('display', 'none');

// =========================== CHANGING CSS =================================
	// $('.red-box').css('height', '+=2rem');
	// const properties = $('p').css(['font-size', 'display', 'color']);
	// console.log(properties);
	// $('.green-box').css('user-select', 'none');

	// $('a').addClass('fancy-link');
	// $('div').addClass( function(i, cur){
	// 	if (cur === 'dummy') {
	// 		return 'red-box';
	// 	}
	// });

// =========================== ADD DATA TO AN ELEMENT =================================
// const gallery = $('.gallery');

// var sources = [
// 	"./images/laptop-mobile_small.jpg",
// 	"./images/laptop-on-table_small.jpg",
// 	"./images/people-office-group-team_small.jpg"
// ];

// gallery.data('availableImages', sources);
// console.log(gallery.data('availableImages'));
// gallery.data('name', 'My-Gallery');
// console.log(gallery.data());

// // =========================== CONTENT OF AN ELEMENT =================================
// const markUpText = $('p:first').html();
// $('p:first').html(markUpText + '<strong>I have been added here via jQuery</strong>');
	

// =========================== EVENT HANDLING =================================
// $('.btn-dummy').click(function(e){
// 	console.log(e);
// });
// $('.red-box').click(function(){
// 	$(this).fadeTo(1000, .5);
// });
// $('.green-box').hover(function() {
// 	$(this).text('I am hovered!');
// 	$(this).animate({'margin-right': '20rem'}, 1000);
// });
// $('.blue-box').hover(function() {
// 	$(this).stop().fadeTo(500, .5);
// }, function() {
// 	$(this).stop().fadeTo(500, 1);
// });

//=== Gallery with click event ====
// var sources = [
// 		"./images/laptop-mobile_small.jpg",
// 		"./images/laptop-on-table_small.jpg",
// 		"./images/people-office-group-team_small.jpg"
// 	];

// 	var image = $('.gallery').find('img').first();
// 	var i = 0;

	// image.on("click", function() {
	// 	i = (i+1) % sources.length;
	// 	$(this).fadeOut(function(){
	// 		image.attr('src', sources[i]).fadeIn();
	// 	});	
	// });

	//=== Modularizing the above procedure by taking out the anonymous function ====
	// function nextImage() {
	// 	i = (i + 1) % sources.length;
	// 	image.fadeOut(function() {
	// 		image.attr('src', sources[i]).fadeIn();
	// 	});
	// }
	
	// image.on('click', nextImage);

//=== Event delegation ====	
	// $('#list').append('<li>I am an appended element</li>');
	// $('body').on('mouseenter', 'li', function() {
	// 	$(this).css('color', 'cyan');
	// });
	// $('body').on('mouseleave', 'li', function() {
	// 	$(this).css('color', 'black');
	// });

//=== Adding additional data to the event ====	
	// $('.btn-dummy').click({
	// 	user: 'Donya'
	// }, function(e){
	// 	alert('Hi' + e.data.user);
	// });

// =========================== IMAGE GALLERY WITH LIGHTBOX PREVIEW=================================
	const images = $('.gallery').find('img');
	images.css('width', '33%').css('opacity', '.7');

	images.mouseenter(function(){ 
		$(this).stop().fadeTo(200, 1);
	});

	images.mouseleave(function() {
		$(this).stop().fadeTo(200, .7);
	});

	images.click(function(){
		const source = $(this).attr('src');
		const image = $('<img>').attr('src', source).css('width', '150%');
		$('.lightbox').empty().append(image).fadeIn();
	});

	$('.lightbox').click(function(){
		$(this).stop().fadeOut(200);
	});
	
// =========================== HANDLIGN KEYDOWN AND KEYUP EVENTS =================================
	$('html').keydown(function(e){
		console.log(e.which);
		if (e.which === 39) {
			$('.blue-box').stop().css('margin-left', '+=1rem');
		}
	});

});

