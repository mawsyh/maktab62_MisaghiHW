let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];
let result;
function merge(arr1, arr2) {
  result = [];
  const readResult = [];
  let objectData = {};
  for (let index in arr1) {
    for (let element in arr2) {
      indexCloned = [...index];
      elementCloned = [...element];
      if (arr1[index].uid === arr2[element].uid) {
        objectData = Object.assign(arr1[index], arr2[element]);

        readResult.push(objectData);
      }
    }
  }
  result = JSON.parse(JSON.stringify(readResult));
  return readResult;
}
console.log(merge(personData, additionalPersonData));
//=============================================================
function read() {
  console.log(result);
}
//=============================================================
console.log(`//==============================`);
//=============================================================
function create(inputObj) {
  if (typeof inputObj !== "object")
    return `please insert an object as the input`;
  if (!inputObj.hasOwnProperty("uid"))
    return `The input object in not in the correct format`;
  let uidArray = result.map((index) => index.uid);
  if (uidArray.includes(inputObj.uid))
    return `Uid #${inputObj.uid} already exist.`;
  result.push(inputObj);
  return result;
}
// example num1: (standard usable uid)
console.log(`---Example #1 for Create:`);
console.log(
  create({
    uid: 7,
    firstName: "Raha",
    lastName: "Mirzaei",
    position: "Devops",
    city: "Shiraz",
  })
);
// example num2: (in use uid)
console.log(`---Example #2 for Create:`);
console.log(
  create({
    uid: 4,
    firstName: "Raha",
    lastName: "Mirzaei",
    position: "Devops",
    city: "Shiraz",
  })
);
// example num3: (not standard form)
console.log(`---Example #3 for Create:`);
console.log(
  create([
    {
      firstName: "Raha",
      lastName: "Mirzaei",
      position: "Devops",
      city: "Shiraz",
    },
  ])
);
// example num4: (not object)
console.log(`Example #4 for Create:`);
console.log(create("wassup"));
//=============================================================
console.log(`//==============================`);
//=============================================================
function update(inputObj) {
  //first we check the format
  if (typeof inputObj !== "object")
    return `please insert an object as the input`;
  if (!inputObj.hasOwnProperty("uid"))
    return `The input object in not in the correct format`;
  let uidArray = result.map((index) => index.uid);
  if (!uidArray.includes(inputObj.uid)) return `The uid does not exist`;
  let uidNeedToChange;
  for (const index in result) {
    if (result[index].uid === inputObj.uid) uidNeedToChange = index;
  }
  //now let's see which part we need to update
  let inputObjKeysArray = Object.keys(inputObj);
  let resultKeysArray = Object.keys(
    result.find((index) => Object.values(index))
  );
  let needToBeChangedKeys = inputObjKeysArray.map((index) => {
    if (resultKeysArray.includes(index)) return index;
  });
  for (let index of needToBeChangedKeys) {
    result[uidNeedToChange][index] = inputObj[index];
  }
}
// Example #1: a full update on uid #4
console.log(`---Example #1 for Update:`);
update({
  uid: 4,
  firstName: "Sarah",
  lastName: "Jalili",
  position: "Inside Management",
  city: "Miandoab",
});
read(result);
// Example #2: a partly update on uid #7 : promoting id 7 position
console.log(`---Example #2 for Update:(promoting a user)`);
update({
  uid: 6,
  position: "Server Full Admin",
});
read(result);
//=============================================================
console.log(`//==============================`);
//=============================================================
function remove(uid) {
  if (typeof uid !== "number") return `Please insert an uid number to delete!`;
  let uidArray = result.map((index) => index.uid);
  if (!uidArray.includes(uid)) return `The uid does not exist`;
  let removableIndex;
  for (const index in result) {
    if (result[index].uid === uid) removableIndex = index;
  }
  let removableResult = JSON.parse(JSON.stringify(result));
  removableResult.splice(removableIndex, 1);
  console.log(`Succesfully Deleted!`);
  return removableResult;
}
//example #1 not correct format
console.log(`---Example #1 for Remove:`);
console.log(remove("test"));
//example #2 not correct uid
console.log(`---Example #2 for Remove:`);
console.log(remove(10));
//example #3 removin uid 7
console.log(`---Example #3 for Remove:`);
console.log(remove(7));
