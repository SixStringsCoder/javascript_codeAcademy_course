// Include data for accessing Google APIs
const apiKey = 'AIzaSyAgK1c8s7fO1zG_EzAwzNiCLoJ3n6sEFbg';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions
// Use a fetch() for a GET request
function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;

  fetch(urlToExpand).then(response => {
    if (response.ok) {
     return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }
	).then(jsonResponse => {
    $responseField.append('<p> Your expanded URL is </p><p> ' + jsonResponse.longUrl + '</p>');
	return jsonResponse;
  });
};

// Use a fetch() for a POST request
function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
	const urlToShorten = $inputField.val();

  fetch(urlWithKey, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({longUrl: urlToShorten})
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!");
  }, networkError => console.log(networkError.message)).then(jsonResponse => {
    $responseField.append('<p> Your shortened URL is </p><p>' + jsonResponse.id + '</p>');
return jsonResponse;
  });
};

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

$expandButton.click(expand);
$shortenButton.click(shorten);
