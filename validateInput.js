var einreichenBtn = document.getElementById('einreichenBtn')
var email = document.getElementById('inputField3')


const interval = setInterval(() => {
    if (email.value.includes('.') && email.value.includes('@')) {
        einreichenBtn.disabled = false
    }
}, 100);

function validateInput(inputId) {
    var inputField = document.getElementById(inputId);
    var inputValue = inputField.value;

    // Überprüfe, ob Sonderzeichen enthalten sind
    if (/^[a-zA-Z0-9@.]+$/.test(inputValue)) {
        // Keine Sonderzeichen vorhanden
        // Hier kannst du den Code ausführen, den du für gültige Eingaben vorgesehen hast
    } else {
        // Sonderzeichen gefunden
        // Hier kannst du eine Fehlermeldung anzeigen oder weitere Aktionen ausführen
        var cleanedValue = inputValue.replace(/[^a-zA-ZäöüÄÖÜ.-@]/g, "");
        inputField.value = cleanedValue;
    }

}

