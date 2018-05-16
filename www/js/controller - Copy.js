myApp.controller("controller", function($scope){
	
	// Fetch Device info from Device Plugin
	$scope.alertDeviceInfo = function() {
		alert('ram1');
		var deviceInfo = ('Device Platform: ' + device.platform + '\n'
				+ 'Device Version: ' + device.version + '\n' + 'Device Model: '
				+ device.model + '\n' + 'Device UUID: ' + device.uuid + '\n');

		navigator.notification.alert(deviceInfo);
	};

	// Fetch location info from GeoLocation Plugin
	$scope.alertGeoLocation = function() {
		alert('ram');
		var onSuccess = function(position) {
			navigator.notification.alert('Latitude: '
					+ position.coords.latitude + '\n' + 'Longitude: '
					+ position.coords.longitude + '\n' + 'Altitude: '
					+ position.coords.altitude + '\n' + 'Accuracy: '
					+ position.coords.accuracy + '\n' + 'Altitude Accuracy: '
					+ position.coords.altitudeAccuracy + '\n' + 'Heading: '
					+ position.coords.heading + '\n' + 'Timestamp: '
					+ position.timestamp + '\n');
		};
		navigator.geolocation.getCurrentPosition(onSuccess);

	};

	// Makes a beep sound
	$scope.beepNotify = function() {
		alert('ram2');
		navigator.notification.beep(1);
	};

	// Vibrates the phone
	$scope.vibrateNotify = function() {
		alert('ram3');
		navigator.notification.vibrate(1000);
	};
});