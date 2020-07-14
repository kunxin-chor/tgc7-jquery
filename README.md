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