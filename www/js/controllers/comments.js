/**
 * Comments controller
 */
(function() {
angular
	.module('invisionApp')

	.controller('CommentsController', [
		'commentsService',
		function (commentsSvc) {
			'use strict';

			var vm = this;
			
			commentsSvc.getComments().then(function(comments) {
				vm.comments = comments.data.rows;
			});

		}
	]);

})();
