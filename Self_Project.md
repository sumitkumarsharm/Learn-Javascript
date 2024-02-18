# Here I make some project from myself
[click me](https://github.com/sumitkumarsharm/Learn-Javascript/edit/main)

## Project 1.

#### Javascript
```javascript
<script>
        const id = document.querySelector('.parent')
        console.log(id);
        const body = document.querySelector('body')
        // console.log(body)
        const newid = Array.from(id)
        // console.log(newid);
        id.addEventListener('click', function (event) {
            if (event.target.id === 'radio') {
                body.style.backgroundColor = 'black'
                body.style.color = 'white'
            }
            if (event.target.id === 'radioe') {
                body.style.backgroundColor = 'white';
                body.style.color = 'black';
            }
        })
    </script>
```
#### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dark mood</title>
    
</head>

<body>
    <nav class="nav-link">
        <div class="parent">
            <label for="radio">Night mood</label>
            <input type="radio" name="radio" id="radio" class="btn">
            <label for="radioe">ClickMe</label>
            <input type="radio" name="radio" id="radioe" class="btns">
        </div>
    </nav>

    <main>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ea quaerat hic amet fugiat reiciendis
            enim, dolores voluptas quos nihil, sapiente assumenda? Quis, soluta praesentium. Excepturi ut iste
            cupiditate doloremque animi facere! Iste quaerat deserunt, repudiandae in commodi ipsa ipsum mollitia iusto
            tempora maiores, amet iure aliquid? Laborum sint, possimus officia ullam, sit harum minima at iste ipsam
            unde doloribus deserunt odit soluta minus tempora maxime, veniam rem deleniti quo recusandae vero suscipit.
            Minima eligendi facere dolorum earum mollitia quis asperiores commodi enim illum, aut provident vel,
            assumenda delectus incidunt ratione ipsum? Odit veniam, voluptate qui laudantium ipsa doloremque quae! Vitae
            cupiditate temporibus sint vero repellat sit facere, voluptatibus rerum magnam assumenda quibusdam
            molestiae, perferendis expedita labore, aut officiis porro esse dicta animi voluptas voluptates. Numquam
            suscipit soluta dolores nisi, dignissimos perferendis illum ad at modi velit cupiditate nihil corrupti quo,
            culpa sint vero? Eius nobis deserunt, ex corrupti cumque id reprehenderit nisi quae temporibus eligendi eos
            aliquid cupiditate, harum est consequatur assumenda eum ratione sint soluta ea? Reiciendis, totam
            cupiditate! Quis rerum unde fugiat alias quos, fugit quaerat ducimus repellat! Voluptates, laudantium quos,
            possimus, nemo facere maiores minima perspiciatis ad voluptatum eius beatae! Accusantium consequatur
            dignissimos iusto iure dicta!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ea quaerat hic amet fugiat reiciendis
            enim, dolores voluptas quos nihil, sapiente assumenda? Quis, soluta praesentium. Excepturi ut iste
            cupiditate doloremque animi facere! Iste quaerat deserunt, repudiandae in commodi ipsa ipsum mollitia iusto
            tempora maiores, amet iure aliquid? Laborum sint, possimus officia ullam, sit harum minima at iste ipsam
            unde doloribus deserunt odit soluta minus tempora maxime, veniam rem deleniti quo recusandae vero suscipit.
            Minima eligendi facere dolorum earum mollitia quis asperiores commodi enim illum, aut provident vel,
            assumenda delectus incidunt ratione ipsum? Odit veniam, voluptate qui laudantium ipsa doloremque quae! Vitae
            cupiditate temporibus sint vero repellat sit facere, voluptatibus rerum magnam assumenda quibusdam
            molestiae, perferendis expedita labore, aut officiis porro esse dicta animi voluptas voluptates. Numquam
            suscipit soluta dolores nisi, dignissimos perferendis illum ad at modi velit cupiditate nihil corrupti quo,
            culpa sint vero? Eius nobis deserunt, ex corrupti cumque id reprehenderit nisi quae temporibus eligendi eos
            aliquid cupiditate, harum est consequatur assumenda eum ratione sint soluta ea? Reiciendis, totam
            cupiditate! Quis rerum unde fugiat alias quos, fugit quaerat ducimus repellat! Voluptates, laudantium quos,
            possimus, nemo facere maiores minima perspiciatis ad voluptatum eius beatae! Accusantium consequatur
            dignissimos iusto iure dicta!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ea quaerat hic amet fugiat reiciendis
            enim, dolores voluptas quos nihil, sapiente assumenda? Quis, soluta praesentium. Excepturi ut iste
            cupiditate doloremque animi facere! Iste quaerat deserunt, repudiandae in commodi ipsa ipsum mollitia iusto
            tempora maiores, amet iure aliquid? Laborum sint, possimus officia ullam, sit harum minima at iste ipsam
            unde doloribus deserunt odit soluta minus tempora maxime, veniam rem deleniti quo recusandae vero suscipit.
            Minima eligendi facere dolorum earum mollitia quis asperiores commodi enim illum, aut provident vel,
            assumenda delectus incidunt ratione ipsum? Odit veniam, voluptate qui laudantium ipsa doloremque quae! Vitae
            cupiditate temporibus sint vero repellat sit facere, voluptatibus rerum magnam assumenda quibusdam
            molestiae, perferendis expedita labore, aut officiis porro esse dicta animi voluptas voluptates. Numquam
            suscipit soluta dolores nisi, dignissimos perferendis illum ad at modi velit cupiditate nihil corrupti quo,
            culpa sint vero? Eius nobis deserunt, ex corrupti cumque id reprehenderit nisi quae temporibus eligendi eos
            aliquid cupiditate, harum est consequatur assumenda eum ratione sint soluta ea? Reiciendis, totam
            cupiditate! Quis rerum unde fugiat alias quos, fugit quaerat ducimus repellat! Voluptates, laudantium quos,
            possimus, nemo facere maiores minima perspiciatis ad voluptatum eius beatae! Accusantium consequatur
            dignissimos iusto iure dicta!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ea quaerat hic amet fugiat reiciendis
            enim, dolores voluptas quos nihil, sapiente assumenda? Quis, soluta praesentium. Excepturi ut iste
            cupiditate doloremque animi facere! Iste quaerat deserunt, repudiandae in commodi ipsa ipsum mollitia iusto
            tempora maiores, amet iure aliquid? Laborum sint, possimus officia ullam, sit harum minima at iste ipsam
            unde doloribus deserunt odit soluta minus tempora maxime, veniam rem deleniti quo recusandae vero suscipit.
            Minima eligendi facere dolorum earum mollitia quis asperiores commodi enim illum, aut provident vel,
            assumenda delectus incidunt ratione ipsum? Odit veniam, voluptate qui laudantium ipsa doloremque quae! Vitae
            cupiditate temporibus sint vero repellat sit facere, voluptatibus rerum magnam assumenda quibusdam
            molestiae, perferendis expedita labore, aut officiis porro esse dicta animi voluptas voluptates. Numquam
            suscipit soluta dolores nisi, dignissimos perferendis illum ad at modi velit cupiditate nihil corrupti quo,
            culpa sint vero? Eius nobis deserunt, ex corrupti cumque id reprehenderit nisi quae temporibus eligendi eos
            aliquid cupiditate, harum est consequatur assumenda eum ratione sint soluta ea? Reiciendis, totam
            cupiditate! Quis rerum unde fugiat alias quos, fugit quaerat ducimus repellat! Voluptates, laudantium quos,
            possimus, nemo facere maiores minima perspiciatis ad voluptatum eius beatae! Accusantium consequatur
            dignissimos iusto iure dicta!</p>
    </main>
    
</body>

</html>```
#### CSS
```css
<style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .nav-link {
            height: 50px;
            width: 100%;
            background: linear-gradient(to left, rgb(0, 0, 202), rgb(131, 154, 246));
            position: fixed;
        }

        p {
            font-size: 1.5rem;
        }
    </style>
```
