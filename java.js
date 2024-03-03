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