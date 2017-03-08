(function () {

    var myApp = angular.module('myApp');

    var MyAccountController = function ($state) {
        var ma = this;

        //Carregando as informações do usuário logado
        ma.user = JSON.parse(sessionStorage.user);

    };

    MyAccountController.$inject = ['$state'];

    myApp.controller('MyAccountController', MyAccountController);

}());