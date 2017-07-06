/**
 * Categories service
 */
(function() {

angular
	.module('invisionApp')

	.service('categoriesService', [
		'$http',
		'routesConfig',
		function ($http, routesConfig) {
			'use strict';

			function _getCategories() {
				return $http.get(routesConfig.categories.all())
					.then(function(response) {
						return response.data.rows;
					});
			}

			function _getCategory(catId) {
				return _getCategories()
					.then(function(categories) {
						var categoriesLength = categories.length;

						if (categoriesLength && categoriesLength < 1) {
							return null;
						}

						for (var index = 0; index < categoriesLength; index++) {
							if (parseInt(categories[index].id, 10) === parseInt(catId, 10)) {
								return categories[index];
							}
						}
						
					});
			}

			return {
				getCategories: _getCategories,
				getCategory: _getCategory
			};
		}
	]);

})();
