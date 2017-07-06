/**
 * Items service
 */
(function() {

angular
	.module('invisionApp')

	.service('itemsService', [
		'$http',
		'routesConfig',
		function ($http, routesConfig) {
			'use strict';

			function _getItems() {
				return $http.get(routesConfig.items.all())
					.then(function(response) {
						return response.data.rows;
					});
			}

			function _getItemsByCat(catId) {
				return _getItems()
					.then(function(rowItems) {
						var itemsLength = rowItems.length,
							items = [];

						if (itemsLength && itemsLength < 1) {
							return null;
						} else {
							for (var index = 0; index < itemsLength; index++) {
								if (parseInt(rowItems[index].category, 10) === parseInt(catId, 10)) {
									items.push(rowItems[index]);
								}
							}

							return items;
						}
					});
			}

			function _getItemById(itemId) {
				return _getItems()
					.then(function(items) {
						var itemsLength = items.length;

						if (itemsLength < 1) {
							return null;
						}

						for (var index = 0; index < itemsLength; index++) {
							if (parseInt(items[index].id, 10) === parseInt(itemId, 10)) {
								return items[index];
							}
						}

					});
			}

			return {
				getItems: _getItems,
				getItemsByCat: _getItemsByCat,
				getItemById: _getItemById
			};
		}
	]);

})();
