1)For the given JSON iterate over all for loops (for, for in, for of, forEach).

a)FOR->

var obj = [ { person: "parthi", age: "20", city: "pondy" }, { person: "surya", age: "51", city: "Goa" }, { person: "raj kiran", age: "87", city: "lucknow" }, ]; 
for(i=0;i<obj.length;i++){
    console.log(obj[i].person)
    console.log(obj[i].age)
    console.log(obj[i].city)
}

B)for in->
for(i=0;i<obj.length;i++){
for(var param in obj[i]){
     console.log(`${param}: ${obj[i][param]}`);
}
}

C)for of->
for(var elements of obj){
  console.log(elements.fname)
    console.log(elements.age)
    console.log(elements.city)  
}

D)for each->
obj.forEach(function(objects){
   console.log(objects.fname)
    console.log(objects.age)
    console.log(objects.city)
})



2)RESUME IN JSON FORMAT->
----------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>
{ 
 "basics": { 
 "name": "PARTHIBAN", 
 "email": "prince233@gmail.com", 
 "phone": "6379562561", 
 "date of birth": "05-05-1998", 
 "nationality": "INDIAN", 
 "url": "https://KPARHI.com", 
 "summary": "A summary of parthiban", 
 "location": { 
 "address": "MAHATMA GANDHI COLONY", 
 "postalCode": "515001", 
 "city": "pondicherry", 
 "countryCode": "IND", 
  
  
 }, 
 "objective": "A objective of parthiban", 
 "carrer objective": { 
 "Objective": "to be part of orginatizition where i could enchance myskills for devolpment  of organization and myself " 
 }, 
 
 } 
 "education": { 
 "institution": "M.E.C INSTIUTE OF TECHNOLOGY",   
 "area": "mailam", 
 "studyType": "Bachelor", 
 "startDate": "2015-06-26", 
 "endDate": "2019-08-2020", 
 "score": "7.5", 
 "courses": [ 
 "Bachelor of engineering - B.E" 
 ] 
 }, 
 "12th standard": [{ 
 "college": "ST.ANN'S HIGHER SECONDARY SCHOOL",  "url": "TINDIVANAM", 
 "area": "vijayawada", 
 "year": "2013-2015", 
 "score": "974" 
 }], 
 "10th standard": [{ 
 "school": "prasad concept school", 
 "area": "anantapur", 
 "year": "2013", 
 "score": "9.0"
 }], 
 

  
 "interests": [{ 
 "name": "reading books", 
 "keywords": [ 
 "ATOMIC HABITS", 
 "5 AM CLUB" 
 ] 
 }],
 "declaration": [{ 
 "declaration": "saiprasad,here by declare that the above info is true to rest of my  knowledge ", 
 }], 
  
} 
