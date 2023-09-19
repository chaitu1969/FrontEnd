var out = document.getElementById('btn');

btn.addEventListener('mouseover', function(){
	console.log('MouseOver');
});

btn.addEventListener('keydown',function(){
	console.log(event.keyCode);
});

var box = document.getElementById('div1');

var clickcount = document.getElementById('innerText');

var count = 0;

box.addEventListener('click', function(){
	count++;
	console.log(count);
	clickcount.innerText = count+" "
})