// break statement:
// jumps out of loop

for (let i = 0; i < 10; i++) {


    if (i === 5) {
        break;
    }
    // console.log(i);

}

for (let x = 100; x < 105; x++) {

    for (let y = 0; y < 5; y++) {

        if (y === 3) {
            break;
        }

        console.log(y);

    }

    console.log(x);
}