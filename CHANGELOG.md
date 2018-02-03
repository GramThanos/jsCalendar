# Changelog
All jsCalendar changes are documented in this file.

## [1.4.2] - 2018-02-03

### Fixed
- Fixed date format bugs and added "day" keyword
	- Before fix
		- `javascript jsCalendar.tools.dateToString(new Date(2017, 11, 1), "month day", "en");`
		- `// returns "1eceDber Fay" (D = 1, m = D, d = F)`
	- After fix
		- `javascript jsCalendar.tools.dateToString(new Date(2017, 11, 1), "month day", "en");`
		- `// returns "December Friday"`
- Fixed no zero fill for day 9 with format DD




## [1.4.1] - 2018-01-01

### Added
- jsCalendar.tools.*
	- jsCalendar.tools.parseDate(date)
	- jsCalendar.tools.stringToDate alias of JsCalendar.tools.parseDate
	- jsCalendar.tools.dateToString(date, format, lang)




## [1.4.0] - 2017-11-04

### Added
- jsCalendar.version
- calendar.clearSelected() alias of calendar.clearselect()
- calendar.isSelected(date)
- calendar.isVisible(date)
- calendar.isInMonth(date)
- calendar.getSelected(options)
- support to get target with selectors
	- ex. target string `"#myelement"` will get the element with id `myelement`
- min(date) // Set a max date for the calendar
- max(date) // Set a min date for the calendar

### Fixed
- duplicate dates when time changes (ex. 29/10/2017)
- string dates that do not exist throw error
	- ex. `new jsCalendar(document.createElement('div'), "31/2/2017");` now throw error




## [1.3.0] - 2017-07-08

### Added
- Support for setting the first day of the week
	- firstDayOfTheWeek : "{day-name}" // Based on the language sellected
	- firstDayOfTheWeek : "{number}" | {number} // 1-7 starting from Sunday
	- alias keyword : "fdotw" (from the initials FistDayOfTheWeek)




## [1.2.0] - 2017-03-19

### Changed
- Public release of the library.
