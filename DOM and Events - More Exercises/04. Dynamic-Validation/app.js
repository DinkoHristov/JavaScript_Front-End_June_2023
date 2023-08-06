function validate() {
    let reggex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let value = document.getElementById("email").value;

    document.getElementById("email").addEventListener("change", checkEmail);

    function checkEmail(event) {
        if (reggex.test(event.target.value)) {
            event.target.removeAttribute("class");
            return;
        }

        event.target.className = "error";
    }
}