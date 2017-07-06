/**
 * Slideshow controller
 */
(function() {
angular
	.module('invisionApp')

	.controller('SlideshowController', [
		'$ionicHistory',
		'$window',
		'$state',
		'$scope',
		'$ionicPlatform',
		function ($ionicHistory, $window, $state, $scope, $ionicPlatform) {
			'use strict';

			var vm = this;

			vm.skipIntro = skipIntro;

			function skipIntro() {
				$window.localStorage.setItem('showIntro', false);
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$state.go('app.login', {}, {location: "replace", reload: true});
			}

			$ionicPlatform.ready(function() {
				if ($window.localStorage.getItem('showIntro') !== 'true' && $state.params.forceShow === 'false') {
					skipIntro();
				} else if ($state.params.forceShow === 'false') {
					$scope.$emit('hideMenu', true);
				}
			});
		}
	]);

})();
