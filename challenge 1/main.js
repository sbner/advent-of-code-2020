//Challenge 1 - Part 1
fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    const newArray = data.replace(/\r?\n|\r/g, ",").split(',');

    const numbers = newArray.map(element => {
        return parseInt(element,10)
    })

    //Looks for the first element
    numbers.forEach((element, index, array) => {
        let i = 1;
        //Looks for the second element
        do {
            if (element + array[index + i] === 2020){
                const element1 = element;
                const element2 = array[index + i];
                return console.log( element1, element2, "E1 * E2 =", element1 * element2)
            } else {
                i++
            }
        } while (index < array.length && index + i < array.length)
            
        });
    
  });