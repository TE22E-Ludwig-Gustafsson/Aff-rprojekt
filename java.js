var varukorgBild = document.querySelector('.varukorg'); // Hämta varukorgsbilden
var varukorgPopup = document.getElementById('varukorgPopup'); // Hämta varukorgspopupen
var stängBtn = document.getElementById('stängBtn'); // Hämta stängknappen för popupen

varukorgBild.addEventListener('click', function() { // Lyssna på klick på varukorgsbilden
    varukorgPopup.style.display = 'block'; // Visa varukorgspopupen när bilden klickas
});

stängBtn.addEventListener('click', function() { // Lyssna på klick på stängknappen
    varukorgPopup.style.display = 'none'; // Göm varukorgspopupen när stängknappen klickas
});

var läggTillKnappar = document.querySelectorAll('.lägg-till'); // Hämta alla "lägg till i varukorg"-knappar

läggTillKnappar.forEach(function(knapp) { // Loopa igenom varje "lägg till i varukorg"-knapp
    knapp.addEventListener('click', function() { // Lyssna på klick på varje knapp
        var produktInfo = knapp.parentNode; // Hämta föräldernoden till knappen (produktinformation)
        var produktNamn = produktInfo.querySelector('img').alt; // Hämta produktens namn från bildens alt-attribut
        var produktPris = produktInfo.querySelector('.pris').textContent; // Hämta produktens pris från elementet med klassen "pris"

        var varukorgLista = document.getElementById('varukorgLista'); // Hämta varukorgslistan
        var nyProdukt = document.createElement('li'); // Skapa en ny listpunkt för produkten
        nyProdukt.textContent = `${produktNamn} - ${produktPris}`; // Fyll listpunkten med produktens namn och pris
        varukorgLista.appendChild(nyProdukt); // Lägg till listpunkten i varukorgslistan
    });
});

function uppdateraTotalPris() { // Funktion för att uppdatera det totala priset i varukorgen
    var totalPrisElement = document.getElementById('totalPris'); // Hämta elementet för det totala priset
    var totalPris = 0; // Skapa en variabel för det totala priset och sätt den till noll

    var varukorgListePunkter = document.querySelectorAll('.varukorg-lista li'); // Hämta alla listpunkter i varukorgen
    varukorgListePunkter.forEach(function(punkt) { // Loopa igenom varje listpunkt
        var produktPrisText = punkt.textContent.split(' - ')[1]; // Dela upp texten för att få fram priset
        var produktPris = parseFloat(produktPrisText.replace(' kr', '')); // Konvertera priset till ett flyttal
        totalPris += produktPris; // Lägg till priset till totalpriset
    });

    totalPrisElement.textContent = 'Totalt pris: ' + totalPris.toFixed(2) + ' kr'; // Visa det totala priset
}

läggTillKnappar.forEach(function(knapp) { // Lyssna på klick på varje "lägg till i varukorg"-knapp
    knapp.addEventListener('click', function() { // När en knapp klickas
        uppdateraTotalPris(); // Uppdatera det totala priset
    });
});

var rensaKorgBtn = document.getElementById('rensaKorg'); // Hämta knappen för att rensa varukorgen

rensaKorgBtn.addEventListener('click', function() { // Lyssna på klick på rensa-knappen
    var varukorgLista = document.getElementById('varukorgLista'); // Hämta varukorgslistan
    varukorgLista.innerHTML = ''; // Ta bort allt innehåll från varukorgslistan
    uppdateraTotalPris(); // Uppdatera det totala priset
});
