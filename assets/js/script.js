var shippingInfo = '';
            var description = '';
            function captureAddress()
            {
                $('body').append('<div style="position:absolute;top:0;left:0;width:100%;height:100%;background: rgb(0, 0, 0);background: rgba(0, 0, 0, 0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\";"><div style="border:solid thick #000000;width:350px;min-height:450px;margin:80px 450px;background:#FFFFFF;" id="formBox">&nbsp;</div></div>');
                $('#formBox').html($('#form'));
            }
            simpleCart({
                checkout: { 
                    type: "SendForm" , 
                    url: "https://www.payfast.co.za/eng/process" , //Change this to https://www.payfast.co.za/eng/process when you finished testing

                    // HTTP method for form, "POST" 
                    method: "POST" , 

                    // URL to redirect browser to after successful checkout
                    success: "https://www.trishbeautyspa.co.za/success.html" , 

                    // URL to redirect browser to after checkout was cancelled by buyer
                    cancel: "https://www.trishbeautyspa.co.za/products.html" ,

                    extra_data: {
                        merchant_id: "13709682", // Change this to your merchant ID, you can find this in the Settings section of your PayFast account
                        merchant_key: "qb80vmuadnsn5", // Change this to your merchant Key, you can find this in the Settings section of your PayFast account
                        item_name: "Purchase from Trish Beauty Spa online store", // Change this to describe a generic sale              
                        amount: simpleCart.total,                           // Total amount = item1 + item2 + item3 etc
                        name_first: "Buyer first name",                          
                        name_last: "Buyer last name", 
                    }
                },
                // Custom function to handle shipping costs
                shippingCustom: function(){ 

                     if( simpleCart.quantity() > 20 ){
                          return 0;
                     } else {
                          return 10.00;
                     }
                },
                //shippingFlatRate: 10,    //a basic flat rate shipping
                //shippingQuantityRate: 3, //rate based on the total quantity of the cart (i.e. shipping quantity rate of $3 = $21 for 7 items)
                //shippingTotalRate: 0.1,  //a percentage of the total cost of the cart
                beforeCheckout: function( data ){
                    //get shipping details
                     $('.info').each(function(e){
                        var entry = $(this).val();
                        if(entry.length > 0)
                        {
                            shippingInfo += entry + ',';
                        }                       
                    }) ; 

                    //get item details
                    $('.itemRow').each(function(e){
                        description += $(this).text() + ', ';
                    });

                    data.cancel_url = data.cancel_return;
                    data.return_url = data.return;                    
                    data.item_description = 'Items: ' + description + '<br />Shipping: ' + shippingInfo;
                    data.amount = simpleCart.grandTotal();
                }
            });

            simpleCart.currency({
                code: "ZAR" ,
                symbol: "R" ,
                name: "South African Rand"
            }); 

// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

  

  $(document).ready(function(){

    $(".cart_btn .item_add").click(function(){
      $(".cart_btn a"). removeAttr("href");
    })
      
    $('.gallery').featherlightGallery();

    $(".feautured_products .item").removeClass("col-sm-4");
    $(".feautured_products .item").addClass("col-sm-6");
    $(".feautured_products .item").addClass("simpleCart_shelfItem");
    $(".art p").addClass("item_Description");

    $(".simpleCart_checkout,.simpleCart_empty,.first_checkout").addClass("btn");

    $(window).scroll(function(){
      $('.back_to_top,.book').localScroll({duration:1500});
    });

    $(".menu label.menu-toggle").click(function(){
      $(this).toggleClass("active")
    })

    $(window).load(function(){
      $(".loaded").fadeOut();
      $(".preloader").delay(1000).fadeOut("slow");

      

      
    });
 
    $("#sign-form").validate();
    $(".home_message").validate();
    $("#footer-form").validate();
    $(".contact_form").validate();


    

    $( "#clickme" ).click(function() {
  $( "#book" ).slideToggle( "slow", function() {
    // Animation complete.
  });
  
}); 

$('.art').readmore({speed: 500})
  })

            




