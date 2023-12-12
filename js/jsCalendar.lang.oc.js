/*
 * jsCalendar language extension
 * Add Occitan Language support
 * Translator: Quentin PAGÈS (ensag-dev@github)
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
        code : 'oc',
        // Months of the year
        months : [
            'Genièr',
            'Febrièr',
            'Març',
            'Abril',
            'Mai',
            'Junh',
            'Julhet',
            'Agost',
            'Setembre',
            'Octòbre',
            'Novembre',
            'Decembre'
        ],
        // Days of the week
        days : [
            'Dimenge',
            'Diluns',
            'Dimars',
            'Dimècres',
            'Dijòus',
            'Divendres',
            'Dissabte'
        ]
    });

})();
