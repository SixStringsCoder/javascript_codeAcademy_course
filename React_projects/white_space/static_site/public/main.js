// Page Elements
const politicoNews = document.getElementById('politicoNews');
const viceNews = document.getElementById('viceNews');
const washPost = document.getElementById('washPost');
const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data
const apiKey = 'bb5acac8bd5147e1b2937a726b4ff7e1';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=bb5acac8bd5147e1b2937a726b4ff7e1';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode&apiKey=bb5acac8bd5147e1b2937a726b4ff7e1';
const nextWebUrl = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=bb5acac8bd5147e1b2937a726b4ff7e1';
const washPostUrl = 'https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey=bb5acac8bd5147e1b2937a726b4ff7e1';
const viceNewsUrl = 'https://newsapi.org/v2/everything?sources=vice-news&apiKey=bb5acac8bd5147e1b2937a726b4ff7e1';
const politicoNewsUrl = 'https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=bb5acac8bd5147e1b2937a726b4ff7e1';

// Request News Function
async function getNews(newsUrl) {
  let response = await fetch(newsUrl);
  if (response.ok) {
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let articlesArray = jsonResponse.articles.slice(0, 10);
    // console.log(articlesArray);
    return articlesArray;
  }
}

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.urlToImage + '" />' +
      '   <a href="https://twitter.com/SixStringHanlon" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
  console.log(newsObjects);
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      Twitter.postStatus(newsObjects[i].url)
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(recodeUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

washPost.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(washPostUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

viceNews.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(viceNewsUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

politicoNews.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(politicoNewsUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);
