const readline = require('readline');
const interFace = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function interactiveSort(){
    interFace.question('Enter text and press "ENTER" or enter "exit" if you want to exit: ', (answer) => {
        if (answer == 'exit' || answer == 'Exit') {
            console.log('Good bye');
            interFace.close();
        }
        let splitArray = answer.split(' ')

        interFace.question(`Select a number from 1 to 6 where 
1 - Sort words alphabetically
2 - Show numbers from lesser to greater
3 - Show numbers from bigger to smaller
4 - Display words in ascending order by number of letters in the word
5 - Show only unique words
6 - Display only unique values from the set of words and numbers entered by the user
or enter "exit" if you want to exit
Your choice is: `, (choise) => {
            if(choise == 'exit' || choise == 'Exit'){
                console.log('Good bye');
                interFace.close();
            } else if (choise == 1) {
                let arrayStrings = splitArray.filter((element) => {return isNaN(element)});
                let sort = arrayStrings.sort()
                console.log(`Sort words alphabetically: ${sort}`);
            } else if (choise == 2) {
                let arrayNumbers = splitArray.filter((element) => {return !isNaN(element)});
                let sort = arrayNumbers.sort((a, b) => {return a - b})
                console.log(`Show numbers from lesser to greater: ${sort}`);
            } else if (choise == 3) {
                let arrayNumbers = splitArray.filter((element) => {return !isNaN(element)});
                let sort = arrayNumbers.sort((a, b) => {return b - a})
                console.log(`Show numbers from bigger to smaller: ${sort}`);
            } else if (choise == 4) {
                let arrayStrings = splitArray.filter((element) => {return isNaN(element)});
                let sort = arrayStrings.sort((a, b) => {return a.length - b.length})
                console.log(`Display words in ascending order by number of letters in the word: ${sort}`);
            } else if (choise == 5) {
                let arrayStrings = splitArray.filter((element) => {return isNaN(element)});
                function unique(uniqueWords) {
                    let sort = [];
                    for (let element of uniqueWords) {
                      if (!sort.includes(element)) {
                        sort.push(element);
                      }
                    }
                    return sort;
                }
                console.log(`Show only unique words: ${unique(arrayStrings)}`);
            } else if (choise == 6) {
                function unique(uniqueElement) {
                    let sort = [];
                    for (let element of uniqueElement) {
                      if (!sort.includes(element)) {
                        sort.push(element);
                      }
                    }
                    return sort;
                }
                console.log(`Display only unique values from the set of words and numbers entered by the user: ${unique(splitArray)}`);
            } 
            interactiveSort();
        }) 
    });
}
interactiveSort();