/**
 * Application controller
 */
(function () {
    angular
            .module('invisionApp')

            .controller('ApplicationController', [
                '$scope',
                '$ionicModal',
                '$state',
                '$window',
                '$ionicHistory',
                '$ionicLoading',
                '$timeout',
                /**************************************************************/
                /*User Pin ModalPopup JS CODE*/
                /**************************************************************/
                function ($scope, $ionicModal, $state, $window, $ionicHistory, $ionicLoading, $timeout) {
                    'use strict';

                    var vm = this;

                    vm.showMenu = true;
                    $scope.$on('hideMenu', function () {
                        vm.showMenu = false;
                    });

                    $scope.$on('$stateChangeStart', function () {
                        vm.showMenu = true;
                    });

                    function showModal(modal) {
                        $scope.modal = modal;
                        // Open the intro modal
                        $scope.modal.show();
                    }

                    // Triggered in the intro modal to open it
                    vm.openModal = openModal;

                    // Triggered in the intro modal to close it
                    vm.closeModal = closeModal;

                    function openModal() {
                        // Create the intro modal that we will use later
                        $ionicModal.fromTemplateUrl('templates/user-pin-modal.html', {
                            scope: $scope
                        }).then(showModal);
                    }

                    function closeModal() {
                        $scope.modal.hide();
                    }

                    /**************************************************************/
                    /*Merchant Pin ModalPopup JS CODE*/
                    /**************************************************************/
                    var vm1 = this;

                    vm1.showMenu1 = true;
                    $scope.$on('hideMenu', function () {
                        vm1.showMenu1 = false;
                    });

                    $scope.$on('$stateChangeStart', function () {
                        vm1.showMenu1 = true;
                    });

                    function showModal1(modal) {
                        $scope.modal = modal;
                        // Open the intro modal
                        $scope.modal.show();
                    }

                    // Triggered in the intro modal to open it
                    vm1.openModal1 = openModal1;

                    // Triggered in the intro modal to close it
                    vm1.closeModal1 = closeModal1;

                    function openModal1() {
                        // Create the intro modal that we will use later
                        $ionicModal.fromTemplateUrl('templates/merchant-pin-modal.html', {
                            scope: $scope
                        }).then(showModal);
                    }

                    function closeModal1() {
                        $scope.modal.hide();
                        $state.go('app.transaction-complete', {}, {location: 'replace'});
                    }

                    /**************************************************************/
                    /*Footer Menubar Hide JS CODE*/
                    /**************************************************************/
                    var vm2 = this;
                    vm2.showFooterMenu = false;
                    $scope.$on('$stateChangeStart', function () {
                        if ($state.current.name == 'app.login' || $state.current.name == 'app.register' || $state.current.name == 'app.forget-password')
                        {
                            vm2.showFooterMenu = false;
                        } else
                        {
                            vm2.showFooterMenu = true;
                        }
                    });

                    $scope.logout = function ()
                    {
                        $ionicLoading.show({template: 'Logging out....'});
                        //$localstorage.set('loggin_state', '');

                        $timeout(function () {
                            $ionicLoading.hide();
                            $ionicHistory.clearCache();
                            $window.localStorage.clear();
                            $ionicHistory.clearHistory();
                            $ionicHistory.nextViewOptions({disableBack: true, historyRoot: true});
                            $state.go('login');
                        }, 2000);
                    };

                    //Get Profile Data
                    $scope.getProfile = function ()
                    {
                        $state.go('app.my-information-pin-reset', {"userid": localStorage.getItem("uid")});
                        $timeout(function () {
                            $window.location.reload(true);
                        });
                    };
                }
            ]);
})();

