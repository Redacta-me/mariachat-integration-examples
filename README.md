
# Guía de Integración de MariaChatBot

Esta guía explica cómo integrar MariaChatBot en componentes HTML y React.

## Integración en HTML

Para integrar MariaChatBot en tu página HTML ([ejemplo](/examples/HTML/index.html)), sigue estos pasos:

1. Agrega los siguientes enlaces en la sección `<head>` de tu HTML:

```html
<link rel="stylesheet" href="https://<companyName>-chatbot.redacta.me/style.css">
<script type="module" src="https://<companyName>-chatbot.redacta.me/embedMaria.js?id=<companyKey>"></script>
```

2. (Opcional) Agrega funcionalidad de auto-login:

```html
<script>
  setTimeout(() => {
    window.mariaWebChat.login({email : 'demo@redacta.me' , password: 'demopass'});
  }, 2000);
</script>
```

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

## Integración en React

Para integrar MariaChatBot en un componente React ([ejemplo](/examples/React/MariChatBotComponent.jsx)), crea un nuevo componente así:

```jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const MariaChatBotComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://<companyName>-chatbot.redacta.me/embedMaria.js?id=<companyKey>';
    script.type = 'module';
    document.body.appendChild(script);

    const autoLoginScript = document.createElement('script');
    autoLoginScript.innerHTML = `
      setTimeout(() => {
        window.mariaWebChat.login({ email: 'demo@redacta.me', password: 'demopass' });
      }, 2000);
    `;
    document.body.appendChild(autoLoginScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(autoLoginScript);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://<companyName>-chatbot.redacta.me/style.css" />
      </Helmet>
    </div>
  );
};

export default MariaChatBotComponent;
```

## Nota Importante

Redacta.me te proporcionará los siguientes datos:
- `<companyName>`
- `<companyKey>`
- Credenciales de usuario (email y contraseña)

Reemplaza estos marcadores de posición con los valores reales proporcionados por Redacta.me para acceder al servicio.




## TODO
- Pendiente ejemplos de integración mediante `iFrame`.