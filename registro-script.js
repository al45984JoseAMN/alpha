 // Función de Modo Oscuro
        function toggleModoOscuro() {
            const body = document.body;
            const btn = document.getElementById('btnModo');
            
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                btn.textContent = 'Modo Claro';
            } else {
                btn.textContent = 'Modo Oscuro';
            }
        }

        // alerta nativa y redirección
        document.getElementById('formRegistro').addEventListener('submit', function(event) {
            // Evita que la página se recargue de forma convencional
            event.preventDefault();

            // alerta
            alert("Ahora eres parte de la frecuencia αlpha");

            // Redirige automáticamente al index 
            window.location.href = 'index.html';
        });