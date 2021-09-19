$(function(){


/*$('#top').on('click', function(){
	alert('hello Sarkis')
})*/

let x = 0;
let y = 0;
let position = 0;
setInterval(function(){
	$('#top').on('click', function(){
		if(x == 100 || y == 20){
			clearInterval()
		}else{
			$('.ball').offset(function(i, val){
				return {top:val.top - 1}
			})
		}
	})

		$('#down').on('click', function(){
		if(x == 100 || y == 20){
			clearInterval()
		}else{
			$('.ball').offset(function(i, val){
				return {top:val.top + 1}
			})
		}
	})

		$('#right').on('click', function(){
		if(x == 100 || y == 20){
			clearInterval()
		}else{
			$('.ball').offset(function(i, val){
				return {left:val.left + 1}
			})
		}
	})

		$('#left').on('click', function(){
		if(x == 100 || y == 20){
			clearInterval()
		}else{
			$('.ball').offset(function(i, val){
				return {left:val.left - 1}
			})
		}
	})

}, 1000);

//ball2

$('#top2').on('click', function(){
	$('.ball2').animate({
		top: '80px'
	},1000);
})

$('#down2').on('click', function(){
	$('.ball2').animate({
		top: '200px'
	},1000);
})

$('#right2').on('click', function(){
	$('.ball2').animate({
		left: '400px'
	},1000)
})

$('#left2').on('click', function(){
	$('.ball2').animate({
		left: '50px'
	},1000);
})

$('#around').on('click', function(){
	let ball = $('.ball2');
	ball.animate({
		left: 300
	});
	ball.animate({
		top: 200
	});
	ball.animate({
		left: 0,
		top: 200
	});
	ball.animate({
		left: 0,
		top: 0
	});









})






















})












/*var dvAnimationArea = document.querySelector("#animationArea");

//create the 'ball' for this animation
var ball = document.createElement('div');
ball.classList.add('pbox');
dvAnimationArea.appendChild(ball);

//position for our 'ball'
var x = 0;
var y = 0;

//start the animation interval
setInterval(update, 30);
function update() {
  ball.style.top = y + "px";
  ball.style.left = x + "px";

  x++;
  y++;
///}*/

