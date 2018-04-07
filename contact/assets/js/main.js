jQuery.noConflict();

(function ($) {

    $('#test-form').on('submit', function(e) {
        var yournote = $('[name="yournote"]');
        var yourname = $('[name="yourname"]');
        var youremail = $('[name="youremail"]');
        var yourconditions = $('[name="yourconditions"]');
        var emailRegex = /@/;

        if (!yournote.val().length) {
            yournote.addClass("error");
            yournote.next(".c-formError").show();
        } else {
            yournote.removeClass("error");
            yournote.next(".c-formError").hide();
        }

        if (!yourname.val().length) {
            yourname.addClass("error");
            yourname.next(".c-formError").show();
        } else {
            yourname.removeClass("error");
            yourname.next(".c-formError").hide();
        }

        if (!youremail.val().match(emailRegex)) {
            youremail.addClass("error");
            youremail.next(".c-formError").show();
        } else {
            youremail.removeClass("error");
            youremail.next(".c-formError").hide();
        }

        if (!yourconditions.prop('checked')) {
            $(".conditionsError").show();
        } else {
            $(".conditionsError").hide();
        }

        if (yournote.val().length && yourname.val().length && youremail.val().match(emailRegex) && yourconditions.prop('checked')) {
            return true;
        }

        return false;

    });

}(jQuery));