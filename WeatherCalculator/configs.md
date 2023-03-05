<style>
    .color-palette{
        width:200px;
        height:30px;
        text-align:center;
        padding-top:10px;
        color:black;
        font-weight:bold;
        margin-top:10px;
    }

    p{
        margin-top:20px;
    }
</style>

<p>Center vertically and horizontally</p>


    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);


<p>Color Palette</p>

<div class="color-palette" style="background-color:#E96479">Red : #E96479
</div>

<div class="color-palette" style="background-color:#F5E9CF">Beige : #F5E9CF
</div>

<div class="color-palette" style="background-color:#7DB9B6">Green : #7DB9B6
</div>

<p>Box Shadow</p>


    -webkit-box-shadow: 5px 5px 5px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 5px 5px -4px rgba(0,0,0,0.75);
    box-shadow: 5px 5px 5px -4px rgba(0,0,0,0.75);


<p>Font Family</p>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet">
