var input = document.querySelector("#phone"),
  errorMap = [
    "Invalid number",
    "Invalid country code",
    "Too short",
    "Too long",
    "Invalid number",
  ],
  result = document.querySelector("#result");

window.addEventListener("load", function () {
  errorMsg = document.querySelector("#error-msg");

  function getIp(callback) {
    fetch("https://ipinfo.io", { headers: { Accept: "application/json" } })
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: "",
        };
      })
      .then((resp) => callback(resp.country));
  }

  var iti = window.intlTelInput(input, {
    // allowDropdown: true,
    // // dropdownContainer: document.body,
    // excludeCountries: ["us"],
    hiddenInput: "full_number",
    nationalMode: false,
    formatOnDisplay: true,
    separateDialCode: true,
    autoHideDialCode: true,
    autoPlaceholder: "aggressive",
    initialCountry: "vn",
    placeholderNumberType: "MOBILE",
    preferredCountries: ["il", "ge"],
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.js",
  });

  input.addEventListener("keyup", formatIntlTelInput);
  input.addEventListener("change", formatIntlTelInput);

  function formatIntlTelInput() {
    if (typeof intlTelInputUtils !== "undefined") {
      // utils are lazy loaded, so must check
      var currentText = iti.getNumber(intlTelInputUtils.numberFormat.E164);
      if (typeof currentText === "string") {
        // sometimes the currentText is an object :)
        iti.setNumber(currentText); // will autoformat because of formatOnDisplay=true
      }
    }
  }

  input.addEventListener("keyup", function () {
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        $(input).addClass("form-control is-valid");
      } else {
        $(input).addClass("form-control is-invalid");
        var errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        $(errorMsg).show();
      }
    }
  });
  input.addEventListener("change", reset);
  input.addEventListener("keyup", reset);

  var reset = function () {
    $(input).removeClass("form-control is-invalid");
    errorMsg.innerHTML = "";
    $(errorMsg).hide();
  };
});
