var Oliver = {
    favFood: 'bacon',
    favMoive: 'fast and furious'
};

var Person = Oliver;
Person.favFood = 'salad';
console.log(Oliver.favFood);