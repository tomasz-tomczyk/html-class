# Class outline

## Goals

- [x] Learn about anchor (#)
- [x] Learn to open/close tabs using Javascript
- [ ] [Challenge] Create a card providers section with 6 companies

## Steps

1. Add `tab` class to tab `li` elements
1. Update `tab` `href` attribute to `#tab-NUMBER`. (where NUMBER in [1,2,3,4])
```HTML
  <li class="tab"><a href="#tab-content-2">Tab 2</a></li>
```
1. Add id attribute to `tab-content-NUMBER` elements `id="tab-NUMBER"` (where NUMBER in [1,2,3,4])
```HTML
  <div id="tab-content-2" class="tab-content">Copy 2</div>
```
1. Open the browser console (right click > inspect element > console) and run next commands.
1. Add `tab-active` class to `tab-2` element and remove `tab-active` class from `tab-1` element
```Javascript
  document.querySelectorAll('.tab') // Get list of elements that have CLASS = tab
  document.querySelectorAll('.tab')[0] // Get the first element on that list. Remember that ARRAYS start with index 0 and not 1
  document.querySelectorAll('.tab')[0].classList // Get the list of classes from first element

  document.querySelectorAll('.tab')[0].classList.remove('tab-active'); // Remove from tab-1
  document.querySelectorAll('.tab')[1].classList.add('tab-active'); // Add to tab-2
```
1. Add `tab-content-active` class to `tab-content-2` element and remove `tab-content-active` class from `tab-content-1` element
```Javascript
document.querySelectorAll('.tab-content')[0].classList.remove('tab-content-active'); // Remove from tab-content-1
document.querySelectorAll('.tab-content')[1].classList.add('tab-content-active'); // Add to tab-content-2
```
1. Add an `event listener` to `tab-2` element:
```Javascript
  function myFunction(mouseEvent) {
    console.log(mouseEvent);  
  } // This function will print content of mouseEvent to the console

  function myFunction2(mouseEvent) {
    console.log(mouseEvent.currentTarget);
  } // This function will print the current element that triggered this click event (tab-2)

  function myFunction3(mouseEvent) {
    document.querySelectorAll('.tab')[0].classList.remove('tab-active');
    document.querySelectorAll('.tab')[1].classList.add('tab-active');
  } // This function will add tab-active class to tab-2 and remove tab-active class form tab-1

  document.querySelectorAll('.tab')[1].addEventListener('click', myFunction3);
```

**Useful links**
- [Get list of elements (querySelectorAll)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [List element classes (classList)](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [Listen to tab click event (addEventListener)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## Other tools & utilities
- [Image placeholder](http://via.placeholder.com/100x100)
- [Screenshot](https://s3-eu-west-1.amazonaws.com/money-data/homepage.png)
- [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN Beginners guide](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
- [MDN HTML tutorials](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Javascript tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Dummy text generator](https://loremipsumgenerator.com/generator/?n=2&t=p)
