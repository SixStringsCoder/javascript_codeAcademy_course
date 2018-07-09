# Whack an Autocrat

## Table of Contents
- [Acknowledgements](#acknowledgements)
- [Maintainers](#maintain)
- [License](#lic)
- [Summary](#brain-fart-summary)
- [Scripts and Libraries](#scripts-and-libraries)
- [Programming Explanations](#programming-explanations)
- [Proposal link for more details and sample UI](#proposal)
- [Workflow](#workflow)
- [Fixes](#fixes)
- [Future Features](#features)

--------------------------

- <a id="acknowledgements">Acknowledgements</a>
   - pics from twitter
   -
   -

- <a id="maintain">Maintainers</a> - Steve Hanlon
- <a id="lic">License</a> - None


### Whack an Autocrat
This project is based on _Whack-a-Mole_ but with a more nefarious antagonist: the autocrat.


#### Scripts and Libraries
- JavaScript ES2015
- jQuery 3.3.1
- CSS Grid and Flexbox

### Programming Explanations

1. **Create content and game board** -
  **The content** is stored in arrays as string values which represent the JPG file name.

  `const autocrats_club = ["putin", "duterte", "erdogan", "trump", "maduro", "mussolini", "mugabe", "stalin", "kim"];`

  The game board of black holes is made by creating an HTML block template of a single hole then repeating that block template with a loop, appending each block to the `gameboard`.

  So that each `<div>` can be identified for the autocrat to peek his selfish little head through, I've
  given the `counter` a dual role of counting and providing an `id` for each black hole/"picture frame" `<figure id=${counter} class='pic-frame'>`.

  ```
  $('#gameboard').append(`<div class='hole'><figure id=${counter} class='pic-frame'></figure></div>`);
  ```

  Here it is tucked inside a `while` loop in a function expression.
  ```
  const buildBoard = () => {
    const spaces = 15;
    let counter = 0;
    while (counter < spaces) {
      $('#gameboard').append(`<div class='hole'><figure id=${counter} class='pic-frame'></figure></div>`);
      counter += 1;
    }
  }
  ```

2. **Randomizer**
There are a few situations where a randomizer could come in handy.  Here's a function that I can reuse by just providing a max number as the parameter `totalChoices`.

```
const randomNumber = (totalChoices) => Math.floor(Math.random() * totalChoices)
```


3. **Handle the Pictures**
The autocrat picture file names are stored in an array.  This function expression requires an array as a parameter.

I use the `randomNumber` function to pick a random number  between 0 and 15 then use that number to select the black hole or `<figure>` with that same number as its `id`. An autocrat's HTML image source link is added as a child to that `<figure>`; resulting in the autocrat making an appearance on the world DOM-ination stage!

```$(`#${pickHole}`).html(`<img src=./images/${picAutocrat}.jpg class="picture" />`);```

"But which autocrat?" you ask with bated breath.  Again the `randomNumber` function picks a random number between 0 and the number of autocrats in the array `autocrats_club`.

`let picAutocrat = arr[randomNumber(arr.length)];`

The next step is make the autocrat's picture disappear.  I used jQuery's `.detach` method which is ideal if elements are often appearing and disappearing from the DOM.  I made sure to give each of these `<figure>` elements a class of `picture` when making the HTML block template.

```.html(`<img src=./images/${autocrat_pic}.jpg class="picture" />`);```

I select class `picture` then detach it.

```
const disappear = () => {
  $('.picture').detach();
  picHandler(autocrats_club);
}
```

I tucked this into a function `disappear` because I want `setTimeout` to call this function after a given time.   I also discovered I could make this be recursive by having `disappear` call the `picHandler` function each time which is why I included it after the `.detach` expression.

`picHandler` goes through the same sequence:
 - accept autocrats_club array as input
 - pic random number to select black hole
 - pic random number to select the autocrat
 - invoke `setTimeout` which...
 - invokes `disappear` which...
 - invokes `picHandler`

Here's the whole function:

```
const picHandler = (arr) => {
  let pickHole = randomNumber(15);
  let picAutocrat = arr[randomNumber(arr.length)];

  // Add picture to the hole picked by randomNumber(15)
  $(`#${pickHole}`).html(`<img src=./images/${picAutocrat}.jpg class="picture" />`);

  // Detach picture from the hole
  const disappear = () => {
    $('.picture').detach();
    picHandler(autocrats_club);
  }

  // Set random delay for detaching the picture
  const randomTime = Math.floor(Math.random() * 1500);
  setTimeout(disappear, randomTime);
}
```

3. **Next part**

```
```




#### <a id="proposal">Project Proposal</a>

For more details and sample UI, please click on <a href="#">Whack-an-Autocrat Proposal</a>.



#### <a id="workflow">Workflow</a>

  - Start Read Me and Proposal
  - Make HTML block sample for black hole
  - Make `picHandler` function to get picture to show in the black hole
  - Make `buildBoard` function to build game board of black holes using HTML code block
  - Make `randomNumber` function to get picture to randomly show in one of the 15 black holes
  - Adjust `picHandler` function with setTimeout to disappear the picture
  - Add array of autocrat pictures
  - Adjust `picHandler` function to accept array of pictures as input
  - Update README.md



#### <a id="fixes">Fixes</a>



#### <a id="features">Future feature</a>


[back to the top](#table-of-contents)
