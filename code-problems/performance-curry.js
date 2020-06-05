const performanceCurry = fun => (...args) => {
    const initialTime = performance.now();

    console.log(fun(...args));

    const finalTime = performance.now();

    console.log('Execution time: ', finalTime - initialTime);
};
