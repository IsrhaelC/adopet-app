(function () {

    var myApp = angular.module('myApp');

    var RegisterController = function ($scope, HTTPRequestService, $state) {
        var rg = this;

        rg.user = {};

        //Método que cadastra um usuário
        rg.registerUser = function () {
            HTTPRequestService.postUser(rg.user).then(function(result) {
                    $state.go('login');
            }).catch(function(result) {
                    var msg = result.message || 'Erro';
                    alert(msg);
            });
        };

    };

    RegisterController.$inject = ['$scope', 'HTTPRequestService', '$state'];

    myApp.controller('RegisterController', RegisterController);

}());