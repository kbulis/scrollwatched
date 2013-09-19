scrollwatched
=============
Plugin for jQuery users who want to trigger event handlers when an element scrolls in/out of view.

Simple usage:

    $(function () {

        $.scrollwatched("#elementtowatch",
            { scrolledout: function () {
                    // do something when #elementtowatch scrolled out of view
                }
            , scrolledin: function () {
                    // do something when #elementtowatch scrolled in to view
                }
            , proximity: 40
            }
        );

    });
