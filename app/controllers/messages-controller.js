(function () {

    var myApp = angular.module('myApp');

    var MsgController = function ($scope, HTTPRequestService, $state) {
        var mv = this;

        mv.user = JSON.parse(sessionStorage.user);

        var sendMsg = {};

        sendMsg.name = mv.user.name;
        sendMsg.read = false;
        sendMsg.date = "Hoje";

        //Método que envia a mensagem
        mv.sendMsg = function () {
            HTTPRequestService.postMessages(sendMsg).then(function(result) {
                alert("Mensagem Enviada");
            }).catch(function(result) {
                var msg = result.message || 'Erro';
                alert(msg);
            });
        };

        mv.messages = [];


        //Método que carrega as mensagens
        mv.loadMessages = function () {
            HTTPRequestService.getMessages().then(function (result) {
                mv.messages = result.data;
            }).catch(function (result) {
                var msg = result.message || 'Erro';
                alert(msg);
            })
        };

        mv.loadMessages();

    };

    MsgController.$inject = ['$scope', 'HTTPRequestService', '$state'];

    myApp.controller('MsgController', MsgController);

}());