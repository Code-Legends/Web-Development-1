$(document).ready(function(){
	
	// A - 1
	$('img').attr('src', 'https://www.scmusic.com.au/content/uploads/2015/04/YAMAHA-fg650-acoustic-guitar-best-value-south-coast-music-11.jpg');
	// A - 1

	// A - 2 
	$('button#go').on('click', function(){ $('p#output').text( $('input#color').val() ).css('color', 'red'); });
	// A - 2

	// A - 3
	$('body').on('click', 'button', function(){
		alert('Clicked!');
	});
	// A - 3 

	// A - 5
	$('#secret').hide();
	// A - 5

	// A - 6
	$('body').css('background', 'red');
	// A - 6

	// A - 8
	var listItem4 = '<li>Here is thing four.</li>';

	$('ol').append(listItem4);
	// A - 8
});
