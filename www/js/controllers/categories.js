angular.module('categories.controllers', [])

        .controller('CategoriesCtrl', function ($scope, $http, $ionicModal, $ionicHistory, $timeout, $ionicPopup, $state, $window, $ionicLoading, AppServicesApi) {

            $scope.USERNAME = localStorage.getItem('username');

            //Get Category Coupon
            $scope.getCategoryCoupon = function (argID)
            {
                $state.go('app.category', {"categoryId": argID});
            };
        })

        //Category Item Controller
        .controller('CategoriesItemCtrl', function ($scope, $http, $ionicModal, $ionicHistory, $timeout, $ionicPopup, $state, $window, $ionicLoading, AppServicesApi) {

            //Get Category ID
            $scope.arr = [];
            $scope.img = '';
            var record = function ()
            {
                // Setup the loader
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                $ionicLoading.show({template: 'Loading....'});
                $scope.mainURL = 'http://studio-tesseract.co/voucherperks/';
                //$scope.mainURL = 'http://localhost/voucherperks/';
                $scope.cat_id = $state.params.categoryId;
                AppServicesApi.getCoupons({
                    req_url: $scope.mainURL + 'rest/getCoupons',
                    data: {id: $scope.cat_id}
                }).then(function success(resp) {
                    $ionicLoading.hide();
                    $scope.arr = resp.data;
                },
                        function error(resp)
                        {
                            $ionicLoading.hide();
                        }
                );
            };
            record();
        });