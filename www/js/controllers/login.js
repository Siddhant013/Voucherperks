/**
 * Login controller
 */
(function() {
angular
	.module('invisionApp')

	.controller('LoginController', [
		'$ionicSideMenuDelegate',
		'$state',
		'$ionicHistory',
		function ($ionicSideMenuDelegate, $state, $ionicHistory) {
			'use strict';

			$ionicSideMenuDelegate.canDragContent(false);

			var vm = this;

			vm.doLogin = doLogin;

			function doLogin() {
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$state.go('app.categories', {}, {location: "replace", reload: true});
			}
		}
	]);

})();
