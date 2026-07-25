document.addEventListener('DOMContentLoaded', () => {
    // =================================================
    // 1. MODO OSCURO (DARK MODE)
    // =================================================
    const btnModo = document.getElementById('boton-modo');
    const body = document.body;

    // Comprobar si el usuario ya tenía el modo oscuro guardado previamente
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
        if (btnModo) btnModo.textContent = 'Modo Claro';
    }

    if (btnModo) {
        btnModo.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            const isDarkMode = body.classList.contains('dark-mode');
            btnModo.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
            
            // Guardar preferencia en el navegador
            localStorage.setItem('dark-mode', isDarkMode);
        });
    }

    // =================================================
    // 2. FUNCIONAMIENTO DEL SLIDER / CARRUSEL
    // =================================================
    let currentSlide = 0;
    const sliderTrack = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slider-slide');

    // Hacemos global la función moveSlide para que funcione con los onclick del HTML
    window.moveSlide = function(direction) {
        if (!sliderTrack || slides.length === 0) return;
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // =================================================
    // 3. REPRODUCTOR DE MÚSICA FLOTANTE Y PLAYLIST
    // =================================================
    const playlist = [
        { 
            name: "Lush FM Trance Fingers - Live at Alexandra Palace London, 24th May 2023 - Four Tet", 
            src: "musica/lush-fm.mp3" 
        }
        // Puedes agregar más canciones aquí fácilmente respetando la estructura:
        // { name: "Nombre de la canción - Artista", src: "musica/archivo.mp3" }
    ];

    let currentTrackIndex = 0;
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const playerTitle = document.getElementById('player-title');

    function loadTrack(index) {
        if (!audioPlayer || !audioSource || !playerTitle || playlist.length === 0) return;
        currentTrackIndex = index;
        audioSource.src = playlist[currentTrackIndex].src;
        playerTitle.textContent = playlist[currentTrackIndex].name;
        audioPlayer.load();
    }

    // Detecta cuando termina una canción y pasa automáticamente a la siguiente
    if (audioPlayer) {
        audioPlayer.addEventListener('ended', function() {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(currentTrackIndex);
            audioPlayer.play().catch(error => console.log("Autoplay bloqueado por el navegador:", error));
        });
    }
});