/*
In this project, I use JavaScript to randomly create a
three-course meal based on what is available on a menu.
We'll keep running it until we're satisfied with the generated meal!
Steve Hanlon Oct 3, 2017
*/

// Create an empty menu object
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  }, // end _courses
  get appetizers() {

	},
  set appetizers(appetizerIn) {

  }, // end getter/setter appetizer
  get mains() {

	},
  set mains(mainIn) {

  }, // end getter/setter main
  get desserts() {

	},
  set desserts(dessertsIn) {

  }, // end getter/setter desserts
	get courses() {
    return {
      appetizers: this._courses.appetizers,
  		mains: this._courses.mains,
  		desserts: this._courses.desserts
    }
  }, // getter courses
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
    name: dishName,
    price: dishPrice,
  }
    this._courses[courseName].push(dish);
  }, // end addDishToCourse
  // make a random dish from a course on the menu
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
	}, // end getRandomDish method
  // create random meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const price = appetizer.price + main.price + dessert.price;
    const tip = price * .2;
    return `You've ordered ${appetizer.name}, ${main.name}, and ${dessert.name} for a subtotal of $${price} plus a $${tip} tip, totalling $${price + tip}.`;
  } // end generateRandomMeal method
}; // end menu

// fill up the menu
menu.addDishToCourse('appetizers', 'egg rolls', 5.50);
menu.addDishToCourse('appetizers', 'fried potatoes', 6.00);
menu.addDishToCourse('appetizers', 'onion rings', 5.25);
menu.addDishToCourse('mains', 'fried noodles with broccoli', 10.50);
menu.addDishToCourse('mains', 'raviolis', 12.00);
menu.addDishToCourse('mains', 'a gardenburger', 8.25);
menu.addDishToCourse('desserts', 'creme brule', 7.50);
menu.addDishToCourse('desserts', 'chocolate sundae', 7.00);
menu.addDishToCourse('desserts', 'keylime pie', 7.25);

// Generate a random meal and then log it
const meal = menu.generateRandomMeal();
console.log(meal);
