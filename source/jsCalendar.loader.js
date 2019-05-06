/*
 * jsCalendar loader v1.0.0-alpha
 * Works with jsCalendar v1.4.4
 * This is currently experimental
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
			{js : fileInfo('/source/jsCalendar.min.js', 'sha384-0LaRLH/U5g8eCAwewLGQRyC/O+g0kXh8P+5pWpzijxwYczD3nKETIqUyhuA8B/UB')} :
			{js : fileInfo('/source/jsCalendar.js', 'sha384-cmurOusLTBPJV2zIeQtv8E1MAZRuYEgcFNrOYCeNypDeHEhubywEwdyaguEkrDy4')}
		),
		language : {
			be : {js : fileInfo('/source/jsCalendar.lang.be.js', 'sha384-czOMAb4auqx/S7EgTYgb/Sb3xNKzvCN3heba5z2IR80vAI72y55KvGpYQMOJF0Ul')},
			ca : {js : fileInfo('/source/jsCalendar.lang.ca.js', 'sha384-qzGOaC9zqJRFiV0hpjawSZ5AZyBN/5LfGURBE+pQVG6jZZG4hZjJI7l8ob7UUsfI')},
			de : {js : fileInfo('/source/jsCalendar.lang.de.js', 'sha384-i0GkTTXTirBg3whOHw5AqlI80IINcvOfx2HjQ/x4uqJ+wsB465gvhaekGGxPlxVX')},
			es : {js : fileInfo('/source/jsCalendar.lang.es.js', 'sha384-HnSecKq1jgs1/eJQQpOiIb4Wtq7hlMC6nsooaNN+1JPTdzYSbiMP9f8xqKjque1e')},
			fr : {js : fileInfo('/source/jsCalendar.lang.fr.js', 'sha384-Ob75mVgpo9t5GyveJWKmg21yW1VCLgGe15lpXGHPbfizJmbuG0JnxdwOg7sbYelv')},
			gr : {js : fileInfo('/source/jsCalendar.lang.gr.js', 'sha384-PRRiiI0gLDo7hU5jD+aJQxbUSjjXHJeL0CdFAynqIWD9XATAYPQpKQkwrqjM+b8t')},
			hu : {js : fileInfo('/source/jsCalendar.lang.hu.js', 'sha384-yP2k8rRYSOiAc2PfxQ/WAFjMVRoA8AMxGZhlutbHXDc9vGMeokM2qyF2fLHaGPxo')},
			it : {js : fileInfo('/source/jsCalendar.lang.it.js', 'sha384-3PiSuWThRXpAvOjasZXyIrVl5H2x296VPhp9D0NebW9V5rcHzCSx4Dh5WRd+pQVO')},
			ja : {js : fileInfo('/source/jsCalendar.lang.ja.js', 'sha384-O/JkPTslqFkNst65hIikWD7NVsNBRN2vGvprEt9n9tXPKFwocawTwKvwAnPOOZRc')},
			nl : {js : fileInfo('/source/jsCalendar.lang.nl.js', 'sha384-pitfgw0cn6lUL67KU0jVykK7GIZnS0xqH4nBIIgGo6rSSADgyHdWfoDvoR78juHd')},
			no : {js : fileInfo('/source/jsCalendar.lang.no.js', 'sha384-exBlQuh0Apw5DoBAJVxPYJRKYrQjOScXHmQHX9ZA/jZb92Ec6NQjOddl/GexPkCS')},
			pt : {js : fileInfo('/source/jsCalendar.lang.pt.js', 'sha384-NF3X/E9s0p9PqeJxs+kx2xFHOAfiuNlGpIiwzLBET1Y0pejnfmOm5DJhn6ioTpCr')},
			ru : {js : fileInfo('/source/jsCalendar.lang.ru.js', 'sha384-xVQY3RcL7F/s9lcv9KNRyquT4kypFWf4OsQPGvpOcB70qhCvQ5P5KdhSygsc6GQg')},
			sk : {js : fileInfo('/source/jsCalendar.lang.sk.js', 'sha384-fusvqbkUQKgP3X7NX3lUxQEc5yG0V1vbZx8q246R4Bsl/Mzichrn3n8rOWOvJpSB')},
			sv : {js : fileInfo('/source/jsCalendar.lang.sv.js', 'sha384-fisTE5VLKPsxo5RbFtTLJ1T0j6y8a3SlylIzHZaXSErsJNIy3P82uGhomnRoPc4m')},
			tr : {js : fileInfo('/source/jsCalendar.lang.tr.js', 'sha384-9u6ZxP0FkigNhAYvsyxqA97/kjtLLv3cdS5isu5KP/vjQlguqdG76uS4UOEoNk7y')},
			uk : {js : fileInfo('/source/jsCalendar.lang.uk.js', 'sha384-tVzYxj0/QLUOY8QNd3YSzik+Zi4ShGbZTMd72rTA3xTtQMyrFquKRPsp1nsZdMJl')},
			zh : {js : fileInfo('/source/jsCalendar.lang.zh.js', 'sha384-V0QPacMFDmO6dM4PsEqgwCew+6CzJCk0LaaL/cRM1+LQZjoh5GH64OHX+RNLuORd')}
		},
		extension : {
			datepicker : (parameters.minified ?
				{js : fileInfo('/extensions/jsCalendar.datepicker.min.js', 'sha384-+kCc/DUyMCZKRKBUju8rYWlpPstskB0TMl/gO6Qu1yDvtdZTdKBWUv8slo8vn7x/')} :
				{js : fileInfo('/extensions/jsCalendar.datepicker.js', 'sha384-A9jyu6xqyitRcMEZEgHbi1znFOFMSqCCD/Htdwy7QCbR6Yw3FDygm8qgpLJx1VG0')}
			)
		},
		theme : {
			default : (parameters.minified ?
				{css : fileInfo('/source/jsCalendar.min.css', 'sha384-44GnAqZy9yUojzFPjdcUpP822DGm1ebORKY8pe6TkHuqJ038FANyfBYBpRvw8O9w')} :
				{css : fileInfo('/source/jsCalendar.css', 'sha384-IqymsN08KC67WHkPOiAlEL5w5cmUFIkVI/NR/j1QOYD6bzuZ/JdXGVTHa0sfWnci')}
			),
			clean : (parameters.minified ?
				{css : fileInfo('/themes/jsCalendar.clean.min.css', 'sha384-KVMZD/q6PZDK3xYHB7uJwJbE8VGNCaJWAQQ+9i/MsP8VV4eLGQdJRzHjfVACCBMU')} :
				{css : fileInfo('/themes/jsCalendar.clean.css', 'sha384-ICEMsS1kLS8RctRzIh3D3wXGIGNXdAeq/Cox8tRla+pje3WXoVOd+J0LR7AFXt9q')}
			),
			darkseries : (parameters.minified ?
				{css : fileInfo('/themes/jsCalendar.darkseries.min.css', 'sha384-ZbdiJ7QkbjnGdb+XFoRs+hUWQqmkaWxNaczaUzb8rhUIl+D+ZaAiqpxse5Nn/rBk')} :
				{css : fileInfo('/themes/jsCalendar.darkseries.css', 'sha384-1WOpRS9VWHABAzTAZ4pqBzNb+4UGfNq6qvWoz6ROv89xiHFu0SDj8WGIcQo584Jr')}
			),
			micro : (parameters.minified ?
				{css : fileInfo('/themes/jsCalendar.micro.min.css', 'sha384-aOgaUk5MAJeF3DMxm62ZLQdwcwGJHAL+x2HKDLeL0KGzq58mbx1NmWBufXj6av+T')} :
				{css : fileInfo('/themes/jsCalendar.micro.css', 'sha384-trm9scV3zUQrRLK6sHRClCHa7P/k5N9ZJVRx9UlyE3BZUcont3CLSSC80VWlKXCj')}
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
