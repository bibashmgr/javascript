// continue keyword:
// used to jump over one iteration in the loop

for (let index = 0; index < 10; index++) {

    if (index == 3 || index == 6 || index == 9) {
        continue;
    }
    // console.log(index);
}

for (let i = 100; i < 105; i++) {
    for (let j = 0; j < 5; j++) {
        if (j === 3 || j === 1) {
            continue;
        }
        console.log(j);
    }
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}