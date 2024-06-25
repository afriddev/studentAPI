# StudentsAPI

    StudentsAPI will helps you in your developement for testing and other purposes

#### Usage

⭐ **Get All Students**

```js
// try -> https://studentmgmtapi.vercel.app/api/allStudents
async function getStudents() {
  let response = await fetch("https://studentmgmtapi.vercel.app/api/allStudents");
  let serverData = await response.json();
  /**
   * console.log(serverData.message)
   * console.log(serverData.students)
   *
   */
  return serverData;
}
```

⭐ **Create Student**

```js
// try -> 
/* Optional fields 
 -> image
 -> lastName
 -> attended
 -> attendence
*/

/* Mandatory fields 
 -> firstName
 -> id
 -> mobileNumber
 -> emailId
*/

async function getUsers() {
  let response = await fetch("https://studentmgmtapi.vercel.app/api/createStudent", {
    method: "POST",
    body: JSON.stringify({
      firstName: "Shaik",
      lastName: "Afrif",
      image: "https://avatars.githubusercontent.com/u/138677681?s=96&v=4",
      id: "afrid143",
      emailId: "369afrid@gmail.com",
      attended: true,
      attendence: "79",
      mobileNumber: "9390558027",
    }),
  });

  let serverData = await response.json();
  /**
   * console.log(serverData.message)
   *
   */
  return serverData;
}
```

⭐ **Get One Student**

```js
async function getStudent() {
  let response = await fetch("https://studentmgmtapi.vercel.app/api/getStudent", {
    method: "POST",
    body: JSON.stringify({
      emailId: "afriayan01@gmail.com",
    }),
  });

  let serverData = await response.json();
  /**
   * console.log(serverData.message)
   *
   */
  return serverData;
}
```

⭐ **Delete Student**

```js
async function deleteStudent() {
  let response = await fetch("https://studentmgmtapi.vercel.app/api/deleteStudent", {
    method: "POST",
    body: JSON.stringify({
      emailId: "afriayan01@gmail.com",
    }),
  });

  let serverData = await response.json();
  /**
   * console.log(serverData.message)
   *
   */
  return serverData;
}
```

⭐ **Edit Student Details**

```js
async function getStudent() {
  let response = await fetch("https://studentmgmtapi.vercel.app/api/editStudent", {
    method: "POST",
    body: JSON.stringify({
      emailId: "afriayan01@gmail.com",
      fisrtName: "Shaik",
      LastName: "Afrid",
      mobileNumber: 9390558027,
    }),
  });

  let serverData = await response.json();
  /**
   * console.log(serverData.message)
   *
   */
  return serverData;
}
```

⭐ **Error Messages**

```json
{
  "success": "Your request is suceess",
  "invalidEmail": "Wrong EmailId provided",
  "somethingWrong": "Server problem",
  "invalidFields": "Wrong data provided",
  "created": "Created succesfully",
  "noStudentsFound": "Students length zero"
}
```

#### Authors

- [AFRID SHAIK](https://www.github.com/afriddev)
