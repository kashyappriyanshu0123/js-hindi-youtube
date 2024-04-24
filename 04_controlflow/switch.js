const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
       // break;                  //if we dont use break it will break the control flow means april will also get executed in this example and so one if any other instruction is there
    case 4:
        console.log("APRIL");
        break;
   

    default:
        console.log("default are match");
        break;
}