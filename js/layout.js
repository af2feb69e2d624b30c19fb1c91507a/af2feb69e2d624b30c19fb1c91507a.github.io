$(function () {
    $('#layout_header').load("https://wondersbeyondlimits.com/layout/header.html", function () {

        /* Navigation active status */
        var url = window.location.href;
        var url_queries = url.split('/');
        var url_last_query = url_queries[url_queries.length - 1];
        var index = url_last_query.indexOf("index") >= 0;
        var activities = url_last_query.indexOf("activities") >= 0;
        var travel_blog = url_last_query.indexOf("travel-blog") >= 0;
        var about_us = url_last_query.indexOf("about-us") >= 0;
        var contact_us = url_last_query.indexOf("contact-us") >= 0;

        if (index || url_last_query === "") {
            $("#layout_header header nav ul").find(".nav_index").addClass("active");
        } else if (activities) {
            $("#layout_header header nav ul").find(".nav_activities").addClass("active");
        } else if (travel_blog) {
            $("#layout_header header nav ul").find(".nav_travel_blog").addClass("active");
        } else if (about_us) {
            $("#layout_header header nav ul").find(".nav_about_us").addClass("active");
        } else if (contact_us) {
            $("#layout_header header nav ul").find(".nav_contact_us").addClass("active");
        }
    });

    $('#layout_footer').load("https://wondersbeyondlimits.com/layout/footer.html");
});