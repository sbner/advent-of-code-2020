//Challenge 2 - Part 1
fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    //Making the data into an array and removing ":" and line breaks
    const newArray = data.replace(/:/g, "").replace(/\r?\n|\r/g, ",").split(',');

    // Making the array into array of objects, layout: [ { rule: [a, b], letter: "c", password: "defgh" }, {...} ... ]
    finalArray = newArray.map( (element) => {
       let array = element.replace(/ |-/g, ",").split(',');
       let dictionary = {
           rule: [array[0],array[1]],
           letter: array[2],
           password: array[3]
        }

        return dictionary
    })

    const checkPassword = (password,letter,ruleMin,ruleMax) => {

        let passCheckLength = 0;
        // Checks if the letter is in the password
        let re1 = new RegExp("["+ letter + "]","g")
        let re2 = new RegExp("["+ "^" + letter + "]","g")
        
        if (re1.test(password)){
            //get how many letter are in the password
            passCheckLength = password.replace(re2, "").length;
        } else {
            passCheckLength = 0;
        }

        if ( passCheckLength >= ruleMin && passCheckLength <= ruleMax){
            return true
        } else {
            return false
        }
    }

    const validPasswords = finalArray.reduce((acc, element) => {
        if (checkPassword(element.password, element.letter, element.rule[0], element.rule[1])) {
             acc++
         }
        return acc
    }, 0)

    console.log(validPasswords)

  });