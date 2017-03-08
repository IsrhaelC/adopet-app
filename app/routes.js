(function () {

    var myApp = angular.module('myApp');
    myApp.config(function ($stateProvider, $urlRouterProvider) {

        var register = {
            name: 'register',
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegisterController as rg'
        };

        var login = {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: "LoginController as lg"
        };

        var messages = {
            name: 'messages',
            url: '/messages',
            templateUrl: 'templates/messages.html',
            controller: 'MsgController as msg'
        };

        var myaccount = {
            name: 'myaccount',
            url: '/myaccount',
            templateUrl: 'templates/my-account.html',
            controller: 'MyAccountController as ma'
        };

        var reganimal = {
            name: 'reganimal',
            url: '/reganimal',
            templateUrl: 'templates/register-animal.html'
        };

        var news = {
            name: 'news',
            url: '/news',
            templateUrl: 'templates/news.html',
            controller: 'NewsController as mv'
        };

        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get('$state');
            $state.go('news');
        });

        $stateProvider.state(register);
        $stateProvider.state(login);
        $stateProvider.state(messages);
        $stateProvider.state(myaccount);
        $stateProvider.state(reganimal);
        $stateProvider.state(news);
    });

}());