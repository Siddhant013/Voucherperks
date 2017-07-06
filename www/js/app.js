/**
 * SurfIT invisionApp
 */
angular.module('invisionApp', ['ionic', 'srfSocialSharing', 'ngCordova', 'APIModule', 'starter.controllers', 'categories.controllers', 'signup.controllers'])

        .run([
            '$ionicPlatform',
            '$window',
            function ($ionicPlatform, $window) {
                $ionicPlatform.ready(function () {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    if (window.cordova && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        cordova.plugins.Keyboard.disableScroll(true);
                    }
                    if (window.StatusBar) {
                        // org.apache.cordova.statusbar required
                        StatusBar.styleDefault();
                    }

                    $window.localStorage.setItem('showIntro', true);

                    var notificationOpenedCallback = function () {};
                    // Update with your OneSignal AppId and googleProjectNumber before running.
                    if ($window.plugins && $window.plugins.OneSignal) {
                        $window.plugins.OneSignal.init('bff790de-6c7b-4550-9202-0acebb924b28', {googleProjectNumber: '295165547597'}, notificationOpenedCallback);
                    }
                });
            }
        ])

        .config([
            '$stateProvider',
            '$urlRouterProvider',
            '$ionicConfigProvider',
            function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
                $ionicConfigProvider.tabs.position('top');
                $ionicConfigProvider.tabs.style('standard');

                $stateProvider
                        .state('app', {
                            url: '/app',
                            abstract: true,
                            templateUrl: 'templates/menu.html',
                            controller: 'ApplicationController as appCtrl'
                        })
                        .state('app.categories', {
                            url: '/categories',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/categories.html',
                                    controller: 'CategoriesCtrl'
                                }
                            }
                        })
                        .state('app.category', {
                            url: '/category/:categoryId',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/category.html',
                                    controller: 'CategoriesItemCtrl'
                                }
                            }
                        })
//			.state('app.category', {
//				url: '/categories/:categoryId',
//				views: {
//					'menuContent': {
//						templateUrl: 'templates/category.html',
//						controller: 'ItemsController as itemsCtrl'
//					}
//				}
//			})
//			.state('app.category-featured', {
//				url: '/categories/featured/:categoryId',
//				views: {
//					'menuContent': {
//						templateUrl: 'templates/category-featured.html',
//						controller: 'ItemsController as itemsCtrl'
//					}
//				}
//			})
                        .state('app.item', {
                            url: '/items/:itemId',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/item.html',
                                    controller: 'ItemsController as itemCtrl'
                                }
                            }
                        })
                        .state('app.comments', {
                            url: '/comments',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/comments.html',
                                    controller: 'CommentsController as commentsCtrl'
                                }
                            }
                        })
//			.state('app.login', {
//				url: '/login',
//				views: {
//					'menuContent': {
//						controller: 'LoginController as loginCtrl',
//						templateUrl: 'templates/login.html'
//					}
//				}
//			})
                        .state('login', {
                            cache: false,
                            url: '/login',
                            templateUrl: 'templates/login.html',
                            controller: 'AppCtrl'
                        })
                        .state('app.register', {
                            url: '/register',
                            views: {
                                'menuContent': {
                                    controller: 'SignUp',
                                    templateUrl: 'templates/register.html'
                                }
                            }
                        })
                        .state('app.terms', {
                            url: '/terms',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/terms.html'
                                }
                            }
                        })
                        .state('app.full-voucher-page', {
                            url: '/full-voucher-page',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/full-voucher-page.html'
                                }
                            }
                        })
                        .state('app.enter-user-pin', {
                            url: '/enter-user-pin',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/enter-user-pin.html'
                                }
                            }
                        })
                        .state('app.forgetpassword', {
                            url: '/forgetpassword',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/forget-password.html',
                                    controller: 'ForgetPassCtrl'
                                }
                            }
                        })
                        .state('app.enter-merchant-pin', {
                            url: '/enter-merchant-pin',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/enter-merchant-pin.html'
                                }
                            }
                        })
                        .state('app.transaction-complete', {
                            url: '/transaction-complete',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/transaction-complete.html'
                                }
                            }
                        })
                        .state('app.redemption-details', {
                            url: '/redemption-details',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/redemption-details.html'
                                }
                            }
                        })
                        .state('app.my-information-pin-reset', {
                            url: '/my-information-pin-reset/:userid',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/my-information-pin-reset.html',
                                    controller: 'ProfileCtrl'
                                }
                            }
                        })
                        .state('app.search', {
                            url: '/search',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/search.html'
                                }
                            }
                        })
                        .state('app.favorite', {
                            url: '/favorite',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/favorite.html'
                                }
                            }
                        })
                        .state('app.near-me', {
                            url: '/near-me',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/near-me.html'
                                }
                            }
                        })
                        .state('app.trending', {
                            url: '/trending',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/trending.html'
                                }
                            }
                        })
                        .state('app.how-it-works', {
                            url: '/how-it-works',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/how-it-works.html'
                                }
                            }
                        })
                        .state('app.menu-list', {
                            url: '/menu-list',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/menu-list.html'
                                }
                            }
                        })
                        .state('app.slideshow', {
                            url: '/slideshow/:forceShow',
                            views: {
                                'menuContent': {
                                    templateUrl: 'templates/slideshow.html',
                                    controller: 'SlideshowController as slideshowCtrl'
                                }
                            }
                        });

                // if none of the above states are matched, use this as the fallback
                $urlRouterProvider.otherwise(function ($injector, $location) {
                    var state = $injector.get('$state');
                    state.go('login', {'forceShow': false});
                    return $location.path();
                });
            }
        ]);
