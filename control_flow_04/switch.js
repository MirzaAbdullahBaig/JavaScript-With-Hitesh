// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const monthInDigit = 3
const monthInString = "March"


switch (monthInDigit) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match"); 
        break;
}

switch (monthInString) {
    case "January":
        console.log(1);
        break;
    case "February":
        console.log(2);
        break;
    case "March":
        console.log(3);
        break;
    case "April":
        console.log(4);
        break;

    default:
        console.log("default case match"); 
        break;
}

