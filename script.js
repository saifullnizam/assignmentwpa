function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bmi = weight / (height / 100) ** 2;

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
}