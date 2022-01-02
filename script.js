function compute(r) {
    const Principal = document.getElementById("principal").value;
    const IntRate = document.getElementById("rate").value;
    const Year = document.getElementById("noyears").value;

    if (Principal <= 0) {
        document.getElementsByClassName("result")[0].style.display = "none";
        alert("Please enter positive value")
        document.getElementById("principal").focus()
        return
    }

    var Results = Principal * IntRate * Year / 100

    const CurrentDate = new Date();
    let CurrentYear = CurrentDate.getFullYear();

    var FutureDate = CurrentYear + parseInt(Year)

    document.getElementById("deposit").innerHTML = Principal
    document.getElementById("rate2").innerHTML = IntRate + "%"
    document.getElementById("intamount").innerHTML = Results
    document.getElementById("future-year").innerHTML = FutureDate

    document.getElementsByClassName("result")[0].style.display = "block";
}

const IntRate = document.getElementById("rate")

IntRate.addEventListener(
    "input",
    (e) => {
        document.getElementById("dr").innerHTML = IntRate.value + "%";
    }
)
