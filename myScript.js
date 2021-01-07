// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

work = document.getElementById("work");
console.log(work);

spirit = document.getElementById("spirit");
console.log(Object.getPrototypeOf(spirit));

// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  console.log(fname, lname);
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  // Now, using += we are *appending* to the new contents of the div tag.
  myDiv.innerHTML += "\t\t<h1>Whoa.</h1>\n"
  // Notice mixing of quotation marks, just like in Python.
  myDiv.innerHTML += "\t\t<img src='default.png' height=300/>\n";
  if (work.checked) {
    // Notice here that we are appending the values of the variables.
    myDiv.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
    myDiv.innerHTML += "<p>Box was checked.</p>\n";
  } else {
    myDiv.innerHTML += "\t\t<p>Box not checked.</p>\n";
  }
  if (spirit.checked) {
    myDiv.innerHTML += "\t\t<p>Feeling the Spirit of Radio.</p>\n";
  } else {
    myDiv.innerHTML += "\t\t<p>Not Feeling the Spirit of Radio.</p>\n";
  }
}

function boxClick() {
  console.log(work.checked);
}
