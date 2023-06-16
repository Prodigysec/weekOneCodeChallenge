function gradeGenerator() {
    let marks = prompt("Please input your marks!");

    switch (true) {
        case marks < 0 || marks > 100:
            alert("Please input a valid grade!");
            break;
        default:
            switch (true) {
                case marks > 79:
                    alert("Your grade is A");
                    break;
                case marks >= 60 && marks <= 79:
                    alert("Your grade is B");
                    break;
                case marks >= 49 && marks <= 59:
                    alert("Your grade is C");
                    break;
                case marks >= 40 && marks <= 48:
                    alert("Your grade is D");
                    break;
                default:
                    alert("Your grade is E");
                    break;
            }
            break;
    }
}

gradeGenerator();