'use strict';

var token = '896102395.bbdda86.b74bdfb20df44ee69eb6665ad1d98065', //access token
    hashtag='минск', // hashtag without # symbol
    num_photos = 4;

var source = $("#template").html();
var template = Handlebars.compile(source);
 
$.ajax({
	url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
		console.log(data);
		$("body").append(template(data));
	},
	error: function(data){
		console.log(data);
	}
});