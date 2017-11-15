## Kelvin Weather Converter  ReadMe

#### Intro
Title: Kelvin Weather Converter

This converter takes a Kelvin temperature and converts it to Celsius and Fahrenheit then display the results to the DOM.

#### Programming flow
1. User **inputs** the starting Kelvin temperature through a prompt which is then stored in the variable _kelvin_.
2. Create equation to that take value of _kelvin_ and convert Celsius, stored in a variable called _celsius_.
3. Create 2nd equation using _celsius_ value to calculate Fahrenheit, stored in a variable _fahrenheit_.  Use Math.floor to round the number down.
4. **Display** the C and F temperatures
within a statement
 * `The Kelvin temperature of ${kelvin}K is equal to ${fahrenheit}F and ${celsius}C.`
 * Option: Embellish with playful statements using conditional control flow whether a temperature is above or below a given point
```
if (fahrenheit < 50) {
  console.log("Prep for Antartic winter olympics!");
} else if (fahrenheit > 50 && fahrenheit < 90) {
  console.log("Time to go kayaking on the Willamette!");
} else if (fahrenheit > 90 && fahrenheit < 110) {
  console.log("Prep for Las Vegan Summer Olympics!");
} else {
  console.log("Prep for Saudi Arabian Summer Olympics marathon!");
}
```

#### Setup
1. Develop webpage with UI
 * make static HTML page for basic design
    * Use HTML input to get Kelvin temperature <input type=text>

    * Render equation results in a paragraph with image changing accordingly.
 * break up into component for React --> [More Details](#)
 2. Add additional logic and control flow
 3. Develop into React webpage




#### Usage
Use this converter to take a Kelvin temperature and convert it to Celsius and Fahrenheit then display the results on a webpage.
