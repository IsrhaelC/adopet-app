(function () {

    var myApp = angular.module('myApp');

    var IndexController = function ($state) {
        var ic = this;

        //Método que testa se o usuário está logado
        ic.isLog = function () {
            if(sessionStorage.length == 0){
                return false;
            }else {
                return true;
            }
        };

        ic.logout = function () {
            sessionStorage.clear();
        }
    };

    IndexController.$inject = ['$state'];

    myApp.controller('IndexController', IndexController);

}());