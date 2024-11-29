// Oppgave 1 er under

const resultEn = document.getElementById("resultEn")

let sum = 2

if (sum % 3) {

    resultEn.textContent = `Du har skrevet partall`

}
else {

    resultEn.textContent = `Du har skrevet oddetall`

}

// Oppgave 1 er over

// Oppgave 2 er under

const resultTo = document.getElementById("resultTo")

let alder = 16

if (alder <= 0) {

    resultTo.textContent = `Skriv et gyldig tall`

} else if (alder <= 12) {

    resultTo.textContent = `Du er barn`

} else if (alder >= 65) {

    resultTo.textContent = `Du er eldre man/kvinne`

} else if (alder >= 20) {

    resultTo.textContent = `Du er voksen`

} else if (alder >= 13) {

    resultTo.textContent = `Du er tenåringen`

}

// Oppgave 2 er over

// Oppgave 3 er udner

submit.addEventListener("click", function () {

    const loginEnter = document.getElementById("loginEnter").value
    const passwordEnter = document.getElementById("passwordEnter").value
    const submit = document.getElementById("submit")

    const text1 = document.getElementById("text1")

    const myName = "Alex"
    const myPassword = "admin"

    if (loginEnter == myName && passwordEnter == myPassword) {

        text1.textContent = `Du er in! =)`

    } else {

        text1.textContent = `Du har skrevet noen feil`

    }

})

// Oppgave 3 er over

// Oppgave 4 er under

submit2.addEventListener("click", function () {

    const måned = document.getElementById("måned").value.toLowerCase();
    const submit2 = document.getElementById("submit2")
     
    const text2 = document.getElementById("text2")
 
    if (måned == "desember" || måned =="januar" || måned =="februar") {

        text2.textContent = "Vinter"

    }
    
    else if (måned == "mars" || måned =="april" || måned =="mai") {

        text2.textContent = "Vår"

    }

    else if (måned == "juni" || måned =="juli" || måned =="august") {

        text2.textContent = "Sommer"

    }
    
    else if (måned == "september" || måned =="oktober" || måned =="november") {

        text2.textContent = "Høst"

    }
})

// Oppgave 4 er over

// Oppgave 5 er under

submit3.addEventListener("click", function () {

    var høyde = document.getElementById("høyde").value
    var vekt = document.getElementById("vekt").value
    const submit3 = document.getElementById("submit3")

    const text3 = document.getElementById("text3")

    let bodyMassIndex = vekt / (høyde * høyde / 10000)


    if (bodyMassIndex > 25) {

        text3.textContent = "Du er overvektig"

    } else if (bodyMassIndex < 18.5) {

        text3.textContent = "Du er undervektig"

    } else if (bodyMassIndex >= 18.5) {

        text3.textContent = "Du er i normal vekten"

    }

})

// Oppgave 5 er over

// Oppgave 6 er under

submit4.addEventListener("click", function() {

    var alder = document.getElementById("alder").value

    const submit4 = document.getElementById("submit4")

    const text4 = document.getElementById("text4")

    if (alder <= 16) {

        text4.textContent = "Du skal betale 40 kr"
        // Jeg tror at 16 og mindre det er barn

    } else if (alder >= 58) {

        text4.textContent = "Du skal betale 105 kr"
        // I internett det er skrevet at pensjonistsalder starter fra 58

    } else if (alder >= 20) {

        text4.textContent = "Du skal betale 140 kr"
        // I internett det er skrevet at ungdomsalder slutter etter 19, så da 20 og over er ikke barn lenge, da det er voksen

    } else if (alder >= 17) {

        text4.textContent = "Du skal betale 90 kr"
        // Jeg tror at 17 og over alrede student.

    }








})