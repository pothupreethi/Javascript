let testObject = { 'one': 1, 'two': 2, 'three': 3 };
localStorage.setItem('testObject', JSON.stringify(testObject));
let retrievedObject = localStorage.getItem('testObject');
console.log('retrievedObject:', JSON.parse(retrievedObject));
