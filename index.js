

// Test 1
function writeCards(name, string) {
    const newArray = [];
    for (let i = 0; i < name.length; i++) {
      newArray.push(`Thank you, ${name[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
  }
  
  // Test 2 and 3
  function countDown(number) {
    while (number >= 0) {
      console.log(number--);
    }
  }
  