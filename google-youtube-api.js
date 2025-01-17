import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { IronJsonpLibraryBehavior } from '@polymer/iron-jsonp-library/iron-jsonp-library.js';

/*
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at https://polymer.github.io/LICENSE.txt
The complete set of authors may be found at https://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at https://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at https://polymer.github.io/PATENTS.txt
*/
/*
Dynamically loads the Google Youtube Iframe API, firing the `api-load` event when ready.

Any number of components can use `<google-youtube-api>` elements, and the library will only be loaded once.

https://developers.google.com/youtube/iframe_api_reference
*/
Polymer({

  is: 'google-youtube-api',

  behaviors: [
    IronJsonpLibraryBehavior,
  ],

  properties: {

    /** @private */
    libraryUrl: {
      type: String,
      value: 'https://www.youtube.com/iframe_api',
    },

    /**
     * Fired when the API library is loaded and available.
     * @event api-load
     */
    /**
     * Name of event fired when library loads.
     */
    notifyEvent: {
      type: String,
      value: 'api-load',
    },

    callbackName: {
      type: String,
      value: 'onYouTubeIframeAPIReady',
    },

  },

  get api() {
    return YT;
  },

});
