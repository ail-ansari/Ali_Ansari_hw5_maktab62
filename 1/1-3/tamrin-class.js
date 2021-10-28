function game() {
    let GameScreen = []
    for (let index = 0; index < 300; index++) {
        GameScreen[index] = "*"
    }
    let Car =
    {
        Num: 0,
        Namee: [],
        Step: []
    }
    Car.Num = parseInt(prompt("how many car do you want to play ?"))
    for (let index = 0; index < Car.Num; index++) {
        Car.Namee[index] = prompt(`${index + 1}) please  enter car name : `)
        Car.Step[index] = 0
    }
    let flag = []
    let once = 0
    let tempStep = []
    let counter = 0
    while (counter !== Car.Num) {
        for (let index = 0; index < Car.Step.length; index++) {
            let temp = parseInt((Math.floor(Math.random() * 10) + 1))
            Car.Step[index] = Car.Step[index] + temp;
        }
        if (once === 0) {
            for (let index = Car.Step.length; index > -1; index--) {
                for (let j = index - 1; j > -1; j--) {
                    if (Car.Step[index] === Car.Step[j]) {
                        Car.Step[j] = 0
                    }
                }
            }
        }
        else {
            for (let index = 0; index < Car.Step.length; index++) {
                for (let i = 0; i < Car.Step.length; i++) {
                    if (i === index)
                        continue
                    else {
                        if (Car.Step[index] === tempStep[i]) {
                            Car.Step[i] = 0
                        }
                    }
                    tempStep[index] = Car.Step[index]
                }
            }
        }
        for (let index = 0; index <= Car.Step.length; index++) {
            for (let i = 0; i < 300; i++) {
                if (i === Car.Step[index]) {
                    GameScreen[i] = Car.Namee[index];
                }
            }
        }
        for (let index = Car.Num; index > 0; index--) {
            tempStep[index] = Car.Step[index]
        }
        console.log("Car.Step  --------> " + Car.Step);
        console.log(GameScreen.join(""));
        once++
        for (let index = 0; index < 300; index++) {
            GameScreen[index] = "*"
        }
        for (let index = 0; index < Car.Num; index++) {
            if (Car.Step[index] >= 300) {
                flag.push(Car.Namee[index])
                Car.Step.splice(index, 1)
                Car.Namee.splice(index, 1)
                counter++
            }
            else if (Car.Step.length === 1) {
                flag.push(Car.Namee[0])
                Car.Step.pop()
                counter++
            }
        }

    }
    console.log(flag);
}