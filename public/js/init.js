/**
 * Created by m@ on 2/16/15.
 */
(function($){
    $(function(){

        var window_width = $(window).width();

        $('.parallax').parallax();
        $('.modal-trigger').leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200 // Transition out duration
            //ready: function() { alert('Ready'); }, // Callback for Modal open
            //complete: function() { alert('Closed'); } // Callback for Modal close
        });
        $('.collapsible').collapsible({
            accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });

        //$('a[href^="#"]').on('click',function (e) {
        //    e.preventDefault();
        //
        //    var target = this.hash;
        //    var $target = $(target);
        //
        //    $('html, body').stop().animate({
        //        'scrollTop': $target.offset().top
        //    }, 900, 'swing');
        //});

       //Detect touch screen and closeOnClick on sideNav
        function is_touch_device() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }
        if (is_touch_device()) {
            $('.button-collapse').sideNav({
                menuWidth: 240, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
            });
        }
        else {
            $('.button-collapse').sideNav({
                menuWidth: 240, // Default is 240
                edge: 'left', // Choose the horizontal origin
                closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
            });
        }
    }); // end of document ready

})(jQuery); // end of jQuery name space
