[![latest release](https://img.shields.io/badge/latest%20release-v1.4.3-green.svg?style=flat-square)](https://github.com/GramThanos/jsCalendar/releases/latest)
[![latest development](https://img.shields.io/badge/latest%20development-v1.4.4-yellow.svg?style=flat-square)](https://github.com/GramThanos/jsCalendar#whats-new)
[![latest development](https://img.shields.io/badge/npm%20package-simple--jscalendar-red.svg?style=flat-square)](https://www.npmjs.com/package/simple-jscalendar)

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

### Unpkg CDN

You can also use the [jsCalendar package](https://unpkg.com/simple-jscalendar/) on the [unpkg CDN](https://unpkg.com).

```html
<!-- jsCalendar v1.4.3 Javascript and CSS -->
<script src="https://unpkg.com/simple-jscalendar@1.4.3/source/jsCalendar.min.js" integrity="sha384-JqNLUzAxpw7zEu6rKS/TNPZ5ayCWPUY601zaig7cUEVfL+pBoLcDiIEkWHjl07Ot" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://unpkg.com/simple-jscalendar@1.4.3/source/jsCalendar.min.css" integrity="sha384-+OB2CadpqXIt7AheMhNaVI99xKH8j8b+bHC8P5m2tkpFopGBklD3IRvYjPekeWIJ" crossorigin="anonymous">
```

Full example with all the files and their integrity hashes [here](https://github.com/GramThanos/jsCalendar/blob/master/demos/cdn%20full%20demo.html).

___

### npm package

If you are into *npm* you can install the lib's package by just typing in your command line

```bash
npm i simple-jscalendar

# Copy libary files to your resources folders
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

#### Latest development code v1.4.4-beta <sub><sup>(beta minified versions may be out-of-date)</sub></sup>

 - Bugs
    - Fixed days locale bug of the `setLanguage` method
    - Fixed a typo in French language (by [Thomas Chapuis](https://github.com/amstr4d))
    - Fixed min-date comparison on previous month navigation
    - Fixed compatibility with bootstrap
 - Languages
    - Added Dutch Language (by [mikedebruijn](https://github.com/mikedebruijn))
    - Added Catalan Language (by [antonstsk](https://github.com/antonstsk))


___


### Contact me

Contact me to leave me your feedback or to express your thoughts.

[Open an issue](https://github.com/GramThanos/jsCalendar/issues)

[Send me a mail](mailto:gramthanos@gmail.com)


___


### License

This project is under [The MIT license](https://opensource.org/licenses/MIT).
I do although appreciate attribute.

Copyright (c) 2019 Grammatopoulos Athanasios-Vasileios

___

[![GramThanos](https://avatars2.githubusercontent.com/u/14858959?s=42&v=4)](https://github.com/GramThanos)
[![DinoDevs](https://avatars1.githubusercontent.com/u/17518066?s=42&v=4)](https://github.com/DinoDevs)
