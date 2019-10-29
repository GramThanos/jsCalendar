/*
 * jsCalendar language extension
 * Add Thai Language support
 * Translator: Notjiam (notjiam@github)
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
        code : 'th',
        // Months of the year
        months : [
            'มกราคม',
            'กุมภาพันธ์',
            'มีนาคม',
            'เมษายน',
            'พฤษภาคม',
            'มิถุนายน',
            'กรกฎาคม',
            'สิงหาคม',
            'กันยายน',
            'ตุลาคม',
            'พฤศจิกายน',
            'ธันวาคม'
        ],
        // Days of the week
        days : [
            'อาทิตย์',
            'จันทร์',
            'อังคาร',
            'พุธ',
            'พฤหัสบดี',
            'ศุกร์',
            'เสาร์'
        ],
        // Abbreviations of Days
        days_abr : [
            'อา',
            'จ',
            'อ',
            'พ',
            'พฤ',
            'ศ',
            'ส'
        ],

        // Overwrite day string format rules
        dayStringParser : function(key, day) {
            switch(key) {
                case 'DD':
                case 'dd':
                case 'D':
                    return this.days_abr[day];
            }
        }
    });

})();
