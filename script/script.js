$( document ).ready(function() { 
  $('#button').mouseenter(function(){
    $(this).addClass('glow');
  });
  $('#button').mouseleave(function(){
    $(this).removeClass('glow');
  });
  $('#button').click(function(){
    $(this).remove();
    $('.backCard').show();  
  });
  $('.backCard').mouseenter(function(){
    $(this).addClass('glow');
  });
  $('.backCard').mouseleave(function(){
    $(this).removeClass('glow')
  });


  var cards= $('.backCard')
  var images= [
    "./img/RGBCard.png", "./img/MonkeyCard.png", 
    "./img/RobotCard.png", "./img/RainCard.png",
    "./img/AttrCard.png", "./img/OppsCard.png" 
    ]

  function ranAssign(){
    var classImg= [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    for(var i = 0; i < cards.length; i++){
      var ranIndex = Math.floor(Math.random()*classImg.length)
      var chosenIndex = classImg[ranIndex]
      classImg.splice(ranIndex,1)
      $(cards[i]).find("img").attr("src", images[chosenIndex])
    } 
  }

  ranAssign();

  var openImg = 0;
  var imgA
  //change addition
  var imgAID
  //end
  //WIN funct
  function checkWin(){
    if($('.close').length == 0){
      $('.backCard').css('background-color', 'transparent')
      $('img').effect('puff', 1000, function(){
        //lots of changes
        $('.container').hide(function(){
          var winsound= document.getElementById("youWinAudio");
          $('.youWin').css('visibility', 'visible');
          winsound.play();
          var win = $('.youWin')
          win.animate({top: '-=10'}, 'slow');	
          win.animate({top: '+=10'}, 'slow');	
          win.animate({top: '-=10'}, 'slow');	
          win.animate({top: '+=10'}, 'slow');	
          win.animate({top: '-=10'}, 'slow');	
          win.animate({top: '+=10'}, 'slow', function (){
            resetGame();
            winsound.pause();
            winsound.currentTime=0;
          }); /*animate with function*/	
        });/*hide with function*/
      });/*puff effect w/function*/
    }/*If statement*/
  } /*End function*/
  //GAME
  $('.backCard').click(function(){
   
    
    if($(this).attr('id') == imgAID){
      return
    }
    
    console.log(openImg)
    $(this).find("img").show();
    openImg += 1;

    if(openImg == 2){
      openImg = 0;
      imgAID = undefined
      if($(this).find("img").attr("src") == imgA.attr("src")){
        $(imgA).parent("div").removeClass("close")
        $(this).removeClass("close");

        //win call
        checkWin ();
        //end of win

        $(this).find("img").show();
        $(imgA).show();
        var correctsound= document.getElementById("correctAudio");
          correctsound.play();
        return           
      }else{
        $(this).find("img").show();
        setTimeout(function(){
          $(".close img").hide();
          
        }, 520);
      }
    }else{
      $(this).find("img").show();
      imgA = $(this).find("img")
      //change addition
      imgAID = $(this).attr('id')
      //end
     
    }
     //audioClick
    var clicksound=document.getElementById("clickAudio");
    clicksound.play();
  });
  var resetGame = function(){
    $('.backCard').addClass('close');
    $('.backCard').css('background-color', '#FC8181')
    $('.container').show();
    $('.backCard img').hide();
    ranAssign();
    imgA
    imgAID
    openImg=0
    $('.youWin').hide();
  }
});
