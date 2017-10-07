/*
Make a library with books, CDs, and movies.
Create a parent class named Media
with three subclasses: Book, Movie, and CD to build the library.
Steve Hanlon Oct 5, 2017
*/

// Parent class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._rating = [];
  }
    // getters
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get rating() {
      return this._rating;
    }
    // methods
    // find average of _rating array
    getAverageRating() {
      const getAvg = this.rating.reduce((sum, nextNum) => {
        return sum + nextNum;
      }) / this.rating.length;
      // average and round float to nearest tenth indicated by argument 1
      return getAvg.toFixed(1);
    }
    // changes the Boolean value saved to the _isCheckedOut property
    toggleCheckOutStatus() {
      this._booleanProperty = !this._booleanProperty;
    }
    // add a new rating to the _rating array between 1 and 5
    addRating(newRating) {
    if (newRating < 1 || newRating > 5) {
      return 'Pick a rating between 1 and 5.'
    }
    this.rating.push(newRating);
  }
}

//subclass Book
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._isCheckedOut = false;
    this._rating = [];
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

// subclass Movie
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = [];
    this._isCheckedOut = false;
    this._rating = [];
  }
  // getters
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
}

//create subclass CD
class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._isCheckedOut = false;
    this._rating = [];
    this._artist = artist;
    this._songs = [];
    this._bandMembers = [];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  get bandMembers() {
    return this._bandMembers;
  }
  shuffle() {
    const randomSongOrder = this._songs.sort(() => Math.random() * 2 - 1);
    return randomSongOrder
  }
}

//create class Catalog to hold all media items in Library
class Catalog {
  constructor() {
    this._books = [];
    this._movies = [];
    this._cds = [];
  }
  get books() {
    return this._books;
  }
  get movies() {
    return this._movies;
  }
  get cds() {
    return this._cds;
  }
  showCatalog(catalog) {
    // return ???
  }
}

// create instance of Book
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
// set checked out to True
historyOfEverything.toggleCheckOutStatus();
// log checked out Boolean
console.log(historyOfEverything.isCheckedOut);
// Add ratings
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
// Average the rating and print to console
console.log(historyOfEverything.getAverageRating());

// create instance of Movie
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
