# Web Development 1 {Abdelsalam && Wajdi}

## A -1

```HTML
<!-- A - 1 -->
<img/>
<!--/ A - 1 -->
```
```javascript
$('img').attr('src', 'https://www.scmusic.com.au/content/uploads/2015/04/YAMAHA-fg650-acoustic-guitar-best-value-south-coast-music-11.jpg');
```
jQuery selects the image tag then sets the attribute source to the link.


## A - 2

```HTML
<!-- A - 2 -->
<p id="output">HEY</p>
<input id="color"/>
<button id="go">Click Me</button>
<!--/ A - 2 -->
```
```javascript
$('button#go').on('click', function(){ 
	$('p#output').text( $('input#color').val() ).css('color', 'red');
});
```

When the button ```#go``` gets clicked, it take the value of ```input#color``` field and place it on the ```p#output``` element and then changes the color to red.

## A - 3

####  I want to get an alert every time someone clicks on a button. But I don't know how! Show me how below!?

```javascript
$('body').on('click', 'button', function(){
	alert('Clicked!');
});
```

We use jQuery to listen to the button click events on the page and we alert a message for the user right after the click. 
Using the element name `<button></button>` as a parameter will make jQuery listen to all elements of that type.

## A - 4
#### What does .append() do?
``` javascript 
// A.Insert content to the end of an element.
```
## A - 5
```javascript
	$('#secret').hide();
```
To hide an element using jQuery we use `.hide()` function.

## A - 6
```javascript
	$(body).css(background-color, 'green');
	// A.body is not in a string
	// C.the background-color is not in a string
```

## A - 7
```javascript
	$('body').css('background', 'red');
```
In order to change a CSS property using jQuery we use `.css()` function in which takes a property and a value on a form of string. 

## A - 8

In order to add another list item to the ordered list `<ol></ol>` we use ``.append()`` function. This function accepts a single parameter in form of string and place it at the end of the selected element. 

```javascript
	var listItem4 = '<li>Here is thing four.</li>';
	$('ol').append(listItem4);
```