const scenes = {
    1: { country: "Peru / Perú", emoji: "🇵🇪", text: "El Gringo arrives in Cusco. He can't find his hotel keys! What to do?<br><br><em>El Gringo llega a Cusco. ¡No encuentra las llaves de su hotel! ¿Qué hacer?</em>", choices: [
        { text: "Go drink local coffee / Ir a tomar café", nextScene: 2 },
        { text: "Check the local market / Revisar el mercado local", nextScene: 3 },
        { text: "Call the hotel manager / Llamar al gerente del hotel", nextScene: 4 }]
    },
    2: { country: "Cafeteria / Cafetería", emoji: "☕", text: "The coffee has no sugar! What now?<br><br><em>¡El café no tiene azúcar! ¿Qué hacer ahora?</em>", choices: [
        { text: "Ask for sugar in Spanish / Pedir azúcar en español", nextScene: 5 },
        { text: "Drink it black / Tomarlo negro", nextScene: 6 },
        { text: "Leave the cafe / Irse de la cafetería", nextScene: 7 }]
    },
    3: { country: "Market / Mercado", emoji: "🍎", text: "An old lady offers a mysterious fruit. Do you eat it?<br><br><em>Una anciana ofrece una fruta misteriosa. ¿La comes?</em>", choices: [
        { text: "Eat it / Comerla", nextScene: 8 },
        { text: "Politely refuse / Rechazar amablemente", nextScene: 5 },
        { text: "Buy a souvenir instead / Comprar un souvenir", nextScene: 6 }]
    },
    4: { country: "Hotel Lobby / Recepción", emoji: "🏨", text: "The manager is suspicious. Where are your keys?<br><br><em>El gerente sospecha. ¿Dónde están tus llaves?</em>", choices: [
        { text: "Admit you lost them / Admitir que las perdiste", nextScene: 9 },
        { text: "Lie and say they were stolen / Mentir y decir que las robaron", nextScene: 10 },
        { text: "Run to the nearest park / Correr al parque más cercano", nextScene: 7 }]
    },
    5: { country: "Brazil / Brasil", emoji: "🇧🇷", text: "You took a bus to Brazil. A dancer invites you to a Samba party!<br><br><em>Tomaste un bus a Brasil. ¡Un bailarín te invita a una fiesta de Samba!</em>", choices: [
        { text: "Dance all night / Bailar toda la noche", nextScene: 11 },
        { text: "Eat Feijoada / Comer Feijoada", nextScene: 12 },
        { text: "Take a nap / Tomar una siesta", nextScene: 13 }]
    },
    6: { country: "Colombia / Colombia", emoji: "🇨🇴", text: "You ended up in Medellín. It's beautiful, but you are lost.<br><br><em>Terminaste en Medellín. Es hermoso, pero estás perdido.</em>", choices: [
        { text: "Ask a local for directions / Preguntar a un local por direcciones", nextScene: 14 },
        { text: "Take a taxi to the center / Tomar un taxi al centro", nextScene: 12 },
        { text: "Walk until you find a landmark / Caminar hasta encontrar un lugar conocido", nextScene: 11 }]
    },
    7: { country: "Italy / Italia", emoji: "🇮🇹", text: "You got on the wrong plane! Welcome to Rome.<br><br><em>¡Te subiste al avión equivocado! Bienvenido a Roma.</em>", choices: [
        { text: "Eat real pizza / Comer pizza real", nextScene: 15 },
        { text: "Visit the Colosseum / Visitar el Coliseo", nextScene: 14 },
        { text: "Learn Italian phrases / Aprender frases en italiano", nextScene: 13 }]
    },
    // Escenas de desenlace o continuación profunda (8 al 15)
    8: { country: "Jungle / Selva", emoji: "🌿", text: "The fruit was magical! Now you can talk to animals.<br><br><em>¡La fruta era mágica! Ahora puedes hablar con los animales.</em>", choices: [{ text: "Talk to a monkey / Hablar con un mono", nextScene: 10 }, { text: "Search for treasure / Buscar un tesoro", nextScene: 15 }, { text: "Rest in the trees / Descansar en los árboles", nextScene: 12 }] },
    9: { country: "Police Station / Estación de Policía", emoji: "👮", text: "The police help you find your keys. You are saved!<br><br><em>La policía te ayuda a encontrar tus llaves. ¡Estás a salvo!</em>", choices: [{ text: "Go back to travel / Volver a viajar", nextScene: 11 }, { text: "Celebrate with dinner / Celebrar con una cena", nextScene: 15 }, { text: "Call your family / Llamar a tu familia", nextScene: 14 }] },
    10: { country: "Airport / Aeropuerto", emoji: "✈️", text: "Security caught you lying! You are in big trouble.<br><br><em>¡Seguridad te atrapó mintiendo! Estás en grandes problemas.</em>", choices: [{ text: "Confess / Confesar", nextScene: 9 }, { text: "Run to the gate / Correr a la puerta", nextScene: 7 }, { text: "Try to negotiate / Intentar negociar", nextScene: 8 }] },
    11: { country: "Party Time / Tiempo de Fiesta", emoji: "🎉", text: "You are the soul of the party! Everyone loves El Gringo.<br><br><em>¡Eres el alma de la fiesta! Todos aman a El Gringo.</em>", choices: [{ text: "Continue travel / Continuar viaje", nextScene: 15 }, { text: "Stay here / Quedarse aquí", nextScene: 13 }, { text: "Perform a song / Cantar una canción", nextScene: 14 }] },
    12: { country: "Foodie Trip / Aventura Gastronómica", emoji: "🥘", text: "The food is amazing. You decide to stay and study cooking.<br><br><em>La comida es increíble. Decides quedarte a estudiar cocina.</em>", choices: [{ text: "Learn local recipes / Aprender recetas locales", nextScene: 15 }, { text: "Open a restaurant / Abrir un restaurante", nextScene: 13 }, { text: "Write a food blog / Escribir un blog de comida", nextScene: 14 }] },
    13: { country: "Lost Forever / Perdido para siempre", emoji: "🏝️", text: "You fell asleep and missed your tour. Game Over.<br><br><em>Te quedaste dormido y perdiste tu tour. Juego Terminado.</em>", choices: [{ text: "Retry / Reintentar", nextScene: 1 }, { text: "Start over / Empezar de nuevo", nextScene: 1 }, { text: "Play again / Jugar otra vez", nextScene: 1 }] },
    14: { country: "Expert Traveler / Viajero Experto", emoji: "🗺️", text: "You navigated the city perfectly. Well done!<br><br><em>Navegaste la ciudad perfectamente. ¡Bien hecho!</em>", choices: [{ text: "Keep exploring / Seguir explorando", nextScene: 15 }, { text: "Go to next country / Ir al siguiente país", nextScene: 5 }, { text: "Relax at a hotel / Relajarse en un hotel", nextScene: 12 }] },
    15: { country: "Global Legend / Leyenda Mundial", emoji: "🏆", text: "Congratulations! You have completed 10+ stages of El Gringo's adventure! You are a legend.<br><br><em>¡Felicitaciones! ¡Has completado más de 10 etapas de la aventura de El Gringo! Eres una leyenda.</em>", choices: [{ text: "Play again / Jugar de nuevo", nextScene: 1 }, { text: "Share your story / Compartir tu historia", nextScene: 1 }, { text: "Restart / Reiniciar", nextScene: 1 }] }
};

// La función renderScene se mantiene igual a la anterior
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
