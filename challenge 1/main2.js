//Challenge 1 - Part 2
fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    const newArray = data.replace(/\r?\n|\r/g, ",").split(',');

    const numbers = newArray.map(element => {
        return parseInt(element,10)
    })

    // Looks for the first element
    numbers.forEach((element, index, array) => {
        let j = 1
        //Looks for the second element
        do {
            let i = 2;
            //Looks for the third element
            do {
                if (element + array[index + j] + array[index + i] === 2020){
                    const element1 = element;
                    const element2 = array[index + j];
                    const element3 = array[index + i];
                    return console.log( element1, element2, element3, "E1 * E2 * E3 =", element1 * element2 * element3)
                } else {
                    i++
                }
            } while (index + i < array.length)
            j++
        } while (index + j < array.length)
            
        });
    
  });