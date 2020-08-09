// Way number 1:
// function printAvatar(){
//     console.log('Avatar: PG-13');
// }

// function printPulpFiction(){
//     console.log('Pulp Fiction: R');
// }

// module.exports.avatar = printAvatar;

// Way number 2:
module.exports = {

    printAvatar: function printAvatar(){
        console.log('Avatar: PG-13!!');
    },
    
    printPulpFiction: function printPulpFiction(){
        console.log('Pulp Fiction: R');
    },

    favMovie : 'Casino'
    



};