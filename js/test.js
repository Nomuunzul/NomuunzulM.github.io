const people = [
{
	name:"Jawa",
	age:33,
	gender:"male"
},
{
	name:"Vicky",
	age:30,
	gender:"female"
}
]

const newPeople = people.map((i)=> {
return {
	name:i.name.toUpperCase(),
	age: i.age
};} );
console.log(newPeople);