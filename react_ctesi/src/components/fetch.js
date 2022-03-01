// let resultData;

// const personPromise =  

// fetch('https://randomuser.me/')
//          .then(function (response) {
//        return response.json()
//   })
//   .then(function (data) {
//     console.log('result', data)
//   })

async function getFakePerson() {
  const response = await fetch('https://randomuser.me/')
  const person = await response.json()
  console.log(person)
}

getFakePerson()
