// Quiz 1 ... new date...

//Get the day, month, and year
let today = new Date()

let day = today.getDate();
let month = String(today.getMonth() + 1).padStart(2,'0')  ; // JavaScript months are zero-based
let year = today.getFullYear();

// Format the date
let dateWithHyphens = `${month}-${day}-${year}`;
let dateWithSlashes = `${month}/${day}/${year}`;
let dateWithDashes = `${day}-${month}-${year}`;
let dateWithBackslashes = `${day}/${month}/${year}`;

// Output the date in all four formats
console.log(dateWithHyphens);
console.log(dateWithSlashes);
console.log(dateWithDashes);
console.log(dateWithBackslashes);