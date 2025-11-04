var translations = {
    "es": {
        "navInicio": "Inicio",
        "aboutTitle": "Acerca de mí",
        "aboutText": "Soy ruflas, actualmente soy un estudiante de 4º año en Ingeniería Informática y estoy interesado en campos como la ciberseguridad, el desarrollo y la administración de sistemas y redes.",
        "projectsTitle": "Proyectos",
        "project1": 'Aplicación web en desarrollo: <a href="https://resize.zip" target="_blank">resize.zip</a>',
        "project2": 'BOT de Telegram: <a href="https://github.com/ruflas/Virtual-Assistant-Telegram-Bot" target="_blank">repositorio de github</a>',
        "project3": "Homelab: Construyendo un laboratorio para desplegar mis propios proyectos.",
        "analyticsText": "Este sitio web recolecta información básica de forma anónima, es decir, sin emplear cookies. El sitio emplea una instancia autónoma de <a href='https://umami.is/' target='_blank'>Umami</a>, una herramienta de análisis web, para efectuar dicha recolección de datos. Los resultados de estos análisis están disponibles para su visualización pública <a href='https://stats.ruflas.dev/share/nEqun93OOaAxYeQZ/ruflas.dev' target='_blank'>aquí</a>.",
        "contactTitle": "Contacto / Enlaces de interés",
        "footerText": "© 2022-2025 ruflas | licenciado bajo <a href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>CC BY-SA</a> 😽",
        "contentTitle": "¿Qué estoy haciendo?",
        "contentIntro": "Actualmente esta es la lista de cosas que estoy haciendo:",
        "contentStudy": "Estudiando el grado de Ingeniería Informática en Tecnologías de la Información en la <a href='https://epigijon.uniovi.es/' target='_blank'>EPI</a>, escuela de la <a href='https://uniovi.es' target='_blank'>Universidad de Oviedo</a>.",
        "contentStudy2": "2024–2025: Cursé un año académico de mi grado en Ingeniería Informática como estudiante Erasmus+ en la <a href='https://study.ans-elblag.pl' target='_blank'>University of Applied Sciences in Elbląg</a> (Polonia).",
	"selfLearning": "Formándome por mi cuenta en diversos campos como son:",
        "listItem1": "Pentesting y Hacking Ético",
        "listItem2": "Desarrollo de aplicaciones Web",
        "listItem3": "Sistemas y Redes",
        "previousActivities": "Cosas que he estado haciendo anteriormente:",
        "activity1": "Jun-Ago 2023: Trabajando como \"Analista de Ciberseguridad\" en prácticas en <a href='https://seresco.es' target='_blank'>seresco</a>",
        "activity2": "Jul-Ago 2022: Trabajando como \"Desarrollador Backend\" en prácticas en <a href='https://ebroker.es' target='_blank'>ebroker</a>",
        "activity3": "Nov 2025 - Jun 2026: Trabajando como \"Becario en Servicios Informáticos\" en <a href='https://uniovi.es' target='_blank'>Universidad de Oviedo</a>"
    },
    "en": {
        "navInicio": "Home",
        "aboutTitle": "About me",
        "aboutText": "I am ruflas, I am currently a 4rd year student in Computer Engineering and I am interested in fields such as cybersecurity, development, and administration of systems and networks.",
        "projectsTitle": "Projects",
        "project1": 'Web application in development: <a href="https://resize.zip" target="_blank">resize.zip</a>',
        "project2": 'Telegram BOT: <a href="https://github.com/ruflas/Virtual-Assistant-Telegram-Bot" target="_blank">github repository</a>',
        "project3": "Homelab: Building a lab to deploy my own projects.",
        "analyticsText": "This website collects basic information anonymously, meaning without using cookies. The site uses a standalone instance of <a href='https://umami.is/' target='_blank'>Umami</a>, a web analytics tool, for this data collection. The results of these analyses are available for public viewing <a href='https://stats.ruflas.dev/share/nEqun93OOaAxYeQZ/ruflas.dev' target='_blank'>here</a>.",
        "contactTitle": "Contact / Interesting links",
        "footerText": "© 2022-2025 ruflas | licensed under <a href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>CC BY-SA</a> 😽",
        "contentTitle": "What am I doing?",
        "contentIntro": "Currently, this is the list of things I'm doing:",
        "contentStudy": "Studying a degree in Computer Engineering in Information Technologies at the <a href='https://epigijon.uniovi.es/' target='_blank'>EPI</a>, a school of the <a href='https://uniovi.es' target='_blank'>University of Oviedo</a>.",
        "contentStudy2": "2024–2025: Completed one academic year of my Computer Engineering degree as an Erasmus+ student at the <a href='https://study.ans-elblag.pl' target='_blank'>University of Applied Sciences in Elbląg</a> (Poland).",
	"selfLearning": "Self-training in various fields such as:",
        "listItem1": "Pentesting and Ethical Hacking",
        "listItem2": "Web application development",
        "listItem3": "Systems and Networks",
        "previousActivities": "Things I have been doing previously:",
        "activity1": "Jun-Aug 2023: Working as a \"Cybersecurity Analyst\" intern at <a href='https://seresco.es' target='_blank'>seresco</a>",
        "activity2": "Jul-Aug 2022: Working as a \"Backend Developer\" intern at <a href='https://ebroker.es' target='_blank'>ebroker</a>",
        "activity3": "Nov 2025 - Jun 2026: Working as an \"IT Services Intern\" at <a href='https://uniovi.es' target='_blank'>University of Oviedo</a>"
    }
};

function userLanguage() {
    var userLang = navigator.language || navigator.userLanguage; 
    userLang = userLang.substring(0, 2);
    return userLang;
}

function loadLanguage() {
    var userLang = userLanguage();
    if (!translations.hasOwnProperty(userLang)) {
        userLang = "en";
    }
    document.documentElement.lang = userLang;
    if (translations.hasOwnProperty(userLang)) {
        Object.keys(translations[userLang]).forEach(function(key) {
            var element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[userLang][key];
            }
        });
    }
}
