import React, { useState } from "react";

 const FormValidation = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPasswordError("");
    if (name.trim() === "") return setNameError("name is required");
    if (name.length < 7) return setNameError("name is too short");
    let acount = 0;
    let hasCapital = false;
    let hasUppercase = false;
    for (let i = 0; i < name.length; i++) {
      let char = name[i];
      let firstname = name.charAt(0);
      if (firstname === firstname.toUpperCase()) {
        hasUppercase = true;
      }
      if (
        !(
          (char >= "a" && char <= "z") ||
          (char >= "A" && char <= "Z") ||
          char === " "
        )
      ) {
        return setNameError("name can only contain letter and spaces");
      }
      if (char.toLowerCase() === "a") {
        acount++;
      }
    }
    // if(!hasCapital) return setNameError("name starts with p");
    if (!hasUppercase) return setNameError("name start with uppercase letter");
    if (acount !== 1) return setNameError("name must contain only one a");

    if (email.trim() === "") return setEmailError("email is required");
    if (password.trim() === "") return setPasswordError("password is required");
    let hasLetter = false;
    let hasNumber = false;
    let hasSpecial = false;
    let specialCharacter = "!@#$%^&*()_";
    let bcount = 0;
    let Ccount=0;
    for (let i = 0; i < password.length; i++) {
      let char = password[i];
      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        hasLetter = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      } else if (specialCharacter.includes(char)) {
        hasSpecial = true;
      }
       if(char.toLowerCase() === "c"){
        Ccount++;
      }
      if (char.toLowerCase() === "b") {
        bcount++;
      }
    }

    if (!hasLetter)
      return setPasswordError("password must contain at least one letter");
    if (!hasNumber)
      return setPasswordError("password must contain at least one number");
    if (!hasSpecial)
      return setPasswordError(
        "password must contain at least one special character"
      );
    if (bcount !== 1) return setPasswordError("pass must contain only one b");
    if(Ccount!==1) return setPasswordError("pass must contain at least one C");

    setName("");
    setEmail("");
    setPassword("");
    alert("form submitted sucessfully");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p>{nameError}</p>}
        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p>{passwordError}</p>} <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default FormValidation;
