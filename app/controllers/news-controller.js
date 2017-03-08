(function () {

    var myApp = angular.module('myApp');

    var NewsController = function ($scope, HTTPRequestService, $state) {
        var mv = this;

        mv.animals = [];

        //Método que carrega os animais cadastrados
        mv.loadNews = function () {
            HTTPRequestService.getNews().then(function (result) {
                mv.animals = result.data;
            }).catch(function (result) {
                var msg = result.message || 'Erro';
                alert(msg);
            })
        };

        mv.loadNews();

    };
    NewsController.$inject = ['$scope', 'HTTPRequestService', '$state'];

    myApp.controller('NewsController', NewsController);

}());