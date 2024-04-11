# User Stories

## Admin
- delete others blogposts
- reject others blogposts
- block users
- view blogposts
- login
- add other admins

## User
- register/sign up
- view others comments
- write a comment underanother blogpost
- view blogposts
- create a blogpost
- edit thier blgpost
- delete thier blogpost

## Array-js
- let random=['milk',{name:'sarah'},true,36,]
  * console.log(random)
  * console.log(random[1])
  * console.log(random[2])
  * console.log(random[random.length-1])

- random.forEach((item)=>{
  * console.log(item)
})

- let statuses=[true,false,false,false,true]
  * console.log(statuses)
  * console.log(statuses[0])
 *
    console.log(statuses[2])
    console.log(statuses.length)
    console.log(statuses[statuses.length-1])

statuses.forEach((status)=>{
    console.log(status)
})


let shoppingList=['milk','sugar','salt','flour','juice']
console.log(shoppingList[2])
console.log(shoppingList[4])
console.log(shoppingList.length)
console.log(shoppingList[shoppingList.length-1])

shoppingList.forEach((item)=>{
   console.log('some ' + item)
})

let ages=[36,60,17,38,70,10,46,30]
console.log(ages)
console.log(ages[4])
console.log(ages[1])
console.log(ages.length)
console.log(ages[ages.length-1])

let people=[{name:'henry', age:36, height:'1.7m'},
             {name:'jane',age:27,height:'1m'},
             {name:'dennis',age:17,height:'5.4m'}]
console.log(people)
console.log(people[1])
console.log(people[0])
console.log(people.length)
console.log(people[people.length-1])
 
people.forEach((person)=>{
    console.log(person.name + ' doe')
    console.log(person.age + 100)
})

    // Loops
    // Looping using forEach
    ages.forEach((age)=> {
    console.log(age+10)
    })
let numbers=[10,20,30,40,50,60]
 console.log(numbers)
 console.log(numbers[3])
 for(let j = 0; j<6 ;j ++){
     console.log(numbers[j])
    }
    console.log('rabbit')

for(let h =0 ; h<5 ; h ++){
    console.log(shoppingList[h])
}
for(let k=0 ;k<5 ; k++){
    console.log(statuses[k])
}
for(let i=0 ; i<8 ; i++){
    console.log(ages[i])
}
for(let r=0 ; r<3 ; r++){
    console.log(people[r])
}
for(let f=0 ;f<4 ;f++){
    console.log(random[f])
}

let numbers1=[10,20,30,40,50,60]
 let newNumbers=numbers1.map((number)=>{
   console.log(number)
   let product=number*100
   return product
  })
  console.log(newNumbers)

 let newShoppingList=shoppingList.map((shoppingList)=>{
    console.log(shoppingList)   
    let newList='some ' + shoppingList
    return newList
  })
   console.log(newShoppingList)
  
 let newAges=ages.map((age)=>{
      console.log(age)
     let newAges=age / 2
      return newAges
   })

 console.log(newAges)

 let  names=['Jane','Peter','Sally','Dave','John','Mark']
   let newNames=names.map((name)=>{
   let  newjoinednames=name+ ' doe'
    return newjoinednames
   })
   console.log(newNames)

   let marks=[70,77,38,60,59,20]
   let newMarks=marks.map((mark)=>{
        return  mark / 80 * 100
   })
console.log(newMarks)

let newPeople=people.map((person)=>{
return person.name + ' doe'
})
console.log(newPeople)

let Students =[
    {id:1,name:'jane',age:7,marks:78},
    {id:2,name:'peter',age:12,marks:62},
    {id:3,name:'john',age:8,marks:45},
    {id:4,name:'jill',age:10,marks:70}
]
let newStudents=Students.map((student)=>{
return 'hello ' + student.name
})
console.log(newStudents)

let newMarks1=Students.map((student)=>{
    return student.marks / 80 * 100
})
console.log(newMarks1)

let MarksAbove70=marks.filter((mark)=>{
    return mark>70
})
console.log(MarksAbove70)

let MarksBetween55and71=marks.filter((mark)=>{
    return mark >55 && mark <71
})
console.log(MarksBetween55and71)

let agesAbove10=Students.filter((student)=>{
   return student.age > 10
})
console.log(agesAbove10)

let agesBelow11=Students.filter((student)=>{
    return student.age <11
})
console.log(agesBelow11)

let brilliantStudents=Students.find((student)=>{
    return student.id === 3
})
console.log(brilliantStudents)

let uniqueStudentsAged7=Students.find((student)=>{
    return student.age === 7
})
console.log(uniqueStudentsAged7)

let StudentsBetween50And60=Students.find((student)=>{
    return student.marks >44  && student.marks <69
})
console.log(StudentsBetween50And60)

let prices=[50,100,250,300,150,700];
let sum=0;
   for(let i=0;i<prices.length;i++)
    {sum +=prices[i];}
    console.log(sum)

    let sumOfNumbers=0;
    for(let f=0;f<numbers.length;f++)
    {sumOfNumbers +=numbers[f];}
    console.log(sumOfNumbers)

    let totalAges=0;
    for(let j=0;j<ages.length;j++)
    {totalAges +=ages[j];}
    console.log(totalAges)

    let totalPrices=prices.reduce((a,b)=>{
        return a + b
    })
    console.log(totalPrices)

    let ageSum=ages.reduce((a,b)=>{
        return a+b
    })
    console.log(ageSum)

    let numberSum=numbers.reduce((a,b)=>{
        return a+b
    })
    console.log(numberSum)

    let markSum=marks.reduce((a,b)=>{
        return a,b
    })
    console.log(markSum)

    let studentsMrks=Students.reduce((a,b)=>{
        return a+b.marks
    }, 0)
    console.log(studentsMrks)

    let studentsAges=Students.reduce((a,b)=>{
        return a+b.age
    }, 0)
    console.log(studentsAges)

    let studentsId=Students.reduce((a,b)=>{
        return a+b.id
    } , 0)
    console.log(studentsId)
   let peoplesAges=people.reduce((a,b)=>{
    return a+b.age
   }, 0)
   console.log(peoplesAges)