// // Base de datos de canciones del Gacha (Frecuencias Perdidas)
// const gachaPool = [
//     {
//         id: "mumbai",
//         name: "Mumbai Power",
//         artist: "Skrillex, BEAM",
//         src: "musica/Skrillex, BEAM - Mumbai Power.mp3",
//         img: "imagenes-aegis/nurture.jpg",
//         rarity: "Épico"
//     },
//     {
//         id: "delete",
//         name: "Delete",
//         artist: "Ninajirachi",
//         src: "musica/Ninajirachi - Delete.mp3",
//         img: "imagenes-aegis/ill-be-for-you.jpg",
//         rarity: "Raro"
//     },
//     {
//         id: "supersonic",
//         name: "Supersonic",
//         artist: "Rob Gasser",
//         src: "musica/Rob Gasser - Supersonic.mp3",
//         img: "imagenes-aegis/supersonic.jpg",
//         rarity: "Raro"
//     },
//     {
//         id: "comforting",
//         name: "Something Comforting",
//         artist: "Porter Robinson",
//         src: "musica/Porter Robinson - Something Comforting.mp3",
//         img: "imagenes-aegis/nurture.jpg",
//         rarity: "Legendario"
//     }
// ];

// let darkEther = parseInt(localStorage.getItem('aegis_dark_ether')) || 50;
// let unlockedSongs = JSON.parse(localStorage.getItem('aegis_unlocked_songs')) || [];

// document.addEventListener("DOMContentLoaded", () => {
//     updateEtherDisplay();
//     renderCollection();

//     const pullBtn = document.getElementById('pullGachaBtn');
//     const claimBtn = document.getElementById('claimEtherBtn');
//     const closeModalBtn = document.getElementById('closeModalBtn');

//     if (pullBtn) pullBtn.addEventListener('click', performSummon);
//     if (claimBtn) claimBtn.addEventListener('click', claimFreeEther);
//     if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
// });

// function updateEtherDisplay() {
//     const etherEl = document.getElementById('darkEtherCount');
//     if (etherEl) etherEl.textContent = darkEther;
//     localStorage.setItem('aegis_dark_ether', darkEther);
// }

// function claimFreeEther() {
//     darkEther += 20;
//     updateEtherDisplay();
//     // Suma de éter silenciosa (sin alertas emergentes)
// }

// function performSummon() {
//     const cost = 10;
//     if (darkEther < cost) {
//         alert("Éter Oscuro insuficiente. Consigue más energía para sintonizar.");
//         return;
//     }

//     darkEther -= cost;
//     updateEtherDisplay();

//     // Seleccionar aleatoriamente una frecuencia del pool
//     const randomIndex = Math.floor(Math.random() * gachaPool.length);
//     const reward = gachaPool[randomIndex];

//     // Guardar en colección si no se tenía desbloqueada previamente
//     if (!unlockedSongs.some(song => song.id === reward.id)) {
//         unlockedSongs.push(reward);
//         localStorage.setItem('aegis_unlocked_songs', JSON.stringify(unlockedSongs));
//         renderCollection();
//     }

//     showRewardModal(reward);
// }

// function showRewardModal(song) {
//     const modal = document.getElementById('gachaResultModal');
//     const infoContainer = document.getElementById('droppedCardInfo');

//     if (infoContainer) {
//         infoContainer.innerHTML = `
//             <img src="${song.img}" alt="${song.name}">
//             <h4 style="color: #f1f5f9; margin: 5px 0; font-size: 0.95rem;">${song.name}</h4>
//             <p style="font-size:0.8rem; color:#64748b; margin:0;">${song.artist}</p>
//             <span style="display:inline-block; margin-top:8px; font-size:0.75rem; color:#38bdf8; background:rgba(56,189,248,0.1); padding:2px 8px; border-radius:4px; border: 1px solid rgba(56,189,248,0.3);">${song.rarity}</span>
//         `;
//     }

//     if (modal) modal.style.display = 'flex';
// }

// function closeModal() {
//     const modal = document.getElementById('gachaResultModal');
//     if (modal) modal.style.display = 'none';
// }

// function renderCollection() {
//     const track = document.getElementById('gachaCollectionTrack');
//     if (!track) return;

//     if (unlockedSongs.length === 0) {
//         track.innerHTML = `<p style="color: #64748b; font-size: 0.85rem; padding: 10px; width: 100%; text-align: center;">Aún no hay frecuencias sintonizadas. ¡Invoca arriba para comenzar!</p>`;
//         return;
//     }

//     track.innerHTML = '';
//     unlockedSongs.forEach((song, index) => {
//         const trackNum = String(index + 1).padStart(2, '0');
//         const card = document.createElement('div');
//         card.className = 'collection-card';
//         card.innerHTML = `
//             <div class="card-top-row">
//                 <span class="track-number">${trackNum}</span>
//                 <img src="${song.img}" alt="${song.name}">
//                 <div class="card-meta">
//                     <h4>${song.name}</h4>
//                     <p>${song.artist}</p>
//                 </div>
//             </div>
//             <div class="card-player-row">
//                 <audio id="audio-${song.id}" src="${song.src}"></audio>
//                 <button class="btn-play-mini" id="btn-icon-${song.id}" onclick="playUnlockedSong('${song.id}')">▶</button>
//                 <div class="mini-progress-bar" id="progress-container-${song.id}">
//                     <div class="mini-progress-fill" id="progress-fill-${song.id}"></div>
//                 </div>
//             </div>
//         `;
//         track.appendChild(card);
//     });
// }

// function playUnlockedSong(id) {
//     const audioElement = document.getElementById(`audio-${id}`);
//     const btnIcon = document.getElementById(`btn-icon-${id}`);
//     const fillBar = document.getElementById(`progress-fill-${id}`);

//     // Pausar y resetear los demás audios de la colección
//     document.querySelectorAll('.collection-card audio').forEach(audio => {
//         if (audio.id !== `audio-${id}`) {
//             audio.pause();
//             audio.currentTime = 0;
//             const otherId = audio.id.replace('audio-', '');
//             const otherBtn = document.getElementById(`btn-icon-${otherId}`);
//             if (otherBtn) otherBtn.textContent = "▶";
//             const otherFill = document.getElementById(`progress-fill-${otherId}`);
//             if (otherFill) otherFill.style.width = "0%";
//         }
//     });

//     if (audioElement.paused) {
//         audioElement.play();
//         if (btnIcon) btnIcon.textContent = "⏸";

//         // Actualizar barra de progreso dinámica
//         audioElement.ontimeupdate = () => {
//             if (audioElement.duration && fillBar) {
//                 const progressPercent = (audioElement.currentTime / audioElement.duration) * 100;
//                 fillBar.style.width = `${progressPercent}%`;
//             }
//         };

//         audioElement.onended = () => {
//             if (btnIcon) btnIcon.textContent = "▶";
//             if (fillBar) fillBar.style.width = "0%";
//         };
//     } else {
//         audioElement.pause();
//         if (btnIcon) btnIcon.textContent = "▶";
//     }
// }

// function moveHorizontalSlider(direction) {
//     const track = document.getElementById('gachaCollectionTrack');
//     if (!track) return;
//     const scrollAmount = 300;
//     track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
// }