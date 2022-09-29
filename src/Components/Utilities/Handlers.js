// Break Buttons 
// Utilities for break button
const getSecondsValues = (id) =>{
    const restSecond = document.getElementById(id);
    const restSecondValueStr = restSecond.innerText;
    const restSecondValue = parseFloat(restSecondValueStr);
    return restSecondValue;
}

// Update Seconds Handler
const addRestTime1 = () => {
    const value = getSecondsValues('rest-second-1')
    document.getElementById('rest-time').innerText = value;
}
const addRestTime2 = () => {
    const value = getSecondsValues('rest-second-2')
    console.log(value);
    document.getElementById('rest-time').innerText = value;
}
const addRestTime3 = () => {
    const value = getSecondsValues('rest-second-3')
    console.log(value);
    document.getElementById('rest-time').innerText = value;
}
const addRestTime4 = () => {
    const value = getSecondsValues('rest-second-4')
    console.log(value);
    document.getElementById('rest-time').innerText = value;
}


// Exercise 
const addCompleted = (duration) =>{
    const exerciseTime = getSecondsValues('exercise-time');
    const durationValue = parseFloat(duration);
    const currentDuration = exerciseTime + durationValue;
    document.getElementById('exercise-time').innerText = currentDuration;
    console.log(currentDuration);
    return currentDuration;
}

export {
    addRestTime1,
    addRestTime2,
    addRestTime3,
    addRestTime4,
    addCompleted
}