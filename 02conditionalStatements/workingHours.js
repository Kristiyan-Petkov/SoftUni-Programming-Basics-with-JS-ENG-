function workingHours(input) {
    let hour = Number (input[0]);
    let day = input[1];

    if (hour >= 10 && hour <=18) {
        switch (day){
            case "Sunday":console.log("closed");break;
            default:console.log("open")
        }
    } else {
        console.log("closed")
    }


}
workingHours(["11","Monday"])