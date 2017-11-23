__Title__: Kelvin Temperature Converter
By: Steve Hanlon Nov. 14, 2017

__Goal__: Develop a React App based on a Kelvin to Celsius and Fahrenheit converter with an answer rendered to the DOM.  Practice making separate components which pass props between them.

#### Work flow
1. Develop index.html static site with hard-coded content.
2. Create React project
3. Sketch out Components based on HTML static site then create Component Directories with JS and CSS files.

  ![Component map](./screenshots/Kelvin_CompMap.jpeg)
4. Copy/Paste the hard-coded HTML and CSS into the various React components, rewrite file/link paths
5. Create logic through methods and pass props

#### Programming flow
1. User **inputs** the starting Kelvin temperature in an text input which is then stored in the variable _kelvin_.
2. Create equation to that take value of _kelvin_ and convert Celsius, stored in a variable called _celsius_.
3. Create 2nd equation using _celsius_ value to calculate Fahrenheit, stored in a variable _fahrenheit_.  Use Math.floor to round the number down.
4. **Display** the C and F temperatures
within a statement
 * `The Kelvin temperature of ${kelvin}K is equal to ${fahrenheit}F and ${celsius}C.`
 * Option: Embellish with playful statements using conditional control flow whether a temperature is above or below a given point
```
if (fahrenheit < 50) {
  console.log("Prep for Antarctic winter olympics!");
} else if (fahrenheit > 50 && fahrenheit < 90) {
  console.log("Time to go kayaking on the Willamette!");
} else if (fahrenheit > 90 && fahrenheit < 110) {
  console.log("Prep for Las Vegan Summer Olympics!");
} else {
  console.log("Prep for Saudi Arabian Summer Olympics marathon!");
}
```

#### Future Feature Requests
1. Design layout so that all activity happens in one space. Make the space where the Temp input is disappear onClick and the Results area appears with the answer (add new button to go back to Temp input).
2. connect to an API to fill in temperature(s) and get varied results
3. Add module with a lot a bigger answer database for more varied answers
