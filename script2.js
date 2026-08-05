/*.𖥔 ݁ ˖── .✦       »»————-The night sky has returned————-««     .𖥔 ݁ ˖── .✦        .                                                   ::            
               :                                               .:::             
                :-                                            ::::              
                  ==--:.                     ::...          :::::.              
                     --=.                  . :::          .::::::.              
                    ..:.=:           :                   ::::::::::             
         ::      ..::...::::.                           ::::-----:::. .:.       
            :-:.::::.:::::::::.                      ..----:::::: :      :      
              =::::.:::.::+..:-:...             ...  ::::::::::::::.     -      
               +:::::::-:-:.:::::.:..  .. ......... :::----:::::        .       
                .::::---.....=::::::::.....:.....:-----::::::.         :        
                .:::----:::::::-:::::::::..... :..::::::::::         ..         
                .:::--.:...=.:-::::::::::::::  .: . :::-:::.       -          ::
                .:::....:::::::::::-:::::::::...: .  :::::::.   ::-------------:
                 ...-:.:::::::::.::::::::::::::.. .  :---===+==------------:--: 
                .  . .:::::::::.::::: .::::::.::      --=:.--------------::---  
                .: ::::::.::::.::::::::..:.::::...  =--:: =---------------:::.  
                ..:::::::::::::::::::::::.:.... .....--:-=---------------       
              ..::::::::. ...:::::::::::::::....     .. .------:..--:           
           ...-.:::::::::::::---:::-::::----::... .  .  .:  .                   
         ..:.::::::::::::::::-----::::::-----::.. .. ...  .......               
     ..:::::::::::::::::::::-------:::::------:::.::....... . .............     
   .::::::::::-:::::-::::::-------------------:::.:..............:::............
.::::::::::::--------------======+++*==---------:.::..:.:.::.::...::::...::..:::
:::.:::.:::.........::---------------------------:::::::::::::::::..:.::::::::::
*/ 

  
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('boton-modo');
    const body = document.body;

    // Cargar estado inicial del tema guardado
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (btn) btn.textContent = 'Modo Claro';
    }

    if (btn) {
        btn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            const isDarkMode = body.classList.contains('dark-mode');
            btn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
            
            // Guardar preferencia
            if (isDarkMode) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Slider
    let currentSlide = 0;
    const sliderTrack = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slider-slide');

    window.moveSlide = function(direction) {
        if (!sliderTrack || slides.length === 0) return;
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // Reproductor de Musica Flotante y Playlist
    const playlist = [
        { 
            name: "Lush FM Trance Fingers - Live at Alexandra Palace London, 24th May 2023 - Four Tet", 
            src: "musica/lush-fm.mp3" 
        }, 
        {
            name: "OP 3 - Gathaspar", 
            src: "musica/Gathaspar_-_Op_3.mp3"
        },
        {
            name: "Diabla Extended Mix - Joris Voorm ",
            src: "musica/Diabla - Extended Mix - Joris Voorn.mp3"
        },
        {
            name: "Blame - James Zabiela",
            src: "musica/Blame - James Zabiela.mp3"
        },
        {
            name: "Obsession - DjRUM",
            src: "musica/Obsession - DjRUM.mp3"
        },
        {
            name: "You Thought - Mall Grab",
            src: "musica/You Thought - Mall Grab.mp3"
        }
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

    if (audioPlayer) {
        audioPlayer.addEventListener('ended', function() {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(currentTrackIndex);
            audioPlayer.play().catch(error => console.log("Autoplay bloqueado:", error));
        });
    }
});
// --- Portal de Aegis ---
function verificarAegis() {
    const password = prompt("Introduce la contraseña de acceso para Aegis:");
    
    if (password === "Aegis001") {
        window.location.href = "aegis.html";
    } else if (password !== null) {
        alert("Contraseña incorrecta. Acceso denegado.");
    }
};
//The Light of Aegis