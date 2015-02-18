/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

$(function(){
   $('#login').click(function(){
       $('#welcome').toggle();
   });

    ////global timeout references we can use to stop them
    //var timeouts = {};
    //
    //
    ////timer demo function with normal/self-adjusting argument
    //function timer() {
    //    //create the timer speed, a counter and a starting timestamp
    //    //var speed = 50,
    //    //    counter = 0,
    //    //    start = new Date().getTime();
    //
    //    //timer instance function
    //    function instance() {
    //
    //    }
    //
    //}
    ////bind a submit handler to the normal form
    //$('#submit').click(function(){
    //    //call the timerdemo function with no flags
    //    timer(this, false, false);
    //
    //    //cancel the normal submit
    //    return false;
    //
    //});
    //
    ////bind a reset handler to stop it
    //
    //
    //    $('#reset').click(function(){
    //        //stop the form's timer
    //        window.clearTimeout(timeouts[this.id]);
    //
    //        //cancel the normal reset
    //        return false;
    //
    //    });

    var Stopwatch = function(elem, options) {

        var timer       = createTimer(),
            startButton = $('#submit',start),
            stopButton  = $('#stop', stop),
            resetButton = $('#reset', reset),
            offset,
            clock,
            interval;

        // default options
        options = options || {};
        options.delay = options.delay || 1;


        // initialize
        reset();

        // private functions
        function createTimer() {
        }

        function createButton(action, handler) {
            $('#submit').click(function(event) {
                handler();
                event.preventDefault();
            });
            return;
        }

        function start() {
            if (!interval) {
                offset   = Date.now();
                interval = setInterval(update, options.delay);
            }
        }

        function stop() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }

        function reset() {
            clock = 0;
            render(0);
        }

        function update() {
            clock += delta();
            render();
        }

        function render() {
            //timer.innerHTML = clock/1000;
        }

        function delta() {
            var now = Date.now(),
                d   = now - offset;

            offset = now;
            return d;
        }

        // public API
        this.start  = start;
        this.stop   = stop;
        this.reset  = reset;
    };


// basic examples
    var elems = document.getElementsByClassName("basic");

    for (var i=0, len=elems.length; i<len; i++) {
        new Stopwatch(elems[i]);
    }




});



