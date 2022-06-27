var msg: HTMLElement = <HTMLElement>document.getElementsByClassName("result")[1];

interface Sender {
    send(): void;
}

class MailSender implements Sender {
    send(): void {
        msg.innerHTML += "发送邮件<br>";
    }
}

class SmsSender implements Sender {
    send(): void {
        msg.innerHTML += "发送短信<br>";
    }
}

class SendFactory {
    produce(): void {
        var mailSender: MailSender = new MailSender();
        var smsSender: SmsSender = new SmsSender();

        mailSender.send();
        smsSender.send();
    }
}

var sendFactory: SendFactory = new SendFactory();
sendFactory.produce();