function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            if (button.id === "daysBtn") {
                const days = Number(document.getElementById("days").value);
                const hours = days * 24;
                const minutes = hours * 60;
                const seconds = minutes * 60;

                document.getElementById("hours").value = hours;
                document.getElementById("minutes").value = minutes;
                document.getElementById("seconds").value = seconds;

            } else if (button.id === "hoursBtn") {
                const hours = Number(document.getElementById("hours").value);
                const days = hours / 24;
                const minutes = hours * 60;
                const seconds = minutes * 60;

                document.getElementById("days").value = days;
                document.getElementById("minutes").value = minutes;
                document.getElementById("seconds").value = seconds;
            } else if (button.id === "minutesBtn") {
                const minutes = Number(document.getElementById("minutes").value);
                const hours = minutes / 60;
                const days = hours / 24;
                const seconds = minutes * 60;

                document.getElementById("hours").value = hours;
                document.getElementById("days").value = days;
                document.getElementById("seconds").value = seconds;
            } else if (button.id === "secondsBtn") {
                const seconds = Number(document.getElementById("seconds").value);
                const minutes = seconds / 60;
                const hours = minutes / 60;
                const days = hours / 24;

                document.getElementById("hours").value = hours;
                document.getElementById("days").value = days;
                document.getElementById("minutes").value = minutes;
            }
        });
    });
}