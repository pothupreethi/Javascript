 const firstName = document.getElementById('firstName');
 const lastName = document.getElementById('lastName');
 const mobileNumber = document.getElementById('mobileNumber');
 const emailAddress = document.getElementById('email');
 const originalPassword = document.getElementById('password');
 const confirmedPassword = document.getElementById('confirmedPassword');
 const signUpButton = document.getElementById('signUp');
 const male = document.getElementById('male');
 const female = document.getElementById('female');
 const others = document.getElementById('other');
 const branch = document.getElementById('branches');
 const dateOfBirth = document.getElementById('dateOfBirth');
 const acceptTerms = document.getElementById('terms');
 const color1 = document.getElementById('colorModificationBox1');
 const color2 = document.getElementById('colorModificationBox2');
 const address = document.getElementById('address');
 const dataForm = document.getElementById('dataForm');
 const errorMessageForFirstName = document.getElementById('errorMessageForFirstName');
 const errorMessageForLastName = document.getElementById('errorMessageForLastName');
 const errorMessageForMobileNumber = document.getElementById('errorMessageForMobileNumber');
 const errorMessageForEmailAddress = document.getElementById('errorMessageForEmailAddress');
 const errorMessageForPassword = document.getElementById('errorMessageForPassword');
 const errorMessageForConfirmedPassword = document.getElementById('errorMessageForConfirmedPassword');
 let userData = {};
 userData.Branch = "CSE";
 /*firstName.onblur = (event) => {
  let pattern = /^[A-Za-z]+$/;
  if (firstName.value.match(pattern)) {
   errorMessageForFirstName.style.display = "none";
   userData['firstName'] = event.target.value;
  }
  else {
   errorMessageForFirstName.style.display = "block";
  }
 }

 lastName.onblur = (event) => {
  var pattern = /^[A-Za-z]+$/;
  if (lastName.value.match(pattern)) {
   userData['LastName'] = event.target.value;
   errorMessageForLastName.style.display = "none";
 }
  else {
 errorMessageForLastName.style.display = "block";
  }
 }

 mobileNumber.onblur = (event) => {
  var pattern = /[0-9]{9}$/;
  if (mobileNumber.value.match(pattern)) {
   userData['MobileNumber'] = event.target.value;
  errorMessageForMobileNumber.style.display = "none";
  }
  else {
errorMessageForMobileNumber.style.display = "block";
  }

 }

 emailAddress.onblur = (event) => {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailAddress.value.match(emailPattern)) {
   userData['Email-Address'] = event.target.value;
   errorMessageForEmailAddress.style.display = "none";
  }
  else {
   errorMessageForEmailAddress.style.display = "block";
  }
 }
 originalPassword.onblur = (event) => {
  var passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
  if (originalPassword.value.match(passwordPattern)) {
   userData['Password'] = originalPassword.value;
   errorMessageForPassword.style.display = "none";
  }
  else {
   errorMessageForPassword.style.display = "block";
  }
 }
 confirmedPassword.onblur = (event) => {
  let valueOf = originalPassword.value;
  if (valueOf === confirmedPassword.value) {
   errorMessageForConfirmedPassword.style.display = "none";
  }
  else {
   errorMessageForConfirmedPassword.style.display = "block";
  }
 }



 signUpButton.onclick = () => {
  if (male.checked) {
   document.getElementById('errorMessageForGender').style.display = "none"
   userData['Gender'] = male.value;
  }
  else if (female.checked) {
   document.getElementById('errorMessageForGender').style.display = "none"
   userData['Gender'] = female.value;
  }
  else if (others.checked) {
   document.getElementById('errorMessageForGender').style.display = "none"
   userData['Gender'] = others.value;
  }
  else {
   document.getElementById('errorMessageForGender').style.display = "block";
  }

  if (acceptTerms.checked) {
   document.getElementById('errorMessageForTermsAndCondition').style.display = "none";
  }
  else {

   document.getElementById('errorMessageForTermsAndCondition').style.display = "block";

  }
  // alert(Object.keys(userData).length);
  if (Object.keys(userData).length >= 8) {

   console.log(userData);
   userData = {};
   dataForm.reset();
   alert("Form is filled");
  }
  else {
   alert("Please fill the data");
  }

 }

 branch.onchange = (event) => {
  userData['Branch'] = event.target.value;
 }
 dateOfBirth.onchange = (event) => {
  let pattern = /\b(20|[2-9][0-9])\d{2}-([0|1])\d-([0-3])\d\b/g
  let dob = dateOfBirth.value;

  userData['Date Of Birth'] = event.target.value;
  if (dob.match(pattern)) {

   document.getElementById('errorMessageForDateOfBirth').style.display = "none";
  }
  else {
   document.getElementById('errorMessageForDateOfBirth').style.display = "block";


  }

 }
 color1.onchange = (event) => { changeColor(color1, color2) }
 color2.onchange = (event) => { changeColor(color1, color2) }

 function changeColor(color1, color2) {
  document.getElementById('mainSection').style.backgroundImage = `linear-gradient(-90deg,${color2.value},${color1.value})`;
 }
 address.onblur = (event) => {
  userData.Address = address.value;
 }*/

 function conditionForValidation(targetValue) {
  alert(targetValue.value);
  alert(targetValue.getAttribute("name"));
 }
 firstName.onblur = (event) => { conditionForValidation(event.target) };
 lastName.onblur = (event) => { conditionForValidation(event.target) };
 