//Challenge 2 - Part 2
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

        let passCheck = false;
        //Making dynamic RegExp 
        let re1 = new RegExp("["+ letter + "]","g")

        if (re1.test(password)){
            //get how many letter are in the password using != is equivalent of an XOR
            if ((password[ruleMin -1] === letter) != (password[ruleMax - 1] === letter)) {
                console.log("min: ", password[ruleMin -1])
                console.log("max: ",password[ruleMax -1])
                console.log("letter: ", letter)
                return true
            }
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