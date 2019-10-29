[![latest release](https://img.shields.io/badge/latest%20release-v1.4.4-green.svg?style=flat-square)](https://github.com/GramThanos/jsCalendar/releases/latest)
[![latest development](https://img.shields.io/badge/latest%20development-v1.4.5-yellow.svg?style=flat-square)](https://github.com/GramThanos/jsCalendar#whats-new)
[![npm project](https://img.shields.io/badge/npm%20package-simple--jscalendar-red.svg?style=flat-square)](https://www.npmjs.com/package/simple-jscalendar)

# jsCalendar
Just a simple javascript calendar

 • [Download](https://github.com/GramThanos/jsCalendar/releases/latest) • [Live preview](https://gramthanos.github.io/jsCalendar/) • [Documentation](https://gramthanos.github.io/jsCalendar/docs.html) • [Languages](https://gramthanos.github.io/jsCalendar/docs.html#parameter-language) • [Calendar Generator](https://gramthanos.github.io/jsCalendar/generator.html) • 

![preview image](https://raw.githubusercontent.com/GramThanos/jsCalendar/master/preview/preview_default.png)


___


### Fast set up

Add the jsCalendar code on `<head>`

```html
<link rel="stylesheet" type="text/css" href="jsCalendar.css">
<script type="text/javascript" src="jsCalendar.js"></script>
```

Then insert a calendar on `<body>`

```html
<div class="auto-jsCalendar"></div>
```

Or maybe you need to display it in an **other language**!

```html
<!-- Load Greek language -->
<script type="text/javascript" src="jsCalendar.lang.gr.js"></script>

<!-- Display calendar in Greek -->
<div class="auto-jsCalendar" data-language="gr"></div>
```

We also have a simple GUI [calendar code generator](https://gramthanos.github.io/jsCalendar/generator.html), so that you can easily create your jsCalendar.


___

### CDN (Unpkg & JsDelivr)

You can also use the [jsCalendar package](https://unpkg.com/simple-jscalendar/) on the [unpkg CDN](https://unpkg.com).

```html
<!-- jsCalendar v1.4.4 Javascript and CSS from unpkg cdn -->
<script src="https://unpkg.com/simple-jscalendar@1.4.4/source/jsCalendar.min.js" integrity="sha384-0LaRLH/U5g8eCAwewLGQRyC/O+g0kXh8P+5pWpzijxwYczD3nKETIqUyhuA8B/UB" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://unpkg.com/simple-jscalendar@1.4.4/source/jsCalendar.min.css" integrity="sha384-44GnAqZy9yUojzFPjdcUpP822DGm1ebORKY8pe6TkHuqJ038FANyfBYBpRvw8O9w" crossorigin="anonymous">
```

Or you can also use the [jsCalendar npm package](https://www.jsdelivr.com/package/npm/simple-jscalendar) on the [jsdelivr CDN](https://www.jsdelivr.com).

```html
<!-- jsCalendar v1.4.4 Javascript and CSS from jsdelivr npm cdn -->
<script src="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.4/source/jsCalendar.min.js" integrity="sha384-0LaRLH/U5g8eCAwewLGQRyC/O+g0kXh8P+5pWpzijxwYczD3nKETIqUyhuA8B/UB" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.4/source/jsCalendar.min.css" integrity="sha384-44GnAqZy9yUojzFPjdcUpP822DGm1ebORKY8pe6TkHuqJ038FANyfBYBpRvw8O9w" crossorigin="anonymous">
```

Full example with all the files and their integrity hashes [using unpkg here](https://github.com/GramThanos/jsCalendar/blob/master/demos/cdn-unpkg%20full%20demo.html) and [using jsdelivr here](https://github.com/GramThanos/jsCalendar/blob/master/demos/cdn-jsdelivr%20full%20demo.html) (the hashes are the same).

___

### npm package

If you are into *npm* you can install the lib's package by just typing in your command line

```bash
npm i simple-jscalendar

# Copy library files to your resources folders
cp ./node_modules/simple-jscalendar/source/jsCalendar.js ./js/jsCalendar.js
cp ./node_modules/simple-jscalendar/source/jsCalendar.css ./css/jsCalendar.css

# Maybe copy a language and a theme too
cp ./node_modules/simple-jscalendar/source/jsCalendar.lang.gr.js ./js/jsCalendar.lang.gr.js
cp ./node_modules/simple-jscalendar/themes/jsCalendar.clean.css ./css/jsCalendar.clean.css
```

More info on the npm page
https://www.npmjs.com/package/simple-jscalendar

___


### Learn to jsCalendar
- [Getting started](https://gramthanos.github.io/jsCalendar/docs.html#getting-started)
- [Themes](https://gramthanos.github.io/jsCalendar/docs.html#calendar-themes)
- [Parameters](https://gramthanos.github.io/jsCalendar/docs.html#calendar-themes)
- [Javascript Create Calendar](https://gramthanos.github.io/jsCalendar/docs.html#javascript-api-create)
- [Javascript Calendar Methods](https://gramthanos.github.io/jsCalendar/docs.html#javascript-api-create)
- [Add more languages](https://gramthanos.github.io/jsCalendar/docs.html#more-languages)

___


### Preview images
Build-in Themes
![Default Theme](https://raw.githubusercontent.com/GramThanos/jsCalendar/master/preview/preview_theme_default.png)
![Material Theme](https://raw.githubusercontent.com/GramThanos/jsCalendar/master/preview/preview_theme_material.png)
![Classic Theme](https://raw.githubusercontent.com/GramThanos/jsCalendar/master/preview/preview_theme_classic.png)
Additional Themes
![DarkSeries Theme](https://raw.githubusercontent.com/GramThanos/jsCalendar/master/preview/preview_theme_darkseries.png)
![Clean Theme](https://raw.githubusercontent.com/GramThanos/jsCalendar/master/preview/preview_theme_clean.png)
![Micro Theme](https://raw.githubusercontent.com/GramThanos/jsCalendar/master/preview/preview_theme_micro.png)


___


### Whats new?

#### Latest development code v1.4.5-beta <sub><sup>(beta minified versions may be out-of-date)</sub></sup>
 - Added
    - Added extension add method `jsCalendar.ext('example', {init : <function>, create : <function>, update : <function>});`
 - Bugs
    - Fixed `info.start` parameter on `onMonthRender` (was not the first date)
    - Fixed selected dates not highlighted bug (depending on your timezone) (issue #44)
    - Fixed `onDateRender` incorrect `isCurrentMonth`, `isPreviousMonth` and `isNextMonth` (issue #45)
    - Fixed `fdotw` bug #42
 - Languages
    - Added Polish Language (by [avatec](https://github.com/avatec))
    - Added Arabic Language (by [JefferyHus](https://github.com/JefferyHus))
    - Added Thai Language (by [notjiam](https://github.com/notjiam))
    - Added Korean Language (by [JefferyHus](https://github.com/JefferyHus))
___


### Contact me

Contact me to leave me your feedback or to express your thoughts.

You can [open an issue](https://github.com/GramThanos/jsCalendar/issues) or [send me a mail](mailto:gramthanos@gmail.com)


___


### License

This project is under [The MIT license](https://opensource.org/licenses/MIT).
I do although appreciate attribute.

Copyright (c) 2019 Grammatopoulos Athanasios-Vasileios

___

[![GramThanos](https://avatars2.githubusercontent.com/u/14858959?s=42&v=4)](https://github.com/GramThanos)
[![DinoDevs](https://avatars1.githubusercontent.com/u/17518066?s=42&v=4)](https://github.com/DinoDevs)
