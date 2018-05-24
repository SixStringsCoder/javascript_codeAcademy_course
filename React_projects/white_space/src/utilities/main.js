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
          return {
            title: article.title,
            author: article.author,
            pubDate: `${calendar} (${fromNow})`,
            descr: article.description,
            url: article.url,
            image: article.urlToImage,
            id: articlesArray.indexOf(article),
          }
        }); // end of map()
      }
    }); // end of 2nd then()
  } // end of getNews method
} // end of ApiCall object


export default ApiCall