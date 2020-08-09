var Oliver = {
    printFirstName: function(){
        console.log('My name is Oliver');
        console.log(this === Oliver);
    }
};
Oliver.printFirstName();


function doSomethingWorthless(){
    console.log('\nI\'m worthless');
    console.log(this === global);
}
doSomethingWorthless();