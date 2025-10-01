console.log('JavaScript подключен!');

const electroTariff = 2.95;
const coldTariff = 66.73;
const hotTariff = 242.45;

const calculateButton = document.getElementById("result_but");
    console.log("Кнопка найдена:",calculateButton)

const electro_start = document.getElementById("electro_start");

const electro_end = document.getElementById("electro_end");
    
const cold_start = document.getElementById("cold_start");
    
const cold_end = document.getElementById("cold_end");
    
const hot_start = document.getElementById("hot_start");
    
const hot_end = document.getElementById("hot_end");  


const resultArea = document.getElementById("result-area");


calculateButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Кнопка была нажата!')
    
    console.log(electro_start.value)
    console.log(electro_end.value)
    console.log(cold_start.value)
    console.log(cold_end.value)
    console.log(hot_start.value)
    console.log(hot_end.value)

    const electroDifference = Number(electro_end.value) - Number(electro_start.value)
    console.log("Электро:", electroDifference)

    const coldDifference = Number(cold_end.value) - Number(cold_start.value)
    console.log("Холод вода:", coldDifference)

    const hotDifference = Number(hot_end.value) - Number(hot_start.value)
    console.log("Горяч вода:", hotDifference)



    const electroResult = electroDifference * electroTariff
    console.log(electroResult)

    const coldResult = coldDifference * coldTariff
    console.log(coldResult)

    const hotResult = hotDifference * hotTariff
    console.log(hotResult)

    const fullResult = electroResult + coldResult + hotResult
    console.log("Итог:",fullResult)

    resultArea.innerHTML = "<h2>" + "Итог:" + fullResult.toFixed(2) + "руб" + "</h2>"
    resultArea.classList.add('visible')
});

