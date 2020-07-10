function myFunction() {
    var name = 'Hello ' + document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = name;
    var n = 'Your name has ' + name.length + ' letters';
    document.getElementById("long").innerHTML = n;
}

console.log('Hello ' + document)
console.log('user submits name')
console.log('funtion responds to user input')
console.log('greeting and number of letters in their name is displayed')