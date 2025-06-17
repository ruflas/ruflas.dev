var translations = {
    "es": {
        "navInicio": "Inicio",
        "weblog": "Weblog",
        "now": "Now",
        "footerText": "© 2022-2025 ruflas | licenciado bajo <a href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>CC BY-SA</a> 😽",
        "postTitle": "Shocker Writeup",
        "postDate": "Publicado el 14 de noviembre de 2023",
        "authorInfo": "Challenge creado por <a href='https://app.hackthebox.com/users/2984'>mrb3n</a>",
        "linuxMachineIntro": "Esta máquina Linux se basa en una explotación del exploit Shellshock el cual fue divulgado por primera vez el 24 de septiembre de 2014",
        "portScanning": "Primero realizamos un escaneo de puertos a la máquina para ver qué servicios puede tener activos:",
        "portsOpen": "Podemos observar que tiene el puerto 80 (Servicio Apache) y el puerto 2222 (SSH) abiertos.",
        "webServiceAccess": "Probamos a acceder al servicio web:",
        "checkCode": "Miramos el código del mismo:",
        "webServiceNotInteresting": "Podemos observar que el servicio web no tiene nada interesante.",
        "gobusterDirb": "Probamos a ejecutar gobuster dirb para enumerar posibles ficheros o directorios ocultos:",
        "cgiBinInteresting": "Podemos observar que tenemos un directorio cgi-bin el cual podría ser interesante.",
        "searchFilesDirectory": "Probamos a buscar ficheros en el directorio:",
        "checkUserShFile": "Vamos a mirar qué contiene el archivo \"user.sh\":",
        "userShFileContent": "Podemos observar que el archivo contiene un script de bash que nos muestra el uptime del sistema.",
        "shellshockExploitAttempt": "Podemos probar a explotar la máquina mediante Shellshock",
        "googleForExploits": "Para ello buscando en Google encontraremos ejemplos de exploits:",
        "exploitAdaptation": "Adaptado a nuestro uso sería:",
        "exploitOutput": "Cuya salida será:",
        "executingUser": "Podemos observar que el usuario que está ejecutando el script es \"shelly\".",
        "reverseShellAttempt": "Probamos a ejecutar una reverse shell:",
        "openNetcat": "Y en nuestra máquina abrimos un netcat en el puerto 1234:",
        "obtainShell": "Y obtenemos una shell:",
        "userFlagAcquisition": "Una vez dentro de la máquina podemos obtener la flag de usuario:",
        "sudoLCheck": "Ahora ejecutamos \"sudo -l\" para ver si tenemos privilegios en algún archivo sin contraseña para escalar privilegios:",
        "shellySudoPermissions": "Podemos observar que el usuario shelly puede ejecutar perl como root sin contraseña.",
        "searchSudoExploit": "Buscamos en Google la web GTFOBINS y buscamos un exploit de sudo para perl:",
        "perlSudoExploit": "El exploit sería este:",
        "executeExploit": "Lo ejecutamos y veremos cómo fácilmente hemos escalado privilegios como root en la máquina:",
        "rootFlagAcquisition": "Y ya tenemos la flag de root:",
        "machineCompletion": "Y ya hemos terminado la máquina Shocker ✅.",
        "commentsSectionTitle": "Comentarios",
        "nameInputPlaceholder": "Nombre",
        "websiteInputPlaceholder": "Sitio web",
        "commentInputPlaceholder": "Comentario",
        "submitButtonText": "Publicar"
        
    },
    "en": {
        "navInicio": "Home",
        "weblog": "Weblog",
        "now": "Now",
        "footerText": "© 2022-2025 ruflas | licensed under <a href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>CC BY-SA</a> 😽",
        "postTitle": "Shocker Writeup",
        "postDate": "Published on November 14, 2023",
        "authorInfo": "Challenge created by <a href='https://app.hackthebox.com/users/2984'>mrb3n</a>",
        "linuxMachineIntro": "This Linux machine is based on exploiting the Shellshock exploit which was first disclosed on September 24, 2014",
        "portScanning": "First, we perform a port scan on the machine to see which services it might have active:",
        "portsOpen": "We can observe that it has port 80 (Apache Service) and port 2222 (SSH) open.",
        "webServiceAccess": "We try to access the web service:",
        "checkCode": "We look at its code:",
        "webServiceNotInteresting": "We can observe that the web service has nothing interesting.",
        "gobusterDirb": "We try to run gobuster dirb to enumerate possible hidden files or directories:",
        "cgiBinInteresting": "We can observe that we have a cgi-bin directory which could be interesting.",
        "searchFilesDirectory": "We try to search for files in the directory:",
        "checkUserShFile": "Let's see what the \"user.sh\" file contains:",
        "userShFileContent": "We can observe that the file contains a bash script that shows us the system uptime.",
        "shellshockExploitAttempt": "We can try to exploit the machine using Shellshock",
        "googleForExploits": "For this, searching on Google we will find examples of exploits:",
        "exploitAdaptation": "Adapted to our use it would be:",
        "exploitOutput": "Whose output will be:",
        "executingUser": "We can observe that the user executing the script is \"shelly\".",
        "reverseShellAttempt": "We try to execute a reverse shell:",
        "openNetcat": "And on our machine, we open a netcat on port 1234:",
        "obtainShell": "And we get a shell:",
        "userFlagAcquisition": "Once inside the machine, we can obtain the user flag:",
        "sudoLCheck": "Now we run \"sudo -l\" to see if we have privileges on any file without a password to escalate privileges:",
        "shellySudoPermissions": "We can observe that the user shelly can execute perl as root without a password.",
        "searchSudoExploit": "We search on Google for GTFOBINS and look for a sudo exploit for perl:",
        "perlSudoExploit": "The exploit would be this one:",
        "executeExploit": "We execute it and we will see how we have easily escalated privileges as root on the machine:",
        "rootFlagAcquisition": "And we already have the root flag:",
        "machineCompletion": "And we have finished the Shocker machine ✅.",
        "commentsSectionTitle": "Comments",
        "nameInputPlaceholder": "Name",
        "websiteInputPlaceholder": "Website",
        "commentInputPlaceholder": "Comment",
        "submitButtonText": "Post"
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
        document.getElementById('nameInput').setAttribute('placeholder', translations[userLang]['nameInputPlaceholder']);
        document.getElementById('websiteInput').setAttribute('placeholder', translations[userLang]['websiteInputPlaceholder']);
        document.getElementById('commentInput').setAttribute('placeholder', translations[userLang]['commentInputPlaceholder']);
    }
}

document.addEventListener('DOMContentLoaded', loadLanguage);
