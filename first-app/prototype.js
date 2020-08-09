function User(){
    //this refer to whatever object is calling it
    this.name = this;
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + ' gave 1 life to '+ targetPlayer.name);

    }
}

var Jon = new User();
var Wendy = new User();
Jon.name = 'Jon';
Wendy.name = 'Wendy';

Jon.giveLife(Wendy);
console.log('Jon-> ' +Jon.life);
console.log('Wend-> ' +Wendy.life);


// With PROTOTYPE you can either:

// 1. add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + ' just uppercut '+ targetPlayer.name);
}

Wendy.uppercut(Jon);
console.log('Jon-> ' +Jon.life);
console.log('Wend-> ' +Wendy.life);

// 2. add properties to all objects
User.prototype.magic = 60;
console.log(Jon.magic);
console.log(Wendy.magic);
 