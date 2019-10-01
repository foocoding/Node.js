//let values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];


//let values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

//let makeUnique = values.filter((item, i, ar) => ar.indexOf(item) === i);

//console.log(makeUnique);


/*

let values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
/*
function makeUnique(arr) {
  const fliterArray = () => {
    return [...new Set(arr)]
  }
  return fliterArray();
}
*/
//makeUnique(values);

/*

function makeUnique(arr) {
  const fliterArray = () => {
    return [...new Set(arr)]
  }
  return fliterArray();
}
makeUnique(values)

console.log(makeUnique(values));

*/

var fs = require('fs');

var data = {}
data.table = []
for (i = 0; i < 26; i++) {
  var obj = {
    id: i,
    square: i * i
  }
  data.table.push(obj)
}
function write() {
  return new Promise(resolve => {
    try {
      fs.writeFile("input.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('complete');
      })
    }
    catch (err) {
      resolve(err);
      console.log('Error parsing JSON string:', err)
    }
  })

}