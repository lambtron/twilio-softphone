'use strict';

twilioSoftphone.controller('softphoneController',
  ['$scope', '$http', 'twilio',
	function ($scope, $http, twilio)
{
  // Initialize variables.
  var SP = $scope.SP = {};

  // Retrieve token from server to start client.
  $http.get('/token', {'client':'test'})
  .success(function (token) {
    twilio.setup(token, {debug: true});
  })
  .error(function (data) {
    console.log('Error: ');
    console.log(data);
  });


  // Twilio Client functions. ==================================================
  twilio.ready(function (device) {
    // Device is online! Bring it on.
  });

  twilio.offline(function (device) {
    // Network connection dropped; device cannot receive incoming connections.
  });

  twilio.error(function (err) {
    // An error occurred.
    console.log('Device error: ' + err.message);
  });

  twilio.disconnect(function (conn) {
    // Connection is closed.
  });

  twilio.onConnect(function (conn) {
    // Connection is opened (either device initiated it or accepted an incoming
    // connection).
  });

  twilio.incoming(function (conn) {
    // Incoming connection from an outbound REST call or a TwiML <Dial> to this
    // device is made.
  });

  twilio.cancel(function (conn) {
    // Incoming connection is canceled by caller before it is accepted by
    // device.
  });

}]);