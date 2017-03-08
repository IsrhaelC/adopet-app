(function () {

    var myApp = angular.module('myApp');

    var LoginController = function ($scope, HTTPRequestService, $state) {
        var lg = this;

        lg.user = {
            name: "",
            email:"",
            senha:"",
            nasc:""
        };

        lg.users = [];


        //Método que carrega os usuários cadastrados
        lg.loadUsers = function () {
            HTTPRequestService.getUsers().then(function (result) {
                lg.users = result.data;
            }).catch(function (result) {
                var msg = result.message || 'Erro';
                alert(msg);
            })
        };

        lg.loadUsers();


        //Metodo que testa se o usuário existe e caso ele exista carrega suas informações para a sessão
        lg.loginUser = function () {
            for(var i = 0; i < lg.users.length; i++){
                if (lg.user.email === lg.users[i].email && lg.users[i].senha === '12345'){
                    lg.user.name = lg.users[i].name;
                    lg.user.email = lg.users[i].email;
                    lg.user.senha = lg.users[i].senha;
                    lg.user.nasc = lg.users[i].nasc;
                    sessionStorage.user = JSON.stringify(lg.user);
                    $state.go('news');
                } else{
                    alert("Usuário e/ou senha incorretos");
                };

            }
        };


    };

    LoginController.$inject = ['$scope', 'HTTPRequestService', '$state'];

    myApp.controller('LoginController', LoginController);

}());