//Lager arrayet Billetter
let Billetter = []

//Funksjon for å kjøpe billett
function kjopBillett() {
    //Henter verdiene fra input i HTML
    const Film = document.getElementById("Film").value;
    const AntallInn = document.getElementById("Antall").value;
    const Fornavn = document.getElementById("Fornavn").value;
    const Etternavn = document.getElementById("Etternavn").value;
    const TlfInn = document.getElementById("Telefonnr").value;
    const Epost = document.getElementById("Epost").value;
    const Antall = Number(AntallInn);
    const Telefonnummer = Number(TlfInn);

    //Setter feilmeldinger til null
    document.getElementById("ikkeValgtFilm").innerHTML = "";
    document.getElementById("ikkeAntall").innerHTML = "";
    document.getElementById("ikkeFornavn").innerHTML = "";
    document.getElementById("ikkeEtternavn").innerHTML = "";
    document.getElementById("ikkeTlf").innerHTML = "";
    document.getElementById("ikkeEpost").innerHTML = "";

    //Sjekker om verdiene fra HTML er av typen vi ønsker
    let erGyldig = true;

    if (Film === "Ingen") {
        document.getElementById("ikkeValgtFilm").innerHTML = "Velg en film.".fontcolor("red");
        erGyldig = false;
    }
    if (!Film){
        document.getElementById("ikkeValgtFilm").innerHTML = "Velg en film.".fontcolor("red");
        erGyldig = false;
    }
    if (isNaN(Antall)) {
        document.getElementById("ikkeAntall").innerHTML = "Skriv inn et tall over 0.".fontcolor("red");
        erGyldig = false;
    }
    if (Antall === 0) {
        document.getElementById("ikkeAntall").innerHTML = "Skriv inn et tall over 0.".fontcolor("red");
        erGyldig = false;
    }
    if (!Fornavn) {
        document.getElementById("ikkeFornavn").innerHTML = "Skriv inn et fornavn.".fontcolor("red");
        erGyldig = false;
    }
    if (!Etternavn) {
        document.getElementById("ikkeEtternavn").innerHTML = "Skriv inn etternavn.".fontcolor("red");
        erGyldig = false;
    }
    if (isNaN(Telefonnummer)) {
        document.getElementById("ikkeTlf").innerHTML = "Skriv inn et gyldig telefonnummer".fontcolor("red");
        erGyldig = false;
    }
    if (Telefonnummer === 0) {
        document.getElementById("ikkeTlf").innerHTML = "Skriv inn et gyldig telefonnummer".fontcolor("red");
        erGyldig = false;
    }
    if (!Epost.includes("@")) {
        document.getElementById("ikkeEpost").innerHTML = "E-post adresse må inneholde @.".fontcolor("red");
        erGyldig = false;
    }
    if (!Epost){
        document.getElementById("ikkeEpost").innerHTML = "Skriv inn E-post.".fontcolor("red");
        erGyldig = false;
    }
    if (!erGyldig) {
        return;
    }
    //Legger inn en bestilling som billett, som deretter skal pushes inn i Billetter-arrayet.
    let billett = {
        Film,
        Antall,
        Fornavn,
        Etternavn,
        Telefonnummer,
        Epost
    };
    Billetter.push(billett);
    console.log(Billetter);//Sjekker at billettene er lagt til ordentlig. Brukte denne mye til debug.

    AltUt();

    //Setter verdien i input til defult.
    document.getElementById("Film").value = "Ingen";
    document.getElementById("Antall").value = "";
    document.getElementById("Fornavn").value = "";
    document.getElementById("Etternavn").value = "";
    document.getElementById("Telefonnr").value = "";
    document.getElementById("Epost").value = "";
}
//Funksjon for utskrift
function AltUt(){
    let ut = "<table><tr><td>Film:</td><td>Antall:</td><td>Fornavn:</td><td>Etternavn:</td>"+
        "<td>Telefonnummer:</td><td>E-post:</td></tr>"

    for(billett of Billetter){
        ut += "<tr><td>"+billett.Film+"</td><td>"+billett.Antall+"</td><td>"+billett.Fornavn+"</td><td>"+billett.Etternavn+"</td><td>"+billett.Telefonnummer+"</td><td>"+billett.Epost+"</td></tr>";
    }

    document.getElementById("AlleBilletter").innerHTML = ut;
}
//Funksjon for å tømme arrayet, slette utskriften, fjerne feilmeldinger og sette input til defult.
function slettAlle(){
    Billetter.length = 0;
    console.log(Billetter);
    document.getElementById("AlleBilletter").innerHTML = "";
    document.getElementById("ikkeValgtFilm").innerHTML = "";
    document.getElementById("ikkeAntall").innerHTML = "";
    document.getElementById("ikkeFornavn").innerHTML = "";
    document.getElementById("ikkeEtternavn").innerHTML = "";
    document.getElementById("ikkeTlf").innerHTML = "";
    document.getElementById("ikkeEpost").innerHTML = "";

    document.getElementById("Film").value = "Ingen";
    document.getElementById("Antall").value = "";
    document.getElementById("Fornavn").value = "";
    document.getElementById("Etternavn").value = "";
    document.getElementById("Telefonnr").value = "";
    document.getElementById("Epost").value = "";
}