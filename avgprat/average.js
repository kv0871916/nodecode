

module.exports = function calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function (item, index) {
        total += item;
        count++;
    });
    console.log(`The average of ${arry} is ${total / count}`, '\n');
    return total / count;
}