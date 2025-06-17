document.addEventListener("DOMContentLoaded", function () {
    function getUserLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        return userLang.startsWith("es") ? "es" : "en";
    }

    function translatePage(lang) {
        const translations = {
            "en": {
                "Inicio": "Home",
                "Weblog": "Weblog",
                "Now": "Now",
                "Publicaciones": "Posts",
                "Cyber Apocalypse 2024 CTF": "Cyber Apocalypse 2024 CTF",
                "Perfection Writeup": "Perfection Writeup",
                "Shocker Writeup": "Shocker Writeup",
                "Baby RE Writeup": "Baby RE Writeup",
                "Progreso en la web": "Website Progress",
                "hola mundo": "Hello World",
                "© 2022-2025 ruflas | licensed under": "© 2022-2025 ruflas | licensed under",
                "14 Marz 2024": "March 14, 2024",
                "02 Marz 2024": "March 2, 2024",
                "14 Nov 2023": "November 14, 2023",
                "11 Nov 2023": "November 11, 2023",
                "27 Jun 2023": "June 27, 2023",
                "17 Jun 2023": "June 17, 2023"
            }
        };

        if (lang !== "es") { 
            document.querySelectorAll("nav a, main h1, main ol li a, footer p, main ol li span").forEach(el => {
                if (translations["en"][el.textContent.trim()]) {
                    el.textContent = translations["en"][el.textContent.trim()];
                }
            });
        }
    }

    const lang = getUserLanguage();
    translatePage(lang);
});
