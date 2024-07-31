//1 
const inputSring = "Javascript is a Javascript Language. Easy to Understand and Write and Maintain";
const toBeMatched = /javascript/gi;
const matches = inputSring.match(toBeMatched);
console.log(matches);

//2: 
const inputDigits = "123 is one two three and 456 is four five six.";
const regexDigits = /\d/g;
const matches01 = inputDigits.match(regexDigits);
console.log(matches01);

//3:
const regexCapitalizedWords = /\b[A-Z][a-zA-Z]*\b/g;
const matchCapitalWord = inputSring.match(regexCapitalizedWords);
console.log(matchCapitalWord);

//4:
const regexSeqDigits = /\d+/g;
console.log(inputDigits.match(regexSeqDigits));

//5:
const phoneNum = "(123) 456-7890";
const regexPhone = /\((\d{3})\) (\d{3})-(\d{4})/;
const [,areaCode , centralOffice , lineNumber] = phoneNum.match(regexPhone);
console.log("Area Code = " + areaCode);
console.log("Central Office Code = " + centralOffice);
console.log("Line Number = " + lineNumber);

//6:
const emailAdress = "abc123@gmail.com";
const userNamEregex = /[a-zA-Z0-9._%+-]+/;
const domainRegex = /([a-zA-Z0-9.-]+)/;
const userNameMatch = emailAdress.match(userNamEregex);
const domainMatch = emailAdress.match(domainRegex);
console.log("user name is : " + userNameMatch);
console.log("domain name is : " + domainMatch);

//7:
const inputSring02 = "this is javascript language and i am enjoying"
const beginningOfSringregex = /^t\w+/;

//8
const regexEnd = /\w+ing$/
const matchBegginingOfString = inputSring02.match(beginningOfSringregex);
const matchEndOfString = inputSring02.match(regexEnd);
console.log(matchBegginingOfString);
console.log(matchEndOfString)


//9:
const password = "AbcbC@BCc12345#$$#";
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const matchPassword = password.match(passRegex);

if (matchPassword) {
  console.log("Password is valid:", matchPassword);
} else {
  console.log("Invalid password");
}

//10
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

function isValidUrl(url) {
  return urlRegex.test(url);
}

const testUrl = "https://www.example.com";
console.log(`Is "${testUrl}" a valid URL? ${isValidUrl(testUrl)}`);
