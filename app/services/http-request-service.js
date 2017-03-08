(function() {

    var myApp = angular.module('myApp');

    var HTTPRequestService = function($http) {

        //Carrega os animais
        this.getNews = function() {
            var url = "http://localhost:3412/news";
            return $http.get(url);
        };


        //Carrega os usuários
        this.getUsers = function() {
            var url = "http://localhost:3412/users";
            return $http.get(url);
        };

        //Envia um usuário
        this.postUser = function (user) {
            var url = "http://localhost:3412/users";
            return $http.post(url, user);
        };

        //Carrega as mensagens
        this.getMessages = function() {
            var url = "http://localhost:3412/messages";
            return $http.get(url);
        };


        //Envia uma mensagem
        this.postMessages = function (message) {
            var url = "http://localhost:3412/messages";
            return $http.post(url, message);
        };
    };

    HTTPRequestService.$inject = ['$http'];
    myApp.service('HTTPRequestService', HTTPRequestService);

}());