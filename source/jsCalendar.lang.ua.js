/*
 * jsCalendar language extension
 * Add Ukrainian Language support
 * Translator: Anton Stasyuk (antonstsk@github)
 */

// We love anonymous functions
(function(){

    // Get library
    var jsCalendar = window.jsCalendar;

    // If jsCalendar is not loaded
    if (typeof jsCalendar === 'undefined') {
        // If there is no language to load array
        if (typeof window.jsCalendar_language2load === 'undefined') {
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
        code : 'ua',
        // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // Months of the year
        months : [
            // EDIT HERE THE MONTHS ~~~~~~~~~~~~~
            'Січень',
            'Лютий',
            'Березень',
            'Квітень',
            'Травень',
            'Червень',
            'Липень',
            'Серпень',
            'Вересень',
            'Жовтень',
            'Листопад',
            'Грудень'
            // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~
        ],
        // Days of the week
        days : [
            // EDIT HERE THE DAYS ~~~~~~~~~~~~~~~
            'Неділя',
            'Понеділок',
            'Вівторок',
            'Середа',
            'Четвер',
            'П\'ятниця',
            'Субота'
            // STOP EDIT ~~~~~~~~~~~~~~~~~~~~~~~~
        ]
    });

})();
