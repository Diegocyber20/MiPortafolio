window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal, .project-card, .skill-item');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// Ejecutar una vez al cargar para mostrar lo que ya está en pantalla
reveal();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("🚀 ¡Mensaje enviado con éxito! Diego te contactará pronto.");
});
