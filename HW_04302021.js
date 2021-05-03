//HW APR30 2021
/*
1. Write a function that generates a random hexadecimal color code.
- A hex value is up to a 6 character combination made up of the values a-f and 0-9, prefixed with a `#`*/


var hex_gen = () => {

    const arr = []

    chars = 'abcdef0123456789'
    
    for(var i=0;i<6;i++){

        arr.push(chars.charAt(Math.floor(Math.random() * chars.length)))
    }

    hex_joined = arr.join('')

    console.log(`#${hex_joined}`)

}

hex_gen()





/*2. Write a function that takes a string and returns the letters in alphabetical. order*/


const somestring = 'caterpillar'

var alpha_sort = (string) => {

    var lowercasealpha = string.toLowerCase();
    
    var charlist = lowercasealpha.split('')

    var sorted_alpha = charlist.sort()

    var alphabetized = sorted_alpha.join('')

    console.log(alphabetized)

}

alpha_sort(somestring)

/*3. Write a function that takes in an object and prints all
 of the values inside of the given object*/

 const person = {
     name: 'Leonard',
     favColor: 'blue',
     location: 'Los Angeles, CA'


 };

const val_of_obj = ({...obj}) => {

    var content = ''

    for(var a in obj){
        content += obj[a] + ' '
    }

    console.log(content)

 };

val_of_obj(person)



/*4. Create a class called Student that accepts a name, email, and favorite programming language. You should have at least 2 instance methods and 2 static methods. Instantiate the Student class and invoke each method.
*/


class Student{
  constructor({name, email, favproglang}){
    this.name = name
    this.email = email
    this.favproglang = favproglang
  }

  greeting(){
    console.log( `Hello, ${this.name}! Here's your profile below\n
    Your email is ${this.email} and\n your favorite programming language is: ${this.favproglang}`)
  }
}


const leonard = new Student({name: 'Leonard', email: 'leonard_luzon2000@yahoo.com', favproglang: 'JavaScript'})
leonard.greeting()
