angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $http, $ionicModal, $ionicHistory, $timeout, $ionicPopup, $state, $window, $ionicLoading, AppServicesApi) {
            // Form data for the login modal
            $scope.login = function (form, record)
            {
                $scope.mainURL = 'http://studio-tesseract.co/voucherperks/';
                //$scope.mainURL = 'http://localhost/voucherperks/';
                if (form.$valid)
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
                    AppServicesApi.doLogin({
                        req_url: $scope.mainURL + 'rest/login',
                        data: record
                    }).then(function success(resp) {
                        $ionicLoading.hide();
                        var el = angular.element(document.querySelector('#loginMsg'));
                        if (resp.data.error == false)
                        {
                            el.html('<p class="assertive">* Invalid Email/Password !</p>');
                        } else if (resp.data.success == true)
                        {
                            $scope.loggedIn = 1;
                            $scope.ID = resp.data.record['USER_ID'];
                            $scope.Username = resp.data.record['USERNAME'];
                            ///console.log($scope.Username);
                            localStorage.setItem('uid', $scope.ID);
                            localStorage.setItem('username', $scope.Username);
                            localStorage.setItem('loggedIn', $scope.loggedIn);
                            $state.go('app.categories');
                            $timeout(function () {
                                $window.location.reload(true);
                            });
                        }

                    },
                            function error(resp)
                            {
                                $ionicLoading.hide();
                            }
                    );
                }

            };
        })
        .controller('ForgetPassCtrl', function ($scope, $http, $ionicModal, $ionicHistory, $timeout, $ionicPopup, $state, $window, $ionicLoading, AppServicesApi) {
            $scope.mainURL = 'http://studio-tesseract.co/voucherperks/';
            $scope.getPassword = function (form, data) {
                if (form.$valid)
                {
                    // Setup the loader
                    $ionicLoading.show({
                        content: 'Loading',
                        animation: 'fade-in',
                        showBackdrop: true,
                        maxWidth: 200,
                        showDelay: 0
                    });
                    $ionicLoading.show({template: 'wait....'});
                    AppServicesApi.forgetPassword({
                        req_url: $scope.mainURL + 'rest/forgetpass',
                        data: data
                    }).then(function (resp) {
                        $ionicLoading.hide();
                        var el = angular.element(document.querySelector('#successMsg'));
                        if (resp.data)
                        {
                            el.html('<p class="assertive">New Password sent to your email !</p>');
                            $timeout(function () {
                                $window.location.reload(true);
                            }, 2000);
                        }

                    });
                }
            };
        });