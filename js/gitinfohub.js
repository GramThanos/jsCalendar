/*
 * GitInfoHub v0.0.1-beta
 *
 *
 * MIT License
 *
 * Copyright (c) 2017 Grammatopoulos Athanasios-Vasileios
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

var GitInfoHub = (function(){

    // Constructor
    function GitInfoHub(){
        // No parameters
        if (arguments.length === 0) {
            // Error
            throw new Error("GitInfoHub: No parameters were given.");
        }

        // Check if arguments are all strings
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== "string") {
                // Error
                throw new Error("GitInfoHub: Argument " + i + " is not a string.");
            }
        }

        // Url or Username was given
        if (arguments.length === 1) {
            // Url was given
            if (arguments[0].substring(0,4) === "http") {
                var url = arguments[0].match(/https?:\/\/github\.com\/([^\/]+)\/([^\/]+)/i);
                if (!url) {
                    // Error
                    throw new Error("GitInfoHub: Failed to parse url.");
                }
                // Username
                this.user = url[1];
                // Repository
                this.repo = url[2];
            }
            // Error
            else {
                throw new Error("GitInfoHub: Invalid parameter.");
            }
        }

        // User and Repo
        else if (arguments.length === 2) {
            // Username
            this.user = arguments[0];
            // Repository
            this.repo = arguments[1];
        }

        // Too many parameters
        else {
            throw new Error("GitInfoHub: Too many parameters were given.");
        }

        // Init other variables
        this.listeners = [];
    };

    // Version
    GitInfoHub.version = "v0.0.1-beta";

    // Get version info
    GitInfoHub.prototype.getVersion = function(tag, callback) {
        // Create random hash
        var hash;
        var prevar = "GitInfoHub_Listener_";
        do {
            hash = this.randHash(16);
        } while (window.hasOwnProperty(prevar + hash));

        // Create listener
        var name = prevar + hash;
        var that = this;
        window[name] = function(responce) {
            delete window[name];
            setTimeout(function(){
                callback(responce.data);
            }, 0);
        };

        // Create script
        var script = document.createElement('script');
        script.setAttribute("src", "https://api.github.com/repos/" + this.user + "/" + this.repo + "/releases/tags/" + tag + "?callback=" + name);
        script.addEventListener("load", function(){
            this.parentElement.removeChild(this);
        }, false);
        document.body.appendChild(script);
    };

    // Create a random hash
    GitInfoHub.prototype.randHash = function(n) {
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        var hash = "";
        for (var i = 0; i < n; i++) {
            hash += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return hash;
    };

    // Return
    return GitInfoHub;
})();


/*
var repo = new GitInfoHub("GramThanos", "jsCalendar");
repo.getVersion("v1.4.1", function(data){
    console.log(data.assets[0].download_count);
});
*/