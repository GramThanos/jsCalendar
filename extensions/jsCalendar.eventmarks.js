/*
 * jsCalendar extension
 * EventMarks v0.0.1-beta
 *
 * Authors: MyMaloks, GramThanos
 */

(function($){
	// Check if jsCalendar exists
	if (!$) throw 'Error jsCalendar library was not found';

	// Example Extension
	var init = function(instance) {
		instance._eventMarks = {};
	};
	var update = function(instance, month) {
		for (var i = month.days.length - 1; i >= 0; i--) {
			// If date is marked for events
			if (month.days[i].getTime() in instance._eventMarks) {
				var wrapper = document.createElement('div');
				wrapper.className = 'jsCalendar-eventmarks';
				var indicator;
				var events = instance._eventMarks[month.days[i].getTime()];
				var num = Math.min(events.length > 4 ? 3 : 4, events.length);
				for (var j = 0; j < num; j++) {
					indicator = document.createElement('div');
					indicator.className = 'jsCalendar-eventmark';
					indicator.style.backgroundColor = events[j];
					wrapper.appendChild(indicator);
				}
				if (events.length > num) {
					num = events.length - num;
					indicator = document.createElement('div');
					indicator.className = 'jsCalendar-eventmark-more';
					indicator.textContent = '+' + (num > 9 ? '+' : num);
					wrapper.appendChild(indicator);
				}
				instance._elements.bodyCols[i].appendChild(wrapper);
			}
		}
	};

	$.prototype._addEventMarksForDate = function(date, eventColors) {
		date = $.tools.parseDate(date);
		date.setHours(0, 0, 0, 0);
		date = date.getTime();

		if (!(date in this._eventMarks)) {
			this._eventMarks[date] = [];
		}

		this._eventMarks[date] = this._eventMarks[date].concat(eventColors);
	};

	$.prototype._getEventMarksForDate = function(date) {
		date = $.tools.parseDate(date);
		date.setHours(0, 0, 0, 0);
		date = date.getTime();

		if (!(date in this._eventMarks)) {
			return [];
		}

		return this._eventMarks[date].slice();
	};

	$.prototype._removeEventMarksForDate = function(date, eventColors) {
		date = $.tools.parseDate(date);
		date.setHours(0, 0, 0, 0);
		date = date.getTime();

		if (date in this._eventMarks) {
			for (var i = 0; i < eventColors.length; i++) {
				var pos;
				while ((pos = this._eventMarks[date].indexOf(eventColors[i])) >= 0){
					this._eventMarks[date].splice(pos, 1);
				}
			}
		}
	};

	$.prototype._clearEventMarksForAllDates = function() {
		this._eventMarks = {};
	};

	$.prototype._getEventMarksForAllDates = function() {
		var list = {};
		for (var date in this._eventMarks) {
			if (this._eventMarks.hasOwnProperty(date)) {
				list[date] = this._eventMarks[date].slice();
			}
		}
		return list;
	};

	// Add marks
	$.prototype.addEventMarks = function(date, eventColors){
		// If no arguments
		if (typeof date === 'undefined') {
			// Return
			return this;
		}

		// If eventColors not array
		if (!(eventColors instanceof Array)) {
			// Lets make it an array
			eventColors = [eventColors];
		}
		// Mark dates
		this._addEventMarksForDate(date, eventColors);
		// Refresh
		this.refresh();

		// Return
		return this;
	};

	// Get marks
	$.prototype.getEventMarks = function(date){
		// If no arguments
		if (typeof date === 'undefined') {
			// Return
			return this;
		}

		// Mark dates
		return this._getEventMarksForDate(date);
	};

	// Remove marks
	$.prototype.removeEventMarks = function(date, eventColors){
		// If no arguments
		if (typeof date === 'undefined') {
			// Return
			return this;
		}

		// If eventColors not array
		if (!(eventColors instanceof Array)) {
			// Lets make it an array
			eventColors = [eventColors];
		}
		// Remove marks
		this._removeEventMarksForDate(date, eventColors);
		// Refresh
		this.refresh();

		// Return
		return this;
	};

	// Get all marks
	$.prototype.getAllEventMarks = function(){
		// Get all marks
		return this._getEventMarksForAllDates();
	};

	// Clear event marks from all dates
	$.prototype.clearAllEventMarks = function(){
		// Remove all marks
		this._clearEventMarksForAllDates();
		// Refresh
		this.refresh();

		// Return
		return this;
	};

	// Load extension
	$.ext('EventMarks', {
		init : init,
		update : update
	});

})(window.jsCalendar);
