angular.module('APIModule', [])

        .factory('AppServicesApi', function ($http) {
            return {
                SingnUp: function (obj) {
                    var xhr = $http({
                        url: obj.req_url,
                        method: 'POST',
                        data: obj.data,
                        headers: {'Content-Type': "application/x-www-form-urlencoded"}
                    });
                    return xhr;
                },
                doLogin: function (obj) {
                    var xhr = $http({
                        url: obj.req_url,
                        method: 'POST',
                        data: obj.data,
                        headers: {'Content-Type': "application/x-www-form-urlencoded"}
                    });
                    return xhr;
                },
                forgetPassword: function(obj){
                    var xhr = $http({
                        url: obj.req_url,
                        method: 'POST',
                        data: obj.data,
                        headers: {'Content-Type': "application/x-www-form-urlencoded"}
                    });
                    return xhr;
                },
                getCoupons:function(obj){
                    var xhr = $http({
                        url: obj.req_url,
                        method: 'POST',
                        data: obj.data,
                        headers: {'Content-Type': "application/x-www-form-urlencoded"}
                    });
                    return xhr;
                },
                getProfile:function(obj){
                    var xhr = $http({
                        url: obj.req_url,
                        method: 'POST',
                        data: obj.data,
                        headers: {'Content-Type': "application/x-www-form-urlencoded"}
                    });
                    return xhr;
                },
                updateProfile:function(obj){
                    var xhr = $http({
                        url: obj.req_url,
                        method: 'POST',
                        data: obj.data,
                        headers: {'Content-Type': "application/x-www-form-urlencoded"}
                    });
                    return xhr;
                }
            };
        });