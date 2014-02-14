scrollwatched
=============
Plugin for jQuery users who want to trigger event handlers when an element scrolls in/out of view.

Simple usage:

    $(function () {

        $("#elementtowatch").scrollwatched(
            { scrolledout: function () {
                    // do something when #elementtowatch scrolled out of view
                }
            , scrolledin: function () {
                    // do something when #elementtowatch scrolled in to view
                    
                    // rewatch scrolled state to trigger events again
                    
                    $("#elementtowatch").scrollwatched();
                }
            , proximity: 40
            }
        );

    });

Check out the following fiddle for running examples:

http://jsfiddle.net/kbulis/sefXH/
