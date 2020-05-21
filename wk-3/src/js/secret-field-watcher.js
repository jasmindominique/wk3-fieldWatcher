class SecretFieldWatcher {

  options = {};
  errorMessageSpan = null;

  constructor(parameters) {
    const parametersWithDefaults = Object.assign(
      {},
      {
        name: " ",
        value: " ",
        backgroundColor: "blue",
        foregroundColor: "white",
        errorMessage: " ",
      },
      parameters
    );

    const name = parametersWithDefaults.name;
   
    this.options = parametersWithDefaults;

    console.log("SecretFieldWatcher ready!", parametersWithDefaults, name);

    if (name) {
    
      const field = document.querySelector(`input[name="${name}"]`);
      if (field) {
        field.addEventListener("keyup", this.lookForFieldValue);
        this.options.errorMessageSpan = field.parentElement.querySelector(
          ".error-message"
        );
      } else {
        console.warn("Uh oh! Something isn't right ", name);
      }
    }
  }

  lookForFieldValue = (evt) => {
    console.log("Searching", this.options.name, this.options.value);
    const currentValue = evt.target.value;
    let background = document.querySelector(".background");
    if (currentValue === this.options.value) {
      console.log("It's a match");

      background.style.backgroundColor = this.options.backgroundColor;

      if (this.options.errorMessage) {
        this.options.errorMessageSpan.innerHTML = this.options.errorMessage;
      }

     
    } else {
      console.log("does not match", currentValue);
      background.style.backgroundColor = "";
      this.options.errorMessageSpan.innerHTML = "";
    }
  };
}
