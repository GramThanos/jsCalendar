/*
 * jsCalendar extension
 * DatePicker v1.0.1
 *
 *
 * MIT License
 *
 * Copyright (c) 2019 Grammatopoulos Athanasios-Vasileios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function($){
    // Check if no jsCalendar library
    if (!$) throw 'Error jsCalendar library was not found';

    // Extension Object
    var _ = {};
    _.options = {
        format : 'DD/MM/YYYY',
        offsetTop : 2,
        offsetLeft : -4,
        close_keycodes : [9, 27, 13], // TAB 9, ESC 27, ENTER 13
        class : 'jsCalendar-datepicker-wrappper'
    };

    // Constructor
    var DatePicker = function () {
        // No parameters
        if (arguments.length === 0) {
            // Do nothing
            return;
        }
        else {
            // Construct datepicker
            this._construct(arguments);
        }
    };

    // Version
    DatePicker.version = 'v1.0.1-beta';

    // Sub-Constructor
    DatePicker.prototype._construct = function(args) {
        // Parse arguments
        args = this._parseArguments(args);
        // Set a target
        this._setTarget(args.target);

        // Parse options
        var calendar_options = this._parseOptions(args.options);
        
        // Create calendar
        this._visible = false;
        this._wrapper = document.createElement('div');
        this._wrapper.className = this._options.class;
        this._wrapper.style.display = 'none';
        this._wrapper.style.position = 'absolute';
        document.body.appendChild(this._wrapper);

        calendar_options.target = this._wrapper;
        this.jsCalendar = new $(calendar_options);

        // If date was defined
        if (calendar_options.hasOwnProperty('date')) {
            // Set input date
            this._target.value = $.tools.dateToString(
                $.tools.parseDate(calendar_options.date),
                this._options.format,
                this.jsCalendar._options.language
            );
        }

        // Add target listeners
        var dp = this;
        // Calendar click handler
        this.jsCalendar.onDateClick(function(event, date) {dp._onPick(date);});
        // Focus handler
        this._target.addEventListener('focus', function() {dp._onFocus();}, false);
        this._target.addEventListener('keydown', function(event) {if (dp._options.close_keycodes.indexOf(event.keyCode) >= 0) dp.hide();}, false);
        // Kill calendar click bubble
        this.jsCalendar._elements.table.addEventListener('click', function(event) {event.stopPropagation();}, false);
        // Close datepicker on document click
        window.addEventListener('click', function(event) {if (event.target !== dp._target) dp.hide();}, false);
        // On resize re-calculate position
        window.addEventListener('resize', function() {if (dp._visible) dp.position();}, false);
    };

    // Parse options
    DatePicker.prototype._parseArguments = function(args) {
        // Arguments object
        var obj = {
            target : null,
            options : {}
        };

        // If no arguments
        if (args.length === 0) {
            // Throw an error
            throw new Error('jsCalendar-datepicker: No parameters were given.');
        }

        // Only 1 argument
        else if (args.length === 1) {

            // If target element
            if (
                (
                    // If html element
                    ((typeof HTMLElement === 'object') ? (args[0] instanceof HTMLElement) : args[0]) &&
                    (typeof args[0] === 'object') && (args[0] !== null) && (args[0].nodeType === 1) &&
                    (typeof args[0].nodeName === 'string')
                ) || (
                    // Or string
                    typeof args[0] === 'string'
                )
            ) {
                obj.target = args[0];
            }

            // Options argument
            else {
                // Init arguments
                obj.options = args[0];
                // Get target
                if (typeof args[0].target !== 'undefined') {
                    obj.target = args[0].target;
                }
                else {
                    // Throw an error
                    throw new Error('jsCalendar-datepicker: Not target was given.');
                }
            }
        }

        // Many arguments
        else {

            // First is target
            obj.target = args[0];

            // If options
            if (args.length >= 3) {
                obj.options = args[2];
            }

            // If date
            if (args.length >= 2) {
                obj.options.date = args[1];
            }

        }

        // Return object
        return obj;
    };

    // Set target
    DatePicker.prototype._setTarget = function(element) {
        // Parse target
        var target = $.tools.getElement(element);
        // If target not found
        if (!target) {
            // Throw an error
            throw new Error('jsCalendar-datepicker: Target was not found.');
        }
        else {
            // Save element
            this._target = target;
        }
    };

    // Parse options
    DatePicker.prototype._parseOptions = function(doptions) {
        // Options Object
        this._options = {};
        // Input options object (dirty)
        var options = {};

        var item;
        // Load default and input options
        for (item in _.options) {
            // Default options
            if (_.options.hasOwnProperty(item)) {
                if (_.options[item] instanceof Array)
                    this._options[item] = _.options[item].slice(0);
                else
                    this._options[item] = _.options[item];
            }
            // Dynamic options
            if (doptions.hasOwnProperty(item)) {
                options[item] = doptions[item];
            }
            // Dataset options
            else if (this._target.dataset.hasOwnProperty(item)) {
                options[item] = this._target.dataset[item];
            }
        }

        // Check options
        if (typeof options.format !== 'undefined'){
            this._options.format = options.format;
        }
        if (typeof options.offsetTop !== 'undefined'){
            // If number
            if (typeof options.offsetTop === 'number') {
                item = options.offsetTop;
                if (!isNaN(item)) this._options.offsetTop = item;
            }
            // If string
            else if (typeof options.offsetTop === 'string') {
                item = parseInt(options.offsetTop, 10);
                if (!isNaN(item)) this._options.offsetTop = item;
            }
        }
        if (typeof options.offsetLeft !== 'undefined'){
            // If number
            if (typeof options.offsetLeft === 'number') {
                item = options.offsetLeft;
                if (!isNaN(item)) this._options.offsetLeft = item;
            }
            // If string
            else if (typeof options.offsetLeft === 'string') {
                item = parseInt(options.offsetLeft, 10);
                if (!isNaN(item)) this._options.offsetLeft = item;
            }
        }
        if (typeof options.class === 'string'){
            this._options.class = options.class;
        }

        // Get calendar options
        options = {};

        // Load input options
        for (item in $.options) {
            // Dynamic options
            if (doptions.hasOwnProperty(item)) {
                options[item] = doptions[item];
            }
            // Dataset options
            else if (this._target.dataset.hasOwnProperty(item)) {
                options[item] = this._target.dataset[item];
            }
        }

        // Date defined
        if (doptions.hasOwnProperty('date')) {
            options.date = doptions.date;
        }
        // Date not defined
        else if (!options.hasOwnProperty('date')) {
            if (this._target.value.length > 0 && $.tools.parseDate(this._target.value, true) !== null) {
                options.date = this._target.value;
            }
            else if (this._target.dataset.hasOwnProperty('date')) {
                options.date = this._target.dataset.date;
            }
        }

        // Return calendar options
        return options;
    };

    // Listeners handlers
    DatePicker.prototype._onFocus = function() {
        this.jsCalendar.reset();
        this.show();
    };
    DatePicker.prototype._onPick = function(date) {
        // If date not in range
        if (this.jsCalendar._options.min && this.jsCalendar._options.min.getTime() > date) return;
        if (this.jsCalendar._options.max && this.jsCalendar._options.max.getTime() < date) return;
        // Set input date
        this._target.value = $.tools.dateToString(date, this._options.format, this.jsCalendar._options.language);
        // Update calendar date
        this.jsCalendar.set(date);
        // Close picker
        this.hide();
    };

    // Show/Hide datepicker
    DatePicker.prototype.show = function() {
        // If already visible
        if (this._visible) return;
        this.position();
        this._wrapper.style.display = 'block';
        this._visible = true;
    };
    DatePicker.prototype.hide = function() {
        this._wrapper.style.display = 'none';
        this._visible = false;
    };
    DatePicker.prototype.isVisible = function() {
        return this._visible;
    };

    // Calculate position
    DatePicker.prototype.position = function() {
        // Reset position
        var display = this._wrapper.style.display;
        this._wrapper.style.top = '-9999px';
        this._wrapper.style.left = '-9999px';
        this._wrapper.style.display = 'block';

        // Calculate position
        var left = 0;
        var top = 0;
        var element = this._target;
        while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)){
            left += element.offsetLeft - element.scrollLeft;
            top += element.offsetTop - element.scrollTop;
            element = element.offsetParent;
        }
        var height = this._target.clientHeight || this._target.offsetHeight || this._target.scrollHeight || 20;

        // Postions
        top = top + height + this._options.offsetTop;
        left = left + this._options.offsetLeft;
        if (document.body.offsetWidth < left + this._wrapper.offsetWidth) {
            left = document.body.offsetWidth - this._wrapper.offsetWidth - 1;
        }

        // Apply position
        this._wrapper.style.display = display;
        this._wrapper.style.top = top + 'px';
        this._wrapper.style.left = left + 'px';
    };

    // Auto init datepickers
    DatePicker.autoFind = function() {
        // Get all inputs
        var inputs = document.getElementsByTagName('input');
        // Filter inputs
        var datepickers = [];
        for (var i = 0; i < inputs.length; i++) {
            if (
                inputs[i].type === 'text' &&
                inputs[i].dataset.hasOwnProperty('datepicker') &&
                inputs[i].getAttribute('jsCalendar-datepicker-loaded') !== 'true'
            ) {
                datepickers.push(inputs[i]);
            }
        }
        
        // For each auto-calendar
        for (i = 0; i < datepickers.length; i++) {
            // Set as loaded
            datepickers[i].setAttribute('jsCalendar-datepicker-loaded', 'true');
            // Create
            new DatePicker(datepickers[i]);
        }
    };

    // Link extension on library
    if (!$.ext) $.ext = {};
    
    // Extensions object
    $.ext.datepicker = _;
    $.ext.datepicker.autoFind = DatePicker.autoFind;

    // Extension methods
    $.datepicker = function() {
        // Create new object
        var obj = new DatePicker();
        // Construct datepicker
        obj._construct(arguments);
        // Return new object
        return obj;
    };

    // Init auto datepickers
    // After the page loads
    window.addEventListener('load', function() {
        // Get calendars
        _.autoFind();
    }, false);

})(window.jsCalendar);
