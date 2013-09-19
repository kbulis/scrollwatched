/*!
 * jQuery ScrolledWatch plugin
 *
 * Original author: @kbulis (with boilerplate help from @addyosmani)
 *
 * Further changes, comments: @kbulis
 *
 * Licensed under the MIT license
 *
 */
; (function ($, window, document, undefined) {
    var oDefaults = {
        proximity: 40
    };

    function Plugin(oElement, oOptions) {
        this.options = $.extend({}, oDefaults, oOptions);

        this.element = oElement;

        this._name = "scrollwatched";

        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this, $element = $(self.element);

        $element.data
            ( "scrollwatched_scrolledin"
            , false
            );

        self.evaluate = function (bForceCall) {
            var nT = $(window).scrollTop(), nH = $(window).height(), nP = $element.position().top;

            if ((nT - self.options.proximity) < nP && nP < (nT + nH + self.options.proximity)) {
                if ($element.data("scrollwatched_scrolledin") === false || bForceCall === true) {
                    $element.data("scrollwatched_scrolledin", true);

                    if (typeof (self.options.scrolledin) === "function") {
                        self.options.scrolledin.call(self.element);
                    }
                }
            }
            else {
                if ($element.data("scrollwatched_scrolledin") === true || bForceCall === true) {
                    $element.data("scrollwatched_scrolledin", false);

                    if (typeof (self.options.scrolledout) === "function") {
                        self.options.scrolledout.call(self.element);
                    }
                }
            }
        }

        $(document).ready(function () {
            self.evaluate(false);
        });

        $(window).scroll(function () {
            self.evaluate(false);
        });
    };

    $.fn["scrollwatched"] = function (oOptions) {
        return this.each(function () {
            if (!$.data(this, "plugin_scrollwatched")) {
                $.data(this, "plugin_scrollwatched", new Plugin(this, oOptions));
            }
            else {
                $.data(this, "plugin_scrollwatched").evaluate(true);
            }
        });
    }

})(jQuery, window, document);