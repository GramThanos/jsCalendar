/*
 * jsCalendar loader v1.0.0-alpha
 * Works with jsCalendar v1.4.5
 * This is currently experimental
 * 
 *
 * MIT License
 *
 * Copyright (c) 2017-2023 Grammatopoulos Athanasios-Vasileios
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

(function(){
	// This is an experiment
	console.warn('jsCalendar loader is experimental');

	// Track loading time
	let loading_start = new Date().getTime(); 

	// Get Loader URL
	let loaderURL = new URL(document.currentScript.src);

	// Get parameters
	let parameters = {};
	let parseArrayParameter = (parameter) => {
			parameter = parameter.split('|');
			// Remove blanks
			for (let i = parameter.length - 1; i >= 0; i--) {
				if (parameter[i].length === 0) {
					parameter.splice(i, 1);
				}
			}
			return parameter;
	}
	parameters.language = parseArrayParameter(loaderURL.searchParams.get('language') || loaderURL.searchParams.get('l') || '');
	parameters.extension = parseArrayParameter(loaderURL.searchParams.get('extension') || loaderURL.searchParams.get('e') || '');
	parameters.theme = parseArrayParameter(loaderURL.searchParams.get('theme') || loaderURL.searchParams.get('t') || '');
	parameters.minified = loaderURL.searchParams.get('minified') === "false" ? false : true;
	parameters.integrity = loaderURL.searchParams.get('integrity') === "false" ? false : true;
	parameters.crossorigin = loaderURL.searchParams.get('crossorigin') === "false" ? false : true;
	parameters.host = loaderURL.searchParams.get('host');

	// Generate Host URL info
	let hostURL;
	if (parameters.host) {
		hostURL = new URL(parameters.host);
	}
	else {
		hostURL = new URL(loaderURL.toString());
		hostURL.search = '';
		hostURL.pathname = hostURL.pathname.substring(0, hostURL.pathname.lastIndexOf('/') - 7);
	}

	// Files
	let fileInfo = (path, integrity = false) => {
		return {
			path : path,
			integrity : integrity
		};
	};
	let paths = {
		core : (parameters.minified ?
			{js : fileInfo('/source/jsCalendar.min.js', 'sha384-F3Wc9EgweCL3C58eDn9902kdEH6bTDL9iW2JgwQxJYUIeudwhm4Wu9JhTkKJUtIJ')} :
			{js : fileInfo('/source/jsCalendar.js', 'sha384-9U5mx0TwE3KynzfE2673H8cGnEKbBh/hEW/MPkdR9C8qU0lyKvFxZdo9E/5vpcTk')}
		),
		language : {
			be : {js : fileInfo('/source/jsCalendar.lang.be.js', 'sha384-PI3VPDqjnkgo002ScVctSGQYmHF4VtmXJT2cJ8H6hWWt1rk+l2Xw5hFUHTnvCBRA')},
			ca : {js : fileInfo('/source/jsCalendar.lang.ca.js', 'sha384-JXClNV6lrKePFdidQxupyaOcGHsiWlfiVYHzmS3lIIoz7eFppaVo2ZahCKMGwGCQ')},
			de : {js : fileInfo('/source/jsCalendar.lang.de.js', 'sha384-pUMNW4wJJocu99HqohAVlQD0z72pYWQ8Rwpk2LnF40x5BK3kTmtT8rE2ZlPgM8oh')},
			es : {js : fileInfo('/source/jsCalendar.lang.es.js', 'sha384-mrCuMLqSjwshLZD661hRZpNAphRZTR0eAxJsWxPrYzsYKRtNb+bT9u1PXq+YH/eP')},
			fr : {js : fileInfo('/source/jsCalendar.lang.fr.js', 'sha384-KwbbcoiATTslp59b+0njB+Kee4zLz3uQQnfXpDO8R/0c74NRyIZtNNGSf23bb5sX')},
			gr : {js : fileInfo('/source/jsCalendar.lang.gr.js', 'sha384-iK2L0CkyRtBpOuMRtnOoTTYiIB7mutEAdLs8RLl7ywjvO2MTfNXgP7wYlxpI8Luf')},
			hu : {js : fileInfo('/source/jsCalendar.lang.hu.js', 'sha384-jA80WXFW3Uvmi2UmXAeJ7KcwR0r1T17rniPWNRMc5zqOW+Gw/L1YTJWKKJNbwi9s')},
			it : {js : fileInfo('/source/jsCalendar.lang.it.js', 'sha384-FeutWe45g5Km/saFGan8TUe/2OmOMpOKZsSZrs3rTXuWFR1uUPCsMm4dDtRykeWj')},
			ja : {js : fileInfo('/source/jsCalendar.lang.ja.js', 'sha384-dq7lpAR5pDe3s/lBR9ULfpPzd6aK9ZQsPJvGTuwegn+2/rjfLBJtqBv8EOzCPa28')},
			nl : {js : fileInfo('/source/jsCalendar.lang.nl.js', 'sha384-As68w7gSu5n2NaIp0fWUultu4DgI70O6MSQyRH+Od6diIJGUZcBvics4ngTz9oUm')},
			no : {js : fileInfo('/source/jsCalendar.lang.no.js', 'sha384-dDRDenGpmJ0kVq2YcUz+VYSFeFfr8xKzLwoAI5EELbV8H7duDe0EGJ7yRor0utLK')},
			pt : {js : fileInfo('/source/jsCalendar.lang.pt.js', 'sha384-OuvqMzktEfrB5yX69l56nmgYr7te4ddjTTDRWVFrVNhwfqIKxmtfZ/FuUfNSRyP6')},
			ru : {js : fileInfo('/source/jsCalendar.lang.ru.js', 'sha384-kBE7kRvecDZhG8Iuhos+/KGlGRGhldEWtQY6fGpINKmVBy/wdkPuXFOwbuQgGDHc')},
			sk : {js : fileInfo('/source/jsCalendar.lang.sk.js', 'sha384-lmEicWSwUIuajZmSxrv5afJwh4cnWCv57GZk8txwIdnTn+0qquKzrUXU2lnI9iLz')},
			sv : {js : fileInfo('/source/jsCalendar.lang.sv.js', 'sha384-1v65xmPX5LIyMT0Xx4kYTJGs0m46w5rDMAlI0TEflquw9crO/JNQrzERWzYmAZSZ')},
			tr : {js : fileInfo('/source/jsCalendar.lang.tr.js', 'sha384-hNohV0ROcFbk5u0wNd418nVBT7GrMjKAcOeDyqrmMJJObFJvAg9LLmOVimRt4JZ1')},
			uk : {js : fileInfo('/source/jsCalendar.lang.uk.js', 'sha384-fXAL6Ls5vwxHAkPKW7JLSgv97fC8EsZu4Mzp/ixmQSOENuqx5nKqVfCHKYe8RY57')},
			vi : {js : fileInfo('/source/jsCalendar.lang.vi.js', 'sha384-DOWw8McjzVHs1i9fDFU2Dnxdnu2iegcNWzYCLp4f2Cu0Bp3Qi0BY32RbsLlYgDi4')},
			zh : {js : fileInfo('/source/jsCalendar.lang.zh.js', 'sha384-5hI0jP3xwvMxIRXx35fGWlFlB+WEyL514/3oJS9pUapLWsAQgUOTObZ73Uv6yDEZ')}
		},
		extension : {
			datepicker : (parameters.minified ?
				{js : fileInfo('/extensions/jsCalendar.datepicker.min.js', 'sha384-wtfZsrKmrTZWlxIwe+M5+4+N86yssnwnp+roPrrn2iZmZpYwiLuwjyiK7gPHiXaL')} :
				{js : fileInfo('/extensions/jsCalendar.datepicker.js', 'sha384-5OolMXEGgjxv0NWEN5CR+spNSn8lbAxaftqcI5b9FenGumJRH6YyLElB5UEknI5u')}
			)
		},
		theme : {
			default : (parameters.minified ?
				{css : fileInfo('/source/jsCalendar.min.css', 'sha384-CTBW6RKuDwU/TWFl2qLavDqLuZtBzcGxBXY8WvQ0lShXglO/DsUvGkXza+6QTxs0')} :
				{css : fileInfo('/source/jsCalendar.css', 'sha384-1eG5+BK6CGsH/Pv3yC+0Q17dhDvZTewIMAyQtzOe6Sdf3Y2mAAbIJUonVtuF0aBS')}
			),
			clean : (parameters.minified ?
				{css : fileInfo('/themes/jsCalendar.clean.min.css', 'sha384-+Q5KnhF5PDyAjoLJ73El+kWpIqwE45/tnCDNQUCoI6aC0I5NB3PjSNsJh7DNlSNl')} :
				{css : fileInfo('/themes/jsCalendar.clean.css', 'sha384-iu6Xy6xFoxfjWh3PAdkR3OnAUOSAqV+DzTV68jUTHcp+ChMcGcP/AHAQVffSk3ZH')}
			),
			darkseries : (parameters.minified ?
				{css : fileInfo('/themes/jsCalendar.darkseries.min.css', 'sha384-/Q810KfMjn0yvx2vItxJAmnH8Iv7/hrv7uy2ayVeB2ZEtA0KbEeMYWXWKrjPspw2')} :
				{css : fileInfo('/themes/jsCalendar.darkseries.css', 'sha384-pAl+cSXMJQfKRFQVA9kUU7CND001EQJRr/wg+E9b98uvyPhluvZ9hMOdkv2OFfr1')}
			),
			micro : (parameters.minified ?
				{css : fileInfo('/themes/jsCalendar.micro.min.css', 'sha384-3gCaZq7eDuL3x8LF+0UCFizRVc+c26pzZLa2YGmnLdg6w0eqcpNtND/YjdZeTHdr')} :
				{css : fileInfo('/themes/jsCalendar.micro.css', 'sha384-uA5g8zJY+Xx+zuLq7rlcHqcqz7JDu/b/GV5pcvmapGNf6MG+1AeY75pQOQZ+LjB6')}
			)
		}
	};
	// Loaded and loading files
	let files = {};

	// Create Deferred
	let makeDeferredPromise = function() {
		let _resolve;
		let _reject;
		const promise = new Promise((resolve, reject) => {
			_resolve = resolve;
			_reject = reject;
		});
		promise.resolve = _resolve;
		promise.reject = _reject;
		return promise;
	}

	// Script loader
	let loadScript = (info) => {
		// If already handled
		if (files.hasOwnProperty(info.path)) {
			if (files[info.path].loaded) return Promise.resolve();
			else return files[info.path].promise;
		}

		// Insert it on the files list
		files[info.path] = {
			loaded : false,
			promise : makeDeferredPromise()
		};

		// Prepare script
		let script = document.createElement('script');
		script.src = hostURL.toString() + info.path;
		if (parameters.integrity && info.integrity) script.setAttribute('integrity', info.integrity);
		if (parameters.crossorigin) script.setAttribute('crossorigin', 'anonymous');

		// Handle loading
		script.addEventListener('load', () => {
			files[info.path].loaded = true;
			files[info.path].promise.resolve();
		}, false);

		// Add it on page
		document.head.appendChild(script);

		return files[info.path].promise;
	}

	// Multiple Scripts loader
	let loadScripts = (info) => {
		let promises = [];
		for (let i = info.length - 1; i >= 0; i--) {
			promises.push(new Promise((resolve) => {
				loadScript(info[i]).then(() => {resolve(i);});
			}));
		}
		return Promise.all(promises);
	}
	
	// Styles loader
	let loadStyles = (info) => {
		for (let i = info.length - 1; i >= 0; i--) {
			loadStyle(info[i]);
		}
	}
	
	// Style loader
	let loadStyle = (info) => {
		// Prepare style
		let style = document.createElement('link');
		style.setAttribute('rel', 'stylesheet');
		style.href = hostURL.toString() + info.path;
		if (parameters.integrity && info.integrity) style.setAttribute('integrity', info.integrity);
		if (parameters.crossorigin) style.setAttribute('crossorigin', 'anonymous');
		// Add it on page
		document.head.appendChild(style);
	}

	// Load Core style
	loadStyle(paths.theme.default.css);

	// Load themes
	let themes = [];
	for (let i = parameters.theme.length - 1; i >= 0; i--) {
		// If theme exists
		if (paths.theme.hasOwnProperty(parameters.theme[i])) {
			themes.push(paths.theme[parameters.theme[i]].css);
		}
	}
	if (themes.length) {
		// Load theme files
		loadStyles(themes);
	}

	// Load languages
	let languages = [];
	for (let i = parameters.language.length - 1; i >= 0; i--) {
		// If language exists
		if (paths.language.hasOwnProperty(parameters.language[i])) {
			languages.push(paths.language[parameters.language[i]].js);
		}
	}
	// Load language files if any
	let onload_language = (languages.length) ? loadScripts(languages) : Promise.resolve();


	// Load core after languages
	let load_core = makeDeferredPromise();
	onload_language.then(() => {
		loadScript(paths.core.js).then(() => {
			load_core.resolve();
		});
	});

	// Load extensions after core
	let load_extension = makeDeferredPromise();
	let extensions = [];
	for (let i = parameters.extension.length - 1; i >= 0; i--) {
		// If extension exists
		if (paths.extension.hasOwnProperty(parameters.extension[i])) {
			extensions.push(paths.extension[parameters.extension[i]].js);
		}
	}
	if (extensions.length) {
		// Load theme files
		load_core.then(() => {
			loadScripts(extensions).then(() => {
				load_extension.resolve();
			});
		});
	}

	// After loading
	Promise.all([onload_language, load_core, load_extension]).then(() => {
		let ms = new Date().getTime() - loading_start;
		console.log('jsCalendar loader completed in ' + ms + ' ms');
	});
})();
