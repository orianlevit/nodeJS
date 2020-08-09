var countries = require('./countries');

var USA = countries();
USA.best_city = "New York";
console.log('The best city in the USA is: ' + USA.best_city);