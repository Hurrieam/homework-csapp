"use strict";
var msg = document.getElementsByClassName("result")[1];
var MailSender = /** @class */ (function () {
    function MailSender() {
    }
    MailSender.prototype.send = function () {
        msg.innerHTML += "发送邮件<br>";
    };
    return MailSender;
}());
var SmsSender = /** @class */ (function () {
    function SmsSender() {
    }
    SmsSender.prototype.send = function () {
        msg.innerHTML += "发送短信<br>";
    };
    return SmsSender;
}());
var SendFactory = /** @class */ (function () {
    function SendFactory() {
    }
    SendFactory.prototype.produce = function () {
        var mailSender = new MailSender();
        var smsSender = new SmsSender();
        mailSender.send();
        smsSender.send();
    };
    return SendFactory;
}());
var sendFactory = new SendFactory();
sendFactory.produce();
