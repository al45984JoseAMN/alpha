 document.addEventListener('DOMContentLoaded', () => {
            const audioElements = document.querySelectorAll('audio');

            audioElements.forEach(audio => {
                const card = audio.closest('.track-card');
                const visualizer = card.querySelector('.audio-visualizer');

                audio.addEventListener('play', () => {
                    audioElements.forEach(otherAudio => {
                        if (otherAudio !== audio) {
                            otherAudio.pause();
                        }
                    });
                    visualizer.classList.add('active');
                });

                audio.addEventListener('pause', () => {
                    visualizer.classList.remove('active');
                });

                audio.addEventListener('ended', () => {
                    visualizer.classList.remove('active');
                });
            });
        });
