/**
 * Routes Configuration
 */
angular
	.module('invisionApp')

	.constant('routesConfig', (function () {
		'use strict';

		var rootRoutesConfig = {
			comments: 'feeds/comments.json',
			categories: 'feeds/categories.json',
			items: 'feeds/items.json'
		};

		var routesConfig = {
			comments: {
				all: function () {
					return rootRoutesConfig.comments;
				}
			},
			categories: {
				all: function () {
					return rootRoutesConfig.categories;
				}
			},
			items: {
				all: function () {
					return rootRoutesConfig.items;
				}
			}
		}

		return routesConfig;
	})());
