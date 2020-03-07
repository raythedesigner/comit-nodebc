/*
Create a new index149.js
Define a user variable and assign a literal object as value
This user will have your personal data
Add at least 10 properties and values to describe you
Try using the following type values as properties values: string, number, boolean, array & object (yes, you can assign a literal object as property too)
Define at least 5 properties when we initialize the user object:
----
  const myObject = {
      property: value,
      property: value,
  }
----
Define the rest of the user properties using the dynamic way
----
  const myObject = {
      property: value,
      property: value,
  }

  myObject.newProperty = value;
  myObject.newProperty = value;
  myObject.newProperty = value;
----
Show the user object as output
*/

let user = {
    firstName: 'Yuki',
    lastName: 'Machida',
    englishName: 'Ray',
    yearOfBirth: 1990,
    phoneNumber: '604-729-9635',
    email: 'yuki@coelacanthdesign.com',
    address: {
        street: '43 Powell Street',
        suite: '510'
    },
    languages: [
        'Japanese',
        'English',
    ],
    profession: 'designer',
    married: false
};

console.log(user);

user = {
    firstName: 'Erina',
    lastName: 'Takayama',
    englishName: false,
    yearOfBirth: 1989,
    phoneNumber: '778-957-0723‬'
};

console.log(user);

user.email = 'nia.niena217@icloud.com';
user.address = {
    street: '609 Gore Avenue',
    suite: '301'
};
user.languages = ['Japanese'];
user.profession = 'manga artist';
user.married = false;

console.log(user);