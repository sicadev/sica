$(document).ready(function () {

    $(window).on('load resize', function (e) {
        if ($(window).width() <= 992) {
            $('.roadmap .q3_2018').appendTo('.roadmap .left');
            $('.roadmap .q4_2018').appendTo('.roadmap .left');
            $('.roadmap .q1_2019').appendTo('.roadmap .left');
            $('.roadmap .q2_2019').appendTo('.roadmap .left');
            $('.roadmap .q3_2019').appendTo('.roadmap .left');
            $('.roadmap .q4_2019').appendTo('.roadmap .left');
            $('.roadmap .q1_2020').appendTo('.roadmap .left');
            $('.roadmap .q2_2020').appendTo('.roadmap .left');
        } else {
            $('.roadmap .q3_2018').appendTo('.roadmap .left');
            $('.roadmap .q4_2018').appendTo('.roadmap .right');
            $('.roadmap .q1_2019').appendTo('.roadmap .left');
            $('.roadmap .q2_2019').appendTo('.roadmap .right');
            $('.roadmap .q3_2019').appendTo('.roadmap .left');
            $('.roadmap .q4_2019').appendTo('.roadmap .right');
            $('.roadmap .q1_2020').appendTo('.roadmap .left');
            $('.roadmap .q2_2020').appendTo('.roadmap .right');
        }
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    AmCharts.makeChart("chartdiv", {
        "type": "pie",
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "depth3D": 9,
        "innerRadius": "40%",
        "baseColor": "#F9197D",
        "outlineColor": "#FDD2D2",
        "titleField": "category",
        "valueField": "column-1",
        "backgroundAlpha": 1,
        "responsive": {
            "enabled": true,
            "addDefaultRules": true,
            "rules": [{
                "minWidth": 0,
                "maxWidth": 900,
                "overrides": {
                    "categoryAxis": {
                        "labelsEnabled": false
                    }
                }
                        }]
        },
        "backgroundColor": "#0A0A0A",
        "fontFamily": "Open sans",
        "fontSize": 14,
        "theme": "dark",
        "allLabels": [],
        "balloon": {},
        "legend": {
            "enabled": true,
            "align": "center",
            "markerType": "circle",
            "position": "right",
            "valueText": "[[value]]B",
            "divId": "legenddiv"
        },

        "titles": [],
        "dataProvider": [
            {
                "category": "Initial exchange distribution",
                "column-1": "19"
						},
            {
                "category": "Locked for rewards",
                "column-1": "15"
						},
            {
                "category": "Marketing wallet",
                "column-1": "5"
						},
            {
                "category": "Development wallet",
                "column-1": "5"
						},
            {
                "category": "Team share",
                "column-1": "5"
						},
            {
                "category": "Airdrops",
                "column-1": "1"
						}
					]
    });

    var multiplicator = 1;
    var count_inview = 100;
    $('.fadein').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('on');
        } else {

        }
    });
    $('.roadmap .block.slideup').on('inview', function (event, isInView) {
        if (isInView) {

            console.log(count_inview * multiplicator);
            $(this).delay(count_inview * multiplicator).animate({
                "opacity": "1",
            });
            multiplicator++;
        } else {

        }
    });
    $('.visuel').animate({
        "opacity": "1",
        "margin-left": "0"
    });
});
