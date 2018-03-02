import moment from 'moment';

// News API Data
const url = 'https://newsapi.org/v2/'
const apiKey = 'bb5acac8bd5147e1b2937a726b4ff7e1';
const cors = 'https://cors-anywhere.herokuapp.com/';

const engadget = `top-headlines?sources=engadget&apiKey=`;
const recode = `top-headlines?sources=recode&apiKey=`;
const nextWeb = `top-headlines?sources=the-next-web&apiKey=`;
const washPost = `top-headlines?sources=the-washington-post&apiKey=`;
const viceNews = `everything?sources=vice-news&apiKey=`;
const politicoNews = `top-headlines?sources=financial-times&apiKey=`;



// function renderNews(articles) {
//   articles.map((article, index) => {
//     let articleRow =
//       '<div class="articlerow">' +
//       ' <div class="article">' +
//       '   <h2 class="title">' + article.title + '</h2>' +
//       '   <h3>By ' + article.author + '</h3>' +
//       '   <p> ' + article.description + '</p>' +
//       '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
//       ' </div>' +
//       ' <div class="share">' +
//       '   <img class="storyimage" src="' + article.urlToImage + '" />' +
//       '   <a href="https://twitter.com/SixStringHanlon" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
//       '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
//       ' </div>' +
//       '</div>';
//
//     main.innerHTML += articleRow;
//   });
//   return articles;
// }

// Post Tweet Function
// function sendTweets(newsObjects) {
//   let tweetButtons = document.getElementsByClassName('tweet');
//   for (let i = 0; i < tweetButtons.length; i++) {
//     tweetButtons[i].addEventListener('click', function() {
//       Twitter.postStatus(newsObjects[i].url)
//       tweetButtons[i].innerHTML = "Tweeted";
//     }, false);
//   }
// }


const ApiCall = {
  // Request News Source
  getNews: function(newsId) {
    let newsUrl = eval(newsId);
    return fetch(`${cors}${url}${newsUrl}${apiKey}`)
    .then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.articles) {
        let articlesArray = jsonResponse.articles.slice(0, 10);
        console.log(articlesArray);
        return articlesArray.map(article => {
          let calendar = moment(article.publishedAt).calendar();
          let fromNow = moment(article.publishedAt).fromNow();
          console.log(`${calendar} (${fromNow})`);
          return {
            title: article.title,
            author: article.author,
            pubDate: `${calendar} (${fromNow})`,
            descr: article.description,
            url: article.url,
            image: article.urlToImage
          }
        }); // end of map()
      }
    }); // end of 2nd then()
  } // end of getNews method
} // end of ApiCall object


  // engadget.addEventListener('click', function() {
  //   main.innerHTML = ' ';
  //   getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
  // }, false);
  //
  // recode.addEventListener('click', function() {
  //   main.innerHTML = ' ';
  //   getNews(recodeUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
  // }, false);
  //
  // nextWeb.addEventListener('click', function() {
  //   main.innerHTML = ' ';
  //   getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
  // }, false);
  //
  // washPost.addEventListener('click', function() {
  //   main.innerHTML = ' ';
  //   getNews(washPostUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
  // }, false);
  //
  // viceNews.addEventListener('click', function() {
  //   main.innerHTML = ' ';
  //   getNews(viceNewsUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
  // }, false);
  //
  // politicoNews.addEventListener('click', function() {
  //   main.innerHTML = ' ';
  //   getNews(politicoNewsUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
  // }, false);


export default ApiCall
