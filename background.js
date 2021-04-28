var rootURL = "http://c6c603435688.ngrok.io/api";

var currentWine;

// Retrieve wine list when application starts 
getGroups();

function getGroups() {
	console.log('getGroups');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", // data type of response
		success: renderList
	});
}
