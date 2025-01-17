import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { IronJsonpLibraryBehavior } from '@polymer/iron-jsonp-library/iron-jsonp-library.js';

/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at https://polymer.github.io/LICENSE.txt
The complete set of authors may be found at https://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at https://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at https://polymer.github.io/PATENTS.txt
*/
/*
Dynamically loads Google JavaScript API `gapi`, firing the `js-api-load` event when ready.

Any number of components can use `<google-js-api>` elements, and the library will only be loaded once.

##### Example

    <google-js-api></google-js-api>
    <script>
      var api = document.querySelector('google-js-api');
      api.addEventListener('js-api-load', function(e) {
        console.log('API loaded', gapi);
      });
    </script>
*/
Polymer({

  is: 'google-js-api',

  behaviors: [
    IronJsonpLibraryBehavior,
  ],

  properties: {

    /** @private */
    libraryUrl: {
      type: String,
      value: 'https://apis.google.com/js/api.js?onload=%%callback%%',
    },

    /**
     * Fired when the API library is loaded and available.
     * @event js-api-load
     */
    /**
     * Name of event fired when library is loaded and available.
     */
    notifyEvent: {
      type: String,
      value: 'js-api-load',
    },
  },

  get api() {
    return gapi;
  },

});
