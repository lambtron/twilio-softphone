'use strict';

// Services.

// Twilio Client wrapper.
twilioSoftphone.factory('twilio', function ($rootScope) {
  return {
    setup: function (token, params, callback) {
      Twilio.Device.setup(token, params);
    },
    ready: function (callback) {
      Twilio.Device.ready(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    offline: function (callback) {
      Twilio.Device.offline(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    incoming: function (callback) {
      Twilio.Device.incoming(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    cancel: function (callback) {
      Twilio.Device.cancel(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    onConnect: function (callback) {
      Twilio.Device.connect(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    connect: function (params) {
      // Returns a Twilio.Connection object.
      return Twilio.Device.connect(params);
    },
    disconnectAll: function () {
      Twilio.Device.disconnectAll();
    },
    disconnect: function (callback) {
      Twilio.Device.disconnect(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    presence: function (callback) {
      Twilio.Device.presence(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    error: function (callback) {
      Twilio.Device.error(function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(Twilio.Device, args);
        });
      });
    },
    status: function () {
      return Twilio.Device.status();
    }
  };
});