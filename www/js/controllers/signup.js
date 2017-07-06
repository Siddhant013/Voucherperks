angular.module('signup.controllers', [])

        .controller('SignUp', function ($scope, $http, $ionicModal, $window, $ionicPopup, $timeout, $state, $ionicLoading, AppServicesApi) {
            $scope.mainURL = 'http://studio-tesseract.co/voucherperks/';

            //Signup 
            $scope.register = function (form, response)
            {
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
                    AppServicesApi.SingnUp({
                        req_url: $scope.mainURL + 'rest/signup',
                        data: response
                    }).then(function (resp) {
                        $ionicLoading.hide();
                        var el = angular.element(document.querySelector('#regMsg'));
                        if (resp.data.warning == false)
                        {
                            //alert('Hi');
                            el.html('<p class="assertive">* Email aready exsist !</p>');
                        } else if (resp.data.success == true)
                        {
                            el.html('<p class="balanced">* You are successfully registered !</p>');
                            $state.go('login');
                            $timeout(function () {
                                $window.location.reload(true);
                            });


                        } else if (resp.data.error == false)
                        {
                            el.html('<p class="assertive">* There is an error in creating account !</p>');
                        }
                    });
                }
            };
        })
        .controller('ProfileCtrl', function ($scope, $http, $ionicModal, $window, $ionicPopup, $timeout, $state, $ionicLoading, AppServicesApi) {

            //$scope.mainURL = 'http://studio-tesseract.co/voucherperks/';
            // Setup the loader
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
            $ionicLoading.show({template: 'Loading....'});

            // An alert dialog
            $scope.showAlert = function (title, msg) {
                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: msg
                });
                alertPopup.then(function (res) {
                    console.log(res);
                });
            };
            $scope.value = {};
            $scope.mainURL = 'http://studio-tesseract.co/voucherperks/';
            $scope.userid = $state.params.userid;
            AppServicesApi.getProfile({
                req_url: $scope.mainURL + 'rest/getProfile',
                data: {id: $scope.userid}
            }).then(function success(resp) {
                $ionicLoading.hide();
                console.log(resp.data);
                console.log(resp.data['password'][0]);
                $scope.value.firstname = resp.data['firstname'];
                $scope.value.lastname = resp.data['lastname'];
                $scope.value.email = resp.data['email'];
                $scope.value.mobile = resp.data['mobile'];
                $scope.value.country = resp.data['country'];
                $scope.value.currency = resp.data['currency'];
                $scope.value.a = resp.data['password'][0];
                $scope.value.b = resp.data['password'][1];
                $scope.value.c = resp.data['password'][2];
                $scope.value.d = resp.data['password'][3];
            },
                    function error(resp)
                    {
                        $ionicLoading.hide();
                    }
            );

            //Update User Profile
            $scope.updateInformation = function (response)
            {
                respo = {
                    'id': $state.params.userid,
                    'firstname': response['firstname'],
                    'lastname': response['lastname'],
                    'email': response['email'],
                    'mobile': response['mobile'],
                    'country': response['country'],
                    'currency': response['currency'],
                    'password': response['a'] + response['b'] + response['c'] + response['d']
                };
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                $ionicLoading.show({template: 'Updating....'});
                $scope.mainURL = 'http://studio-tesseract.co/voucherperks/';
                AppServicesApi.getProfile({
                    req_url: $scope.mainURL + 'rest/updateProfile',
                    data: respo
                }).then(function success(resp) {
                    $ionicLoading.hide();
                    //$scope.showAlert("Success", "Changes saved!");
                    ///console.log(resp.data);
                    if(resp.data.success == true)
                    {
                        $scope.showAlert("Success", "<style>.button{background:rgb(35, 202, 222)!important; color:#fff !important}</style>Changes saved!");

                    } else if (resp.data.error == false)
                    {
                        $scope.showAlert("Error", "<style>.button{background:rgb(35, 202, 222)!important; color:#fff !important}</style>Error in Updation");
                    }
                },
                        function error(resp)
                        {
                            $ionicLoading.hide();
                        }
                );
            };
        }).directive('stringToNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function (value) {
                return '' + value;
            });
            ngModel.$formatters.push(function (value) {
                return parseFloat(value, 10);
            });
        }
    };
});

