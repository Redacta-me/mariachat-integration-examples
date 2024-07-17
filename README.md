
# Guía de Integración de MariaChatBot

Esta guía explica cómo integrar MariaChatBot en componentes HTML y React.

## Integración en HTML

Para integrar MariaChatBot en tu página HTML ([ejemplo](/examples/HTML/index.html)), sigue estos pasos:

1. Agrega los siguientes enlaces en la sección `<head>` de tu HTML:

```html
  <link rel="stylesheet" href="https://<companyName>-chatbot.redacta.me/embedMaria.css">
  <script type="module" src="https://<companyName>-chatbot.redacta.me/embedMaria.js"></script>
```

2. Agrega funcionalidad de autenticación mediante `companyKey`:

Opcionalmente es posible añadir un auto-login.

```html
  <!-- OPCIÓN DE INICIO DEL CHAT ( SE RECOMIENDA QUE SEA EN EL BODY )  -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      window.marichat.init('https://<companyName>-chatbot.redacta.me', '<companyKey>'); // URL del servidor chat y service_key
      // AUTOLOGIN AL CHAT
      // setTimeout(() => {
      //     window.marichat.autologin({email: '' , password: ''}); // Email y password del usuario autologin
      // }, 400);
    });
  </script>
```

NOTA: El script de autenticación mediante `companyKey` y auto-login pueden incluirse tanto en el `header` como en el `body` de la página HTML como se muestra en el [ejemplo](/examples/HTML/index.html). 

3. Agrega un contenedor para el widget de chat:

```html
<div id="mariachat-container"></div>
```

4. Estiliza el contenedor según sea necesario:

```html
<style>
  #mariachat-container {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
</style>
```

## Nota Importante

Redacta.me te proporcionará los siguientes datos:
- `<companyName>`
- `<companyKey>`
- Credenciales de usuario (email y contraseña)

Reemplaza estos marcadores de posición con los valores reales proporcionados por Redacta.me para acceder al servicio.
