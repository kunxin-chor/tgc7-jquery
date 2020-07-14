# tgc7-jquery

## jQuery to change style

1. Select the element

2. Then we use the `css` function to change the style

```
$('#whatever').css(<style property>, <value>)
```

Example (select the id `title` and set its `font-family` to 'Verdana)
```
$("#title").css('font-family', 'Verdana')
```

## jQuery to change multiple style proeprties (aka rules) at one go:
```
$(".special").css({
    'background-color': 'yellow',
    'font-style':'italic'
})
```
## Query the existing value of a css property
```
$('.special').css('background-color')
```

# jQuery Ready
* The function inside jQuery ready() only happens when all the elements have been loaded
* If for some reasons, a JavaScript file is loaded **after*** the web page is loaded, it
will also work
* For all intents and purpose, it can be replaced by the event `DOMContentLoaded`

## jQuery Events
Listen for the `click` event 
```
$('#reskin-btn').click(function(){
        $('.inner-dialogue').css('background-color', 'yellow');
        $('li').css('font-family', 'Verdana');
})
```

## Creating new elements and making them interactive
```
        $('#task-list').append(
            $(`<li>${taskName}</li>`).click(function(){
                alert(taskName);
            })
        )
```

## Attaching elements with interactive children elements
```
let newTask = $(`<li>${taskName}
                <button>Delete</button>
                </li>)`
);
newTask.find('button').click(function(){
    newTask.remove();
});

$('#task-list').append(newTask);
```        

# JavaScript Binding
The `this` variable is contextual.
In a function call, it will refer to **whichever object calls the function**.
For simplicty sake, when used in the callback function given in `addEventListener` or `$(...).click`, the `this` will refer to
the HTML element that causes the event.

```
$(function(){
    $('#load-btn').click(function(){
         console.log(this);
        axios.get('data.json').then(function(response){
            console.log(response.data);
            // vanila js: this.disabled = true;
            console.log(this);
               $(this).attr('disabled', true);
        })
    })
})
```
In the code above, the `this` inside the promise for axios
is not the same as the `this` in the function for the `click`.
That is because axios is the one that calls its promise function,
so the `this` will be referring to `axios` (or something else), not
the button to

## Solving the binding problem

1. Do not rely on `this` for the promise. Use our own variable.
Cache the `self` variable in our own variable method.
```
$(function(){
    $('#load-btn').click(function(){
        // store what ever this is referring to inside a variable
        let self = this;
        axios.get('data.json').then(function(response){
            console.log(response.data);
            // vanila js: self.disabled = true;
               $(self).attr('disabled', true);
        })
    })
})
```

2. Use arrow functions so that `this` will always refer to the `this`
that the function was written in
```
        $('#load-btn').click(function(){
        // the promise for axios is an arrow function,
        // so that the this inside it will be the same
        // as the this outside of it
        console.log(this);
        axios.get('data.json').then((response)=>{
            console.log(this);
            console.log(response.data);
            // vanila js: this.disabled = true;
               $(this).attr('disabled', true);
        })
    })
```

3. Using the `bind` function to set the context

# Extracting out values from form inputs

## Textfields and text areas
Use the `val` function on the elements after your select them with jQuery
```
let productName = $('#product-name').val();
let productDesc = $('#product-description').val();
console.log("Product name=", productName);
console.log("Product description=", productDesc);
```

## Radio Buttons
```
let productType = $(".product-type:checked").val();
```

## Checkboxes
```
let allProperties = [];
let productProperties = $(".product-properties:checked");
productProperties.each(function(index, property){
    allProperties.push(property.value)
})
  ```

## Select
```
let productMarket = $("#market").val();
```
