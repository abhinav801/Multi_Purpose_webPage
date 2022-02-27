console.log("hello world")
// skin select

$('#yellow-skin').click(function(){
    var skin_tag=document.getElementById('skin');
    skin_tag.src='./assets/skin/yellow.png';
})
$('#green-skin').click(function(){
    var skin_tag=document.getElementById('skin');
    skin_tag.src='./assets/skin/green.png';
})
$('#red-skin').click(function(){
    var skin_tag=document.getElementById('skin');
    skin_tag.src='./assets/skin/red.png';
})

// show eye card
$('#show-eyes-card').click(function(){
    $('#select-skin-card').css('display','none');
    $('#select-eyes-card').css('display','block')
})

// eye select

$('#eye-normal').click(function(){
    var skin_tag=document.getElementById('eyes');
    skin_tag.src='./assets/eyes/normal.png';
})
$('#eye-closed').click(function(){
    var skin_tag=document.getElementById('eyes');
    skin_tag.src='./assets/eyes/closed.png';
})
$('#eye-long').click(function(){
    var skin_tag=document.getElementById('eyes');
    skin_tag.src='./assets/eyes/long.png';
})
$('#eye-laughing').click(function(){
    var skin_tag=document.getElementById('eyes');
    skin_tag.src='./assets/eyes/laughing.png';
})
$('#eye-rolling').click(function(){
    var skin_tag=document.getElementById('eyes');
    skin_tag.src='./assets/eyes/rolling.png';
})
$('#eye-winking').click(function(){
    var skin_tag=document.getElementById('eyes');
    skin_tag.src='./assets/eyes/winking.png';
})
// prev and next icon

$('#show-skin-card').click(function(){
    $('#select-eyes-card').css('display','none')
    $('#select-skin-card').css('display','block');
})
$('#show-mouth-card').click(function(){
    $('#select-eyes-card').css('display','none')
    $('#select-mouth-card').css('display','block');
})

// mouth select

$('#mouth-open').click(function(){
    var skin_tag=document.getElementById('mouth');
    skin_tag.src='./assets/mouth/open.png';
})
$('#mouth-smiling').click(function(){
    var skin_tag=document.getElementById('mouth');
    skin_tag.src='./assets/mouth/smiling.png';
})
$('#mouth-straight').click(function(){
    var skin_tag=document.getElementById('mouth');
    skin_tag.src='./assets/mouth/straight.png';
})
$('#mouth-sad').click(function(){
    var skin_tag=document.getElementById('mouth');
    skin_tag.src='./assets/mouth/sad.png';
})
$('#mouth-teeth').click(function(){
    var skin_tag=document.getElementById('mouth');
    skin_tag.src='./assets/mouth/teeth.png';
})

// last to mid

$('#last-mid').click(function(){
    $('#select-mouth-card').css('display','none');
    $('#select-eyes-card').css('display','block')
})