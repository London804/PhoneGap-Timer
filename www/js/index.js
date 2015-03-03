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

    //$('#submit').click(function(){
    //    var start = setInterval(updateDisplay, 1000), // every millisecond call updateDisplay
    //        timer = $('#timer'),
    //        value = parseInt($(timer).find('.value').text(), 10);
    //
    //
    //
    //    function updateDisplay(){
    //        value++;
    //        var myDate = new Date(null, null, null, null, null, value).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    //        $(timer).find('.value').text(myDate);
    //        if (value >= 60) {
    //            $('#sec').replaceWith("min");
    //        }
    //        if (value >= 3600) {
    //            $('#sec').replaceWith("hrs");
    //        }
    //        if (value >= 86400) {
    //            value = 0;
    //            console.log('stop and take a break, you have been working over 24hrs!');
    //
    //        }
    //    }
    //
    //    $('#stop').click(function(){
    //        clearInterval(start);
    //    });
    //    $('#reset').click(function(){
    //        clearInterval(start);
    //        value = parseInt($(timer).find('.value').text('0'));
    //    });
    //    //
    //    //var start_dt = Date.now();
    //    //var current_dt = Date.now();
    //    //var elapsed_ms = current_dt - start_dt;
    //    //function format_timer(ms) {
    //    //    var s = (ms / (      1000)) % 60;
    //    //    var m = (ms / (   60*1000)) % 60;
    //    //    var h = (ms / (60*60*1000));
    //    //    return h + ":" + ( m<10 ? "0"+m : m ) + ":" + ( s<10 ? "0"+s : s );
    //    //    console.log(format_timer(ms));
    //    //}
    //
    //});

    var starting_ms ;
    var elapsed ;
    var $timer = $('#timer .value');
    var $hrs = $('#elapsedtime #hrs');
    var $min = $('#elapsedtime #min');
    var $sec = $('#elapsedtime #sec');
    var start;

    function updateDisplay() {
        elapsed.setTime(Date.now() - starting_ms);
        $timer.text(elapsed.toUTCString().substr(17, 8));
        //console.log($timer.text(elapsed.toUTCString()));

        var x = $timer.toString();

        console.log(x);

        //next steps
        //how do I get the value of the last two characters in the object $timer?
        //Integrate OAuth
        //See if you can save time using Parse


        $hrs.text(elapsed.getUTCHours() );
        $min.text(elapsed.getUTCMinutes() );
        $sec.text(elapsed.getUTCSeconds() );
    }


    $('#submit').click(function(){
        if( start )
            clearInterval(start);
        starting_ms = Date.now();
        elapsed     = new Date(0);

        start = setInterval(updateDisplay, 1000); // every millisecond call updateDisplay

        $('#stop').click(function(){
            clearInterval(start);
        });
        $('#reset').click(function(){
            clearInterval(start);


            starting_ms = Date.now();
            updateDisplay();
        });

    });







});



