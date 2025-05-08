// Funzione globale per aprire il trailer
function openTrailer() {
    document.getElementById('trailerModal').style.display = 'block';
  }
  
  // Funzione globale per chiudere il trailer
  function closeTrailer() {
    document.getElementById('trailerModal').style.display = 'none';
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