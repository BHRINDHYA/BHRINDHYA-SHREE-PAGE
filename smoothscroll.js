$(document).ready(function(){
    //Add smooth scrolling to all links
    $(".smooth").on('click',function(event){

        //Make sure this.hash has a value before overriding default behavior
        if(this.hash !==""){
            // prevent anchor click behavior
            event.preventDefault();

            //store hash
            var hash=this.hash;

            //using jquery's animate() method to add smooth page scroll
            //the optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html,body').animate({
                scrollTop: $(hash).offset().scrollTop
            },800,function(){

                //Add hash (#) to URL when done scrolling(default click behavior)
                window.location.hash =hash;
            });
        }  //end if
    });
});