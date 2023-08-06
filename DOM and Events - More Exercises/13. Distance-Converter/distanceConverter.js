function attachEventsListeners() {
    const button = document.getElementById("convert");
    const result = document.getElementById("outputDistance");

    button.addEventListener("click", (e) => {
        let input = Number(document.getElementById("inputDistance").value);
        let inputInMeters = 0;

        let option = document.querySelector("#inputUnits").value;
        let optionResult = document.querySelector("#outputUnits").value;

        switch (option) {
            case "km":
                inputInMeters = input * 1000;
                break;

            case "m":
                inputInMeters = input * 1;
                break;

            case "cm":
                inputInMeters = input * 0.01;
                break;

            case "mm":
                inputInMeters = input * 0.001;
                break;

            case "mi":
                inputInMeters = input * 1609.34;
                break;

            case "yrd":
                inputInMeters = input * 0.9144;
                break;

            case "ft":
                inputInMeters = input * 0.3048;
                break;

            case "in":
                inputInMeters = input * 0.0254;
                break;
        }

        let resultDistance = 0;
        switch (optionResult) {
            case "km":
                resultDistance = inputInMeters / 1000;
                break;

            case "m":
                resultDistance = inputInMeters / 1;
                break;

            case "cm":
                resultDistance = inputInMeters / 0.01;
                break;

            case "mm":
                resultDistance = inputInMeters / 0.001;
                break;

            case "mi":
                resultDistance = inputInMeters / 1609.34;
                break;

            case "yrd":
                resultDistance = inputInMeters / 0.9144;
                break;

            case "ft":
                resultDistance = inputInMeters / 0.3048;
                break;

            case "in":
                resultDistance = inputInMeters / 0.0254;
                break;
        }

        document.getElementById("outputDistance").value = resultDistance;
    });
}