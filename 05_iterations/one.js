//for


// for (let ind = 0; ind < 10; ind++) {
//     const element = ind;
//     console.log(element);


// }


// for (let i = 0; i < 10; i++) {
//     const element = i
//     if(element == 5)
//     {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// 


// for (let i = 1; i < 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value ${j} and outer loop ${i} `);

//      //   console.log(i + ' * ' + j + ' = ' + i * j);

//         // console.log(i, ' * ', j + ' = ', i * j);

//         // console.log(i + "*" + j + " = " + i*j );

//     }


// }



// let myarray = ["flash", "superman", "batman"]
// console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index]; //to access array we have to give the index value here it's index
//     console.log(element);
// }



// break and continue


// for (let index = 0; index < 20; index++) {
//     if (index == 5) {
//         console.log("5 detected");
//         break;
//     }
//     console.log(`value of i ${index}`);

// }



// for (let index = 0; index < 20 ; index++) {
//      if(index == 5)
//      {
//         console.log("5 detected");  // 5 will not get printed
//         continue
//      }
//      console.log(`value of i ${index}`);

// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log(`come out of thee loop ${element} detected`);
//         break;
//     }
//     console.log(element);

// }

for(let i=0; i<10; i++){
    for(let j=0; j<10; j++)
    {
        if(j==7)
        {
            break;
        }
        else
        {
            console.log(`value of i is: ${i} and j is ${j}`);
            
        }
    }
}

// break example for double loop
for (let i = 0; i < 3; i++) {
    console.log("Outer loop i =", i);

    for (let j = 0; j < 5; j++) {
        if (j === 2) {
            break; // stops inner loop only
        }
        console.log("   Inner loop j =", j);
    }

    console.log("Outer loop continues...");
}
