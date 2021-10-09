
/*-- For Other details--*/

      $(document).ready(function(){
        $("#flip").click(function(){
          $("#panel").slideDown("slow");
        });
      });

/*---On form----*/      

      $(document).ready(function(){
        $("#memo").hover(function(){
          alert("Please Enter the Details!");
        },
        function(){
          alert("Bye!!");
        }); 
      });
 
/*--For More Details in Demonstration--*/   

      $(document).ready(function(){
        $("button").click(function(){
          $("#b").css("color", "red").slideUp(2000).slideDown(2000);
        });
      });


/* -- Animation in Know More section-- */

$(document).ready(function(){
        $(".content-box1").click(function(){
            $(".content-box1").animate({
                width: '300px',
                height:'300px' 
            } ,1000);

            $(".content-after").show().animate({opacity:'1' },3000);

        } );
    });


    $(document).ready(function(){
      $(".content-box2").click(function(){
          $(".content-box2").animate({
              width: '300px',
              height:'300px' 
          } ,1000);

          $(".content-after").show().animate({opacity:'1' },3000);

      } );
  });

  $(document).ready(function(){
    $(".content-box3").click(function(){
        $(".content-box3").animate({
            width: '300px',
            height:'300px' 
        } ,1000);

        $(".content-after").show().animate({opacity:'1' },3000);

    } );
});