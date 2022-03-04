$(document).ready(function(){

  $(".header>ul>li").on("mouseenter",function(){
    $(this).css({"backgroundColor":"rgb(13, 243, 70)"});
  });
  $(".header>ul>li").on("mouseleave",function(){
    $(this).css({"backgroundColor":"inherit"});
  }); 

  
  $(window).on("scroll",function(){
    if($(this).scrollTop()>=50){
      $(".links").hide();
      $(".header").css({"position":"fixed"});
    }
    else if($(this).scrollTop()<=50){
      $(".links").show();
      $(".header").css({"position":"relative"});
    }
  });


  $(".fix").on("click",function(){
    $(window).scrollTop(0);
   });

$(".slider3 .box>div:nth-of-type(1)>div").on("mouseenter",function(){
  $(this).css({"borderColor":"rgb(98, 184, 98)"});
  $(this).find("div").css({"backgroundColor":"rgb(98, 184, 98)"});
  $(this).find("i").css({"color":"#fff"});
});
$(".slider3 .box>div:nth-of-type(1)>div").on("mouseleave",function(){
  $(this).css({"borderColor":"inherit"});
  $(this).find("div").css({"backgroundColor":"inherit"});
  $(this).find("i").css({"color":"rgb(6, 61, 105"});
}); 

  


  $(".photos>div").on("mouseenter",function(){
    $(this).find("div:nth-of-type(1)").show(100);
    $(this).find("h2").animate({"top":"80px"},500);
    $(this).find("div:nth-of-type(2)").animate({"bottom":"125px"},500,function(){
    $(this).next().show(500).css({"transform":"scaleX(260)"});
    });
    $(this).find("button").show(100);
  });

  $(".photos>div").on("mouseleave",function(){
    $(this).find("div:nth-of-type(1)").hide(100);
    $(this).find("h2").animate({"top":"-50px"},500);
    $(this).find("div:nth-of-type(2)").animate({"bottom":"-50px"},500,function(){
    $(this).next().css({"transform":"scaleX(0)"}).hide(500);
    });
    $(this).find("button").fadeOut(1000);
  });



  $(".doctor>div:nth-of-type(2)>div").on("mouseenter",function(){
    $(this).find("div:nth-of-type(1)").animate({"bottom":"0px"},100);
    $(this).find("div:nth-of-type(2)").animate({"bottom":"0px"},300);
  });
  $(".doctor>div:nth-of-type(2)>div").on("mouseleave",function(){
    $(this).find("div:nth-of-type(1)").animate({"bottom":"-100%"},50);
    $(this).find("div:nth-of-type(2)").animate({"bottom":"-100%"},100);
  });



  $(".blog>:last-child>div").on("mouseenter",function(){
    $(this).find("div:first-child>img").css({"transform":"translateZ(6px) scale(1.5)"})
  });

  $(".blog>:last-child>div").on("mouseleave",function(){
    $(this).find("div:first-child>img").css({"transform":"translateZ(0px) scale(1)"})
  });


  $(".contact-us>:last-child>form input,.contact-us>:last-child>form textarea").on("focus",function(){
    $(this).css({"color":"#fff"});
  });

  $(".contact-us>:last-child>form input,.contact-us>:last-child>form textarea").on("blur",function(){
    $(this).next().show(100);
  });

  $(".address>:last-child>div>div:last-child>p>a").on("mouseenter",function(){
    $(this).css({"color":"rgb(13, 243, 70)"});
  });

  $(".address>:last-child>div>div:last-child>p>a").on("mouseleave",function(){
    $(this).css({"color":"inherit"});
  });
  

  
});