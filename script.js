const scenes = {
    1: {
        country: "Peru / Perú", emoji: "🇵🇪",
        text: "El Gringo arrives in Cusco. He can't find his hotel keys! What to do?<br><br><em>El Gringo llega a Cusco. ¡No encuentra las llaves de su hotel! ¿Qué hacer?</em>",
        choices: [
            { text: "Go drink local coffee / Ir a tomar café", nextScene: 2 },
            { text: "Go back to USA / Regresar a EE.UU.", nextScene: 3 },
            { text: "Travel to Brazil / Viajar a Brasil", nextScene: 4 }
        ]
    },
    2: {
        country: "Cafeteria / Cafetería", emoji: "☕",
        text: "The coffee has no sugar! What now?<br><br><em>¡El café no tiene azúcar! ¿Qué hacer ahora?</em>",
        choices: [
            { text: "Complain loudly / Quejarse fuerte", nextScene: 5 },
            { text: "Ask for sugar in Spanish / Pedir azúcar en español", nextScene: 6 },
            { text: "Drink it black / Tomarlo negro", nextScene: 7 }
        ]
    },
    3: {
        country: "United States / Estados Unidos", emoji: "🇺🇸",
        text: "A squirrel stole his passport in NYC! What now?<br><br><em>¡Una ardilla le robó el pasaporte en NYC! ¿Y ahora?</em>",
        choices: [
            { text: "Chase the squirrel / Perseguir a la ardilla", nextScene: 8 },
            { text: "Flight to France / Vuelo a Francia", nextScene: 9 },
            { text: "Eat a hotdog / Comer perro caliente", nextScene: 10 }
        ]
    },
    4: {
        country: "Brazil / Brasil", emoji: "🇧🇷",
        text: "A street party! What does El Gringo do?<br><br><em>¡Una fiesta callejera! ¿Qué hace El Gringo?</em>",
        choices: [
            { text: "Dance Samba / Bailar Samba", nextScene: 5 },
            { text: "Eat Feijoada / Comer Feijoada", nextScene: 6 },
            { text: "Panic / Entrar en pánico", nextScene: 7 }
        ]
    },
    5: { country: "Japan / Japón", emoji: "🇯🇵", text: "He is in Tokyo hungry. What to eat?<br><br><em>Está en Tokio con hambre. ¿Qué comer?</em>", choices: [{ text: "Ramen", nextScene: 10 }, { text: "Sushi", nextScene: 9 }, { text: "Burger", nextScene: 8 }] },
    6: { country: "Italy / Italia", emoji: "🇮🇹", text: "Pizza with ketchup? Chef is angry! What to do?<br><br><em>¿Pizza con kétchup? ¡El chef está furioso! ¿Qué hacer?</em>", choices: [{ text: "Apologize / Disculparse", nextScene: 10 }, { text: "Defend it / Defenderla", nextScene: 8 }, { text: "Run / Correr", nextScene: 9 }] },
    7: { country: "Colombia / Colombia", emoji: "🇨🇴", text: "Arepa with cheese! Enjoy it?<br><br><em>¡Arepa con queso! ¿Disfrutarla?</em>", choices: [{ text: "Yes! / ¡Sí!", nextScene: 10 }, { text: "No / No", nextScene: 9 }, { text: "Maybe / Tal vez", nextScene: 8 }] },
    8: { country: "Lost / Perdido", emoji: "🏝️", text: "Game Over. Try again!<br><br><em>Juego terminado. ¡Inténtalo de nuevo!</em>", choices: [{ text: "Restart / Reiniciar", nextScene: 1 }, { text: "Restart", nextScene: 1 }, { text: "Restart", nextScene: 1 }] },
    9: { country: "Customs / Aduanas", emoji: "🛃", text: "Stuck in customs. Game Over.<br><br><em>Atrapado en aduanas. Juego terminado.</em>", choices: [{ text: "Restart / Reiniciar", nextScene: 1 }, { text: "Restart", nextScene: 1 }, { text: "Restart", nextScene: 1 }] },
    10: { country: "Victory / Victoria", emoji: "🏆", text: "You won! Great adventure.<br><br><em>¡Ganaste! Gran aventura.</em>", choices: [{ text: "Play again / Jugar de nuevo", nextScene: 1 }, { text: "Restart", nextScene: 1 }, { text: "Restart", nextScene: 1 }] }
};

function renderScene(sceneId) {
    const scene = scenes[sceneId];
    document.getElementById('scene-counter').innerText = `Scene ${sceneId} / Escena ${sceneId}`;
    document.getElementById('country-title').innerText = scene.country;
    document.getElementById('country-emoji').innerText = scene.emoji;
    document.getElementById('story-text').innerHTML = scene.text;
    const container = document.getElementById('choices-container');
    container.innerHTML = '';
    scene.choices.forEach(c => {
        const b = document.createElement('button');
        b.className = 'choice-btn';
        b.innerHTML = c.text;
        b.onclick = () => renderScene(c.nextScene);
        container.appendChild(b);
    });
}
window.onload = () => renderScene(1);
