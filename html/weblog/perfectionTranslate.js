var translations = {
    "es": {
        "navInicio": "Inicio",
        "weblog": "Weblog",
        "now": "Now",
        "footerText": "© 2022-2025 ruflas | licenciado bajo <a href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>CC BY-SA</a> 😽",
        "postTitle": "Perfection Writeup",
        "postDate": "Publicado el 2 de marzo de 2024",
        "authorInfo": "Maquina creada por <a href='https://app.hackthebox.com/users/1412009'>TheHated1</a>",
        "linuxMachineIntro": "Esta máquina Linux se basa en el uso de una petición con inyección de código (en concreto SSTI RCE haciendo un bypass a un regex filter usando el char %0A) para obtener una shell como usuario.",
        "linuxMachinePrivEscInfo": "Una vez dentro de la máquina, encontramos un hash que utilizaremos para sacar la contraseña del usuario y ver que podemos hacer.",
        "portScanning": "Primero realizamos un escaneo de puertos a la máquina para ver qué servicios puede tener activos:",
        "portsOpen": "Podemos observar que tiene el puerto 80 (Servicio Apache) y el puerto 22 (SSH) abiertos.",
        "webServiceAccess": "Probamos a acceder al servicio web:",
        "directoryBuster": "Pruebo a la vez a lanzar una búsqueda de directorios para ver si encuentro algún panel de login o algo oculto.",
        "feroxbusterCommand": "Ejecuto feroxbuster pero no encuentro nada interesante.",
        "calculator": "Lo que podemos ver interesante es como hay una calculadora donde se nos pide introducir cinco asignaturas con sus respectivas calificaciones y peso en %.",
        "calculatorBackend": "Al mirar al darle a submit qué petición hace podemos observar como hace una petición POST a /weighted-grade-calc y si miramos en la url vemos como utiliza Sinatra que es un framework de Ruby.",
        "calculatorTest": "Estuve probando a introducir valores no comunes en la calculadora, como sería valores negativos, demasiado altos o inyecciones de código en Ruby.",
        "calculatorTestResult": "Lo que pude observar es que me devolvía \"Malicious input blocked\" lo que nos da a pensar que está sanitizado en el backend los campos (en el frontend sabemos que sí pero acabamos de verlo en el backend utilizando Burp Suite para modificar nuestras peticiones).",
        "calculatorTestResult2": "Esto nos hace llegar a la conclusión de que probablemente tengamos que buscar la forma de forzar un RCE",
        "searchingRCE": "Un usuario del foro de breachforums explicó cómo podíamos hacer este bypass.",
        "searchingRCE2": "El bypass consiste en utilizar el char %0A para saltar el regex filter que tiene el backend y pasar el código en base64 para evitar que salte el \"Malicious input blocked\".",
        "searchingRCE3": "Usuario: jahman Comentario: \"You have to bypass a regex filter to execute SSTI RCE. You have to use the %0A char. here is a payload:\"",
        "searchingRCE4": "Donde pone \"BASH REVERSE SHELL CODE BASE64\" iría nuestro código de reverse shell de bash codificado.",
        "searchingRCE5": "Una vez que tenemos el payload, lo introducimos en la petición POST en Burp Suit y enviamos la petición mientras estamos previamente en escucha con netcat.",
        "userFlagAcquisition": "Una vez dentro de la máquina podemos obtener la flag de usuario y vemos que estamos como el usuario 'susan'.",
        "userPersistence": "Una vez que tenemos la flag de usuario, decidí guardar mi id_rsa.pub en la carpeta de susan de .ssh en el archivo authorized_keys para poder conectarme por ssh sin contraseña a susan",
        "privEscAttempt": "Ahora ejecutamos \"sudo -l\" para ver si tenemos privilegios en algún archivo sin contraseña para escalar privilegios.",
        "sudoLResult": "Podemos observar como nos pide la contraseña de susan la cual no tenemos.",
        "searchSudoExploit": "En este punto probé a ejecutar linpeas.sh pero sin buscar mucho ya vemos como hay un archivo Migration/pupilpath_credentials.db que ya sea utilizando el comando strings o metiéndonos con sqlite podemos ver el hash de la contraseña de susan",
        "hashObtention": "Una vez que tenemos el hash de la contraseña de susan, utilizamos hashcat para crackearla, pero si antes de eso buscamos un poco más podemos ver lo siguiente:",
        "hashObtention2": "Mirando /var/spool/mail/susan podemos observar cuál es la estructura de la contraseña, esto nos ayudará a hacer mucho mucho más rápido el proceso de obtener la contraseña con hashcat.",
        "hashCrack": "Una vez que tenemos la estructura de la contraseña, utilizamos hashcat para crackearla y obtenemos la contraseña de susan.",
        "hashCrackPassword": "La contraseña de susan es:",
        "hashCrackResult": "Una vez que tenemos la contraseña de susan ya podemos probar a ejecutar \"sudo -l\" con el usuario susan.",
        "susanSudoPermissions": "Podemos observar que el usuario susan cuenta con todos los permisos así que haciendo \"sudo su\" y poniendo la contraseña ya somos usuario root.",
        "machineCompletion": "Y ya hemos terminado la máquina Perfection ✅.",
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
        "postTitle": "Perfection Writeup",
        "postDate": "Published on March 2, 2024",
        "authorInfo": "Machine created by <a href='https://app.hackthebox.com/users/1412009'>TheHated1</a>",
        "linuxMachineIntro": "This Linux machine is based on the use of a request with code injection (specifically SSTI RCE by bypassing a regex filter using the %0A char) to obtain a shell as a user.",
        "linuxMachinePrivEscInfo": "Once inside the machine, we found a hash that we will use to extract the user's password and see what we can do.",
        "portScanning": "First, we perform a port scan of the machine to see what services it may have active:",
        "portsOpen": "We can observe that it has port 80 (Apache Service) and port 22 (SSH) open.",
        "webServiceAccess": "We try accessing the web service:",
        "directoryBuster": "I also try launching a directory search to see if I can find any login panel or something hidden.",
        "feroxbusterCommand": "I run feroxbuster but do not find anything interesting.",
        "calculator": "What we can find interesting is that there is a calculator where we are asked to enter five subjects with their respective grades and weight in %.",
        "calculatorBackend": "When looking at the submit request, we can see that it makes a POST request to /weighted-grade-calc and if we look at the URL we see that it uses Sinatra, which is a Ruby framework.",
        "calculatorTest": "I tried entering uncommon values in the calculator, such as negative values, too high or Ruby code injections.",
        "calculatorTestResult": "What I could observe is that it returned \"Malicious input blocked\" which makes us think that the fields are sanitized in the backend (we know they are in the frontend but we just saw it in the backend using Burp Suite to modify our requests).",
        "calculatorTestResult2": "This leads us to the conclusion that we probably have to find a way to force an RCE",
        "searchingRCE": "A user from the breachforums forum explained how we could do this bypass.",
        "searchingRCE2": "The bypass consists of using the %0A char to jump the regex filter that the backend has and pass the code in base64 to avoid triggering the \"Malicious input blocked\".",
        "searchingRCE3": "User: jahman Comment: \"You have to bypass a regex filter to execute SSTI RCE. You have to use the %0A char. here is a payload:\"",
        "searchingRCE4": "\"BASH REVERSE SHELL CODE BASE64\" would be where our bash reverse shell code goes, encoded.",
        "searchingRCE5": "Once we have the payload, we introduce it in the POST request in Burp Suit and send the request while we are previously listening with netcat.",
        "userFlagAcquisition": "Once inside the machine, we can obtain the user flag and see that we are as the user 'susan'.",
        "userPersistence": "Once we have the user flag, I decided to save my id_rsa.pub in susan's .ssh folder in the authorized_keys file so I can connect via ssh to susan without a password",
        "privEscAttempt": "Now we run \"sudo -l\" to see if we have privileges on any file without a password to escalate privileges.",
        "sudoLResult": "We can observe that it asks for susan's password which we do not have.",
        "searchSudoExploit": "At this point, I tried running linpeas.sh but without looking much further we can see that there is a file Migration/pupilpath_credentials.db that either using the strings command or getting into it with sqlite we can see the hash of susan's password",
        "hashObtention": "Once we have the hash of susan's password, we use hashcat to crack it, but if before that we search a little more we can see the following:",
        "hashObtention2": "Looking at /var/spool/mail/susan we can observe what the structure of the password is, this will help us make the process of obtaining the password with hashcat much much faster.",
        "hashCrack": "Once we have the structure of the password, we use hashcat to crack it and obtain susan's password.",
        "hashCrackPassword": "susan's password is:",
        "hashCrackResult": "Once we have susan's password we can try to execute \"sudo -l\" with the user susan.",
        "susanSudoPermissions": "We can observe that the user susan has all permissions so by doing \"sudo su\" and entering the password we are now root user.",
        "machineCompletion": "And we have finished the Perfection machine ✅.",
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
