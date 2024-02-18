# Projects Related to Dom

## Project link

[click me](https://github.com/sumitkumarsharm/Learn-Javascript/tree/main)


### Solution 
#### Project 1 (Colour changer)
##### Javascript
``` javascript
const buttons = document.querySelectorAll('.button')
const body  = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.id === 'KaiGreen'){
            body.style.backgroundColor = 'gray' // we can write this way     
            body.style.color = 'Lime'
        }
        if(e.target.id === 'white'){
                body.style.backgroundColor = 'white'
                body.style.color = '#FF5733'
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
            body.style.color = 'white'
        }
        if(e.target.id === 'Yellow'){
            body.style.backgroundColor = 'yellow'
            body.style.color = 'black'
        }
    })
})


```
##### HTML
``` html 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>color changer</title>
    <style>
        html {
            margin: 0;
        }

        span {
            display: block;
        }

        #canvas {
            margin: 100px auto 100px;
            width: 80%;
            text-align: center;
        }

        .button {
            width: 100px;
            height: 100px;
            border: solid black 2px;
            display: inline-block;
        }

        #KaiGreen {
            background: grey;
        }

        #white {
            background: white;
        }

        #blue {
            background: blue;
        }

        #Yellow {
            background: yellow;
        }
    </style>
</head>

<body>
    <div id="canvas">
        <h1>Color Scheme Switcher</h1>
        <span class="button" id="KaiGreen"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="Yellow"></span>
        <h2>
            to clicking on the colors above
            <span> to change the background color of this page!</span>
        </h2>
    </div>
    <script src="script.js"></script>
</body>

</html>


```

