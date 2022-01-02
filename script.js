function compute(r) {
    const Principal = document.getElementById("principal").value;
    const IntRate = document.getElementById("rate").value;
    const Year = document.getElementById("noyears").value;

    var Results = Principal * IntRate * Year / 100

    const CurrentDate = new Date();
    let CurrentYear = CurrentDate.getFullYear();

    var FutureDate = CurrentYear + parseInt(Year)

    document.getElementById("result").innerHTML = "If you deposit " + Principal + ", at an interest rate of "
        + IntRate + "%. You will receive an amount of " + Results + " in the year " + FutureDate + "."
}

const IntRate = document.getElementById("rate")

IntRate.addEventListener(
    "input",
    (e) => {
        document.getElementById("dr").innerHTML = IntRate.value + "%";
    }
)
