/*3D效果*/
$('#logo').on('mousemove', function(e){
console.log(0)
  var offset = $('#logo').offset()
  
  var x = e.pageX - offset.left
  var y = e.pageY - offset.top
  
  
  var centerX = $('#logo').outerWidth() /2
  var centerY = $('#logo').outerHeight() /2 
  
  var deltaX = x - centerX
  var deltaY = y - centerY
  
  var percentX = deltaX / centerX
  var percentY = deltaY / centerY
  
  var deg = 10
  
  
  
  $('#info').css({
    transform: 'rotateX('+deg*-percentY + 'deg)'+
    ' rotateY('+deg*percentX+'deg)'
  })
})

$('#logo').on('mouseleave', function(){
    console.log(11)
  $('#info').css({
    transform: ''
  })
})