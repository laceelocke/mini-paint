$(document).ready(function(){


    var h = window.innerHeight;
    var w = window.innerWidth;
    var squares = Math.round((h*w)/2250);

    $('#grid').html(function(){
        for (var i = 0; i < squares ; i++) {
        $('#grid').append('<div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div>');
        }
    });

    $('.box').on('click', function() {
    $(this).addClass(selectedColor);
  });

  $('.box').on('dblclick', function() {
    $(this).attr('class', 'box');
  });

  var selectedColor = 'box';
  $('a').on('click', function(){
    selectedColor = $(this).attr('id');
    console.log(selectedColor);
  });

  $('#reset').on('click', function(){
    $('.box').attr('class', 'box');
  });

  });
