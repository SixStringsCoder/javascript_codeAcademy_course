/*
Practice set of techniques for creating asynchronous
requests using jQuery's $.get() method to send calls to Google URL Shortener API.
This exercise focuses on a GET then a POST requests only.
API key purposely deleted for protection.

Steve Hanlon October 28, 2017
*/

// GET REQUEST
// Writing a GET request which requests information from another site.
// Enter in a shortened URLs and retrieve the original long URL.

// Include data for accessing Google APIs
const apiKey = '';
const url = 'https://www.googleapis.com/urlshortener/v1/url'
const projection = 'FULL';

// Some page element
const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions
function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();

  $.get(urlToExpand,
        response => {
          $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
        },
        'json');
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();

  $.post({
    url: urlWithKey,
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown) {
    	console.log(jqXHR);
  	}
  });
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit
$expandButton.click(expand);
$shortenButton.click(shorten);


//======================================================
//======================================================
//======================================================


// POST REQUEST
// Shorten a URL by using a POST request to ask Google to store the long URL
// and its shortened version.  This introduces new information into Google's database hence the POST request


// Include data for accessing Google APIs
const apiKey = '';
const url = 'https://www.googleapis.com/urlshortener/v1/url'
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
    const urlToExpand = url + '?key=' + apiKey +
'&shortUrl=' + $inputField.val();

    $.ajax({
        url: urlToExpand,
        type: 'GET',
        dataType: 'json',
        success(response) {
          $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
        },
        error(jqXHR, status, errorThrown) {
        	console.log(jqXHR);
      	}
    });
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();

  $.ajax({
    url: urlWithKey,
    type: 'POST',
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown) {
    	console.log(jqXHR);
  	}
  });
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
