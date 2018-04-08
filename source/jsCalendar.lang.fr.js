/*
 * jsCalendar language extension v1.0
 * Add French Language support
 * Copyright (c) 2017 Grammatopoulos Athanasios-Vasileios
 */

// We love anonymous functions
(function(){

    // Get library
    var jsCalendar = window.jsCalendar;

    // If jsCalendar is not loaded
    if (typeof jsCalendar === "undefined") {
        // If there is no language to load array
        if (typeof window.jsCalendar_language2load === "undefined") {
            window.jsCalendar_language2load = [];
        }
        // Wrapper to add language to load list
        jsCalendar = {
            addLanguage : function (language) {
                // Add language to load list
                window.jsCalendar_language2load.push(language);
            }
        };
    }

    // Add a new language
    jsCalendar.addLanguage({
        // Language code
        code : "fr",
        // Months of the year
        months : [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "octobre",
            "Novembre",
            "Décembre"
        ],
        // Days of the week
        days : [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi"
        ]
    });

})();
