
const person = {
    fullName: function(age) {
      return this.firstName + " " + this.lastName+ " " + age;
    }
  }
  
  const person1 = {
    firstName: "John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName: "Aditya",
    lastName: "Prasad"
  }
  
  // Calling fullName() with person1 as the context
  const fullName1 = person.fullName.call(person1,30);
  console.log(fullName1); // Output: "John Doe"
  
  // Calling fullName() with person2 as the context
  const fullName2 = person.fullName.call(person2,40);
  console.log(fullName2); // Output: "Jane Doe"


  const Name3=person.fullName.apply(person1,[25])
  console.log(Name3);

  const Name4=person.fullName.bind(person2)

  console.log(Name4(23));
