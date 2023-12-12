/*
 * jsCalendar language extension
 * Add Korean Language support
 * Translator: Jaafari El Housseine (jefferyhus@github)
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
        code : 'ko',
        // Months of the year
        months : [
            '일월',
            '이월',
            '삼월',
            '사월',
            '오월',
            '유월',
            '칠월',
            '팔월',
            '구월',
            '시월',
            '십일월',
            '십이월'
        ],
        // Days of the week
        days : [
            '일요일',
            '월요일',
            '화요일',
            '수요일',
            '목요일',
            '금요일',
            '토요일'
        ]
    });

})();
