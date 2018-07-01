/*
 * jsCalendar language extension v1.0
 * Add Norwegian Language support
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
        // EDIT HERE THE LANGUAGE CODE ~~~~~~~~~~
        code : "no",
        // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Months of the year
        months : [
            // EDIT HERE THE MONTHS ~~~~~~~~~~~~~
            "Januar",
            "Februar",
            "Mars",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Desember"
            // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~
        ],
        // Days of the week
        days : [
            // EDIT HERE THE DAYS ~~~~~~~~~~~~~~~
            "Søndag",
            "Mandag",
            "Tirsdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "Lørdag"
            // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~
        ]
    });

})();
