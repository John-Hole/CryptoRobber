// Funzione globale per aprire il trailer
function openTrailer() {
    document.getElementById('trailerModal').style.display = 'block';
  }
  
  // Funzione globale per chiudere il trailer
  function closeTrailer() {
    document.getElementById('trailerModal').style.display = 'none';
  }
  
  // Funzione per il download protetto da password
  function downloadTrailer() {
    const password = prompt("Inserisci la password per scaricare il trailer:");
    if (password === "cryptoD") {
      window.open("https://drive.google.com/file/d/1PoGHrBkkJdqW4Z8ZhLeUrtbClo1p-ngx/view?usp=sharing ", "_blank");
    } else {
      alert("Password errata!");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("langToggle");
    let isItalian = false;
  
    // Imposta l'inglese come lingua di default
    updateLanguage();
  
    langToggle.addEventListener("change", function () {
      isItalian = langToggle.checked;
      updateLanguage();
    });
  
    function updateLanguage() {
      document.querySelectorAll("[data-en], [data-it]").forEach(el => {
        el.textContent = isItalian ? el.getAttribute("data-it") : el.getAttribute("data-en");
      });
    }
  });