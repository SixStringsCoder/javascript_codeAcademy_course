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
      return getAvg;
    }
    // changes the Boolean value saved to the _isCheckedOut property
    toggleCheckOutStatus() {
      this._booleanProperty = !this._booleanProperty;
    }
    // add a new rating to the _rating array
    addRating(newRating) {
      this.rating.push(newRating);
    }
}

//subclasses
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

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._isCheckedOut = false;
    this._rating = [];
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._director;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._isCheckedOut = false;
    this._rating = [];
    this._artist = artist;
    this._songs = [];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}
