/**
 * trustHtml filter
 */	
(function() {
angular
	.module('invisionApp')

	.filter('trustHtml', [
		'$sce',
		function ($sce) {
			'use strict';

			return function (input) {
				return $sce.trustAsHtml(input);
			};
		}
	]);
})();