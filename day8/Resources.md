# Class outline

## Goals

- [x] Learn about jQuery ($)
- [x] Learn to add jQuery and other JS files to the project
- [x] Learn how to switch tab using jQuery

## Steps

1. Add jQuery to your page
 * Download jQuery
    * Go to jquery.com > Download
    * Download the wanted version *(hint: always prefer the latest stable version, better if compressed or minified)*
    * Move the file in the project directory
    * Include the script in the `<head>` of your html

      ```
      <script type="text/javascript" src="jquery-3.2.1.min.js"></script>
      ```
  + CDN *(Content Delivery Network)*
    + Google for jQuery CDN or go to code.jquery.com
    + Chose the wanted version and click on the link (it should open the content in the tab)
    *hint: never use the "latest" version since it can change often and give unwanted surprises, always pick a specific vesrion (better the latest stable)*
    + Copy the url and nclude the script in the `<head>`` of your html (using the absolute path)

      ```
      <script type="text/javascript" src="jquery-3.2.1.min.js"></script>
      ```

1. Create a new js file called `cards`
1. Add `cards.js` to your page *(after jQuery script)*
```
<script type="text/javascript" src="cards.js"></script>
```

1. Delete inline script from `cards.html`
1. Create `document ready` block in the js file
```jQuery
$(document).ready(function() {});
```

1. Create `hideActiveTab` function
```jQuery
$(document).ready(function() {
    function hideActiveTab() {
      $(".tab").removeClass("tab-active");
      $(".tab-content").removeClass("tab-content-active");
    }
});
```

1. Create `click` event on `.tab` elements and call the `hideActiveTab` function
```jQuery
$(document).ready(function() {
    function hideActiveTab() {
      $(".tab").removeClass("tab-active");
      $(".tab-content").removeClass("tab-content-active");
    }

    $(".tab").click(function() {
      hideActiveTab();
    });
});
```

1. Add `data` attribute to the `.tab` elements
```
<ul>
    <li class="tab tab-active" data-tab="1"><a href="#tab-content-1">Tab 1</a></head>li>
    <li class="tab" data-tab="2"><a href="#tab-content-2">Tab 2</a></li>
    <li class="tab" data-tab="3"><a href="#tab-content-3">Tab 3</a></li>
    <li class="tab" data-tab="4"><a href="#tab-content-4">Tab 4</a></li>
</ul>
```

1. Identify the clicked tab
```jQuery
$(".tab").click(function() {
      var id = $(this).data("tab");
      hideActiveTab();
    });
```

1. Create `showTab` function passing the identifier argument and call it into the click event
```jQuery
$(document).ready(function() {
    function hideActiveTab() {
      $(".tab").removeClass("tab-active");
      $(".tab-content").removeClass("tab-content-active");
    }

    function showTab(id) {
      $("#tab-content-" + id).addClass("tab-content-active");
      $(".tab[data-tab='" + id + "']").addClass("tab-active");
    }

    $(".tab").click(function() {
      var id = $(this).data("tab");
      hideActiveTab();
      showTab(id);
    });
});
```

**Useful links**
- [jQuery API](http://api.jquery.com/)
- [jQuery Download](http://jquery.com/download/)
- [jQuery CDN](https://code.jquery.com/)

## Other tools & utilities
- [Image placeholder](http://via.placeholder.com/100x100)
- [Screenshot](https://s3-eu-west-1.amazonaws.com/money-data/homepage.png)
- [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN Beginners guide](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
- [MDN HTML tutorials](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Javascript tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Dummy text generator](https://loremipsumgenerator.com/generator/?n=2&t=p)
