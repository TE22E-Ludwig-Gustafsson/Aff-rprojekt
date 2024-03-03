var varukorgBild = document.querySelector('.varukorg');
var varukorgPopup = document.getElementById('varukorgPopup');
var stängBtn = document.getElementById('stängBtn');

// Visa varukorgs-popupen när varukorgsbilden klickas
varukorgBild.addEventListener('click', function() {
    varukorgPopup.style.display = 'block';
});

// Göm varukorgs-popupen när stängknappen klickas
stängBtn.addEventListener('click', function() {
    varukorgPopup.style.display = 'none';
})

// Hämta alla knappar för att lägga till i varukorgen
var läggTillKnappar = document.querySelector('.lägg-till');

// Lyssna på klickhändelser för varje lägg till i varukorg-knapp
läggTillKnappar.forEach(function(knapp){
    knapp.addEventListener('click', function(){
        // Hämta produktens information från den närliggande DOM
        var produktInfo = knapp.parentNode;
        var produktNamn = produktInfo.querySelector('img').alt;
        var produktPris = produktInfo.querySelector('.pris').textContent;

        // Skapa en ny listpunkt för varje produkt och lägg till i varukorgslistan
        var varukorgLista = document.getElementById('varukorgLista');
        var nyProdukt = document.createElement('li');
        nyProdukt.textContent = `${produktNamn} - ${produktPris}`;
        varukorgLista.appendChild(nyProdukt);
    })
})

// Funktion för att uppdatera det totala priset i varukorgen
function uppdateraTotalPris() {
    var totalPrisElement = document.getElementById('totalPris');
    var totalPris = 0;
    
    // Loopa igenom alla listpunkter i varukorgen och lägg till priserna
    var varukorgListePunkter = document.querySelectorAll('.varukorg-lista li');
    varukorgListePunkter.forEach(function(punkt) {
        var produktPrisText = punkt.textContent.split(' - ')[1]; // Få tag på priset från texten
        var produktPris = parseFloat(produktPrisText.replace(' kr', '')); // Konvertera priset till ett flyttal
        totalPris += produktPris;
    });
    
    // Visa det totala priset
    totalPrisElement.textContent = 'Totalt pris: ' + totalPris.toFixed(2) + ' kr';
}

// Lyssna på klickhändelser för varje lägg till i varukorgen-knapp
läggTillKnappar.forEach(function(knapp) {
    knapp.addEventListener('click', function() {
        // Här lägger du till koden för att lägga till produkten i varukorgen
        uppdateraTotalPris(); // Uppdatera det totala priset efter att en produkt lagts till
    });
});

var rensaKorgBtn = document.getElementById('rensaKorg');

// Lyssna på klickhändelser för rensa-knappen
rensaKorgBtn.addEventListener('click', function() {
    var varukorgLista = document.getElementById('varukorgLista');
    varukorgLista.innerHTML = ''; // Ta bort allt innehåll från varukorgslistan
    uppdateraTotalPris();
});