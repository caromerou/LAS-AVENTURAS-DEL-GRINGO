const scenes = {
    1: {
        country: "United States / Estados Unidos",
        emoji: "🇺🇸",
        text: "The Gringo packs his suitcase in New York. He needs to catch an international flight, but he is running very late. What should he do?<br><br><em>El Gringo hace su maleta en Nueva York. Necesita tomar un vuelo internacional, pero va muy tarde. ¿Qué debería hacer?</em>",
        choices: [
            { text: "Take a fast taxi to the airport / Tomar un taxi rápido al aeropuerto", nextScene: 2 },
            { text: "Take the subway and hope for no delays / Tomar el metro y esperar que no haya retrasos", nextScene: 3 },
            { text: "Cancel the trip and stay home / Cancelar el viaje y quedarse en casa", nextScene: 4 }
        ]
    },
    2: {
        country: "Colombia / Colombia",
        emoji: "🇨🇴",
        text: "El Gringo arrives in Bogotá. It is raining heavily, and he is freezing cold. He decides to look for local food to warm up.<br><br><em>El Gringo llega a Bogotá. Llueve fuertemente y tiene mucho frío. Decide buscar comida local para entrar en calor.</em>",
        choices: [
            { text: "Order a hot Ajiaco soup / Pedir una sopa caliente de Ajiaco", nextScene: 5 },
            { text: "Buy cold street empanadas / Comprar empanadas callejeras frías", nextScene: 6 },
            { text: "Go straight to a traditional coffee shop / Ir directo a una cafetería tradicional", nextScene: 7 }
        ]
    },
    3: {
        country: "Japan / Japón",
        emoji: "🇯🇵",
        text: "The Gringo takes a detour to Tokyo. He gets lost in the massive Shinjuku station and cannot read the signs.<br><br><em>El Gringo toma un desvío a Tokio. Se pierde en la enorme estación de Shinjuku y no puede leer los letreros.</em>",
        choices: [
            { text: "Ask a station employee for help in English / Pedir ayuda a un empleado de la estación en inglés", nextScene: 6 },
            { text: "Follow a random group of tourists / Seguir a un grupo aleatorio de turistas", nextScene: 8 },
            { text: "Use a translation app on his phone / Usar una aplicación de traducción en su teléfono", nextScene: 5 }
        ]
    },
    4: {
        country: "Canada / Canadá",
        emoji: "🇨🇦",
        text: "The Gringo changes his mind and flies north to Canada. While walking in a snowy forest, he encounters a wild bear!<br><br><em>El Gringo cambia de opinión y vuela al norte a Canadá. Mientras camina en un bosque nevado, ¡se encuentra con un oso salvaje!</em>",
        choices: [
            { text: "Run away as fast as possible / Huir lo más rápido posible", nextScene: 9 },
            { text: "Make loud noises and back away slowly / Hacer ruidos fuertes y retroceder lentamente", nextScene: 10 },
            { text: "Offer the bear a snack / Ofrecerle un bocadillo al oso", nextScene: 9 }
        ]
    },
    5: {
        country: "France / Francia",
        emoji: "🇫🇷",
        text: "El Gringo visits Paris and goes to an expensive restaurant. The waiter hands him the menu in French.<br><br><em>El Gringo visita París y va a un restaurante costoso. El mesero le entrega el menú en francés.</em>",
        choices: [
            { text: "Point randomly at something on the menu / Señalar al azar algo en el menú", nextScene: 8 },
            { text: "Politely ask for an English menu / Pedir amablemente un menú en inglés", nextScene: 10 },
            { text: "Pretend to understand and order escargot / Fingir que entiende y pedir caracoles", nextScene: 6 }
        ]
    },
    6: {
        country: "Egypt / Egipto",
        emoji: "🇪🇬",
        text: "Seeking adventure, El Gringo travels to Egypt and enters a dark pyramid. His flashlight battery starts dying.<br><br><em>Buscando aventura, El Gringo viaja a Egipto y entra a una pirámide oscura. La batería de su linterna empieza a agotarse.</em>",
        choices: [
            { text: "Keep walking deeper into the dark / Seguir caminando más adentró en la oscuridad", nextScene: 9 },
            { text: "Turn back and exit the pyramid / Volver atrás y salir de la pirámide", nextScene: 7 },
            { text: "Use his smartphone screen as a flashlight / Usar la pantalla de su smartphone como linterna", nextScene: 10 }
        ]
    },
    7: {
        country: "Brazil / Brasil",
        emoji: "🇧🇷",
        text: "El Gringo lands in Rio de Janeiro during Carnival. People invite him to dance Samba in the middle of the street.<br><br><em>El Gringo aterriza en Río de Janeiro durante el Carnaval. La gente lo invita a bailar Samba en plena calle.</em>",
        choices: [
            { text: "Join the dance and enjoy the music / Unirse al baile y disfrutar la música", nextScene: 10 },
            { text: "Hide behind a nearby palm tree / Esconderse detrás de una palmera cercana", nextScene: 9 },
            { text: "Sit down and eat local cheese / Sentarse a comer queso local", nextScene: 8 }
        ]
    },
    8: {
        country: "Australia / Australia",
        emoji: "🇦🇺",
        text: "El Gringo travels to Sydney and goes surfing at Bondi Beach. He spots a large fin moving in the water.<br><br><em>El Gringo viaja a Sídney y va a surfear a la playa Bondi. Divisa una gran aleta moviéndose en el agua.</em>",
        choices: [
            { text: "Swim back to shore immediately / Nadar de regreso a la orilla inmediatamente", nextScene: 10 },
            { text: "Try to take a selfie with the creature / Intentar tomarse una selfi con la criatura", nextScene: 9 },
            { text: "Paddle closer to see what it is / Remar más cerca para ver qué es", nextScene: 9 }
        ]
    },
    9: {
        country: "The Lost Island / La Isla Perdida",
        emoji: "🏝️",
        text: "Oh no! Due to bad choices, El Gringo got stranded on a deserted island with no internet connection.<br><br><em>¡Oh no! Debido a malas decisiones, El Gringo quedó varado en una isla desierta sin conexión a internet.</em><br><br><strong>GAME OVER / JUEGO TERMINADO</strong>",
        choices: [
            { text: "Restart Adventure / Reiniciar Aventura", nextScene: 1 }
        ]
    },
    10: {
        country: "Victory / Victoria (Global Citizen)",
        emoji: "🏆",
        text: "Congratulations! El Gringo survived all his international travels, learned new cultures, and became a true globetrotter.<br><br><em>¡Felicitaciones! El Gringo sobrevivió a todos sus viajes internacionales, aprendió nuevas culturas y se convirtió en un verdadero trotamundos.</em><br><br><strong>VICTORY / VICTORIA</strong>",
        choices: [
            { text: "Play Again / Jugar de Nuevo", nextScene: 1 }
        ]
    }
};

let currentSceneId = 1;

function renderScene(sceneId) {
    const scene = scenes[sceneId];
    currentSceneId = sceneId;

    // Actualizar elementos visuales
    document.getElementById('scene-counter').innerText = `Scene ${sceneId} / Escena ${sceneId}`;
    document.getElementById('country-title').innerText = scene.country;
    document.getElementById('country-emoji').innerText = scene.emoji;
    document.getElementById('story-text').innerHTML = scene.text;

    // Generar botones de opciones
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.innerHTML = choice.text;
        button.onclick = () => renderScene(choice.nextScene);
        choicesContainer.appendChild(button);
    });
}

// Iniciar el juego en la escena 1 al cargar la página
window.onload = () => {
    renderScene(1);
};
