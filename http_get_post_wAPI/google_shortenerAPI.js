/*
Practice set of techniques for creating asynchronous
requests using XHR GET and POST calls to Google URL Shortener API.
This exercise focuses on a GET then a POST requests only.
API key purposely deleted for protection.
Constructing XMLHttpRequest objects and using vanilla
JavaScript to send the request and handle the response.
Steve Hanlon October 27, 2017
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
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
    }
  }
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
    }
  }

  xhr.open('POST', urlWithKey);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
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
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
    }
  }
  xhr.open('GET', urlToExpand);
  xhr.send();
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
    }
  }

  xhr.open('POST', urlWithKey);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
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
