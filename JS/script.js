$("path").hover(function(){
    var id= event.target.id;
    $("#region").html(id);
  });

  $("path").click(function(){
    var id= event.target.id;
    $.getJSON( "regions.json", function( data ) {
      console.log(data);
      $.each( data, function( key, val ){
               // alert(id + "    " + key);
                if(id == key){
                  $('.RegionCont').show(400 , "swing");
                  $("#SttNme").html(val.Name);
                  $("#img1").attr("src",val.Picture1);
                  $("#img2").attr("src",val.Picture2);
                  $("#img3").attr("src",val.Picture3);
                  $([document.documentElement, document.body]).animate({
                    scrollTop: $(".RegionCont").offset().top
                }, 1000);
                  return false;
                }
      });
    });
  });

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //mybutton.style.display = "block";
    jQuery('#myBtn').show();
  } else {
    //mybutton.style.display = "none";
    jQuery('#myBtn').hide(400 , "swing");
  }
}


$("#myBtn").click(function(){
  var body = $("html, body");
body.stop().animate({scrollTop:0}, 500, 'swing');

});