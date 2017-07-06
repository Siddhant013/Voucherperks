/**
 * Items controller
 */
(function() {
angular
	.module('invisionApp')

	.controller('ItemsController', [
		'$q',
		'$stateParams',
		'itemsService',
		'categoriesService',
		function ($q, $stateParams, itemsSvc, categoriesSvc) {
			'use strict';

			var vm = this;

			if ($stateParams && $stateParams.hasOwnProperty('categoryId')) {
				var categoriesQ = categoriesSvc.getCategory(parseInt($stateParams.categoryId, 10)),
					itemsQ = itemsSvc.getItemsByCat(parseInt($stateParams.categoryId, 10));

				$q.all([categoriesQ, itemsQ])
					.then(function(response) {
						vm.category = response[0];
						return response[1]
					})
					.then(setItems);

			} else if ($stateParams && $stateParams.hasOwnProperty('itemId')) {

				itemsSvc.getItemById(parseInt($stateParams.itemId, 10))
					.then(setItem)
					.then(function(response) {
						return categoriesSvc.getCategory(response);
					})
					.then(function(response) {
						vm.category = response;
					})
			}

			function setItems(items) {
				vm.items = items;
			}

			function setItem(item) {
				vm.item = item;
				vm.share = {
					'networks': ['facebook', 'twitter', 'whatsapp', 'anywhere', 'sms', 'email'],
					'message': item.title,
					'subject': item.category.title,
					'file': item.img,
					'link': item.link,
					'toArr': ['info@surfit.mobi'],
					'bccArr': [],
					'ccArr': [],
					'phone': '098765432'
				}
				return item.category;
			}
		}
	]);

})();
