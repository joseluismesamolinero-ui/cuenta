# Cuenta

Una app web progresiva (PWA) de contador personal para Safari, diseñada primero para móvil. No propone hábitos ni campos: cada persona decide qué contar y cómo organizarlo.

## Abrir en Safari

Abre [Cuenta en GitHub Pages](https://joseluismesamolinero-ui.github.io/cuenta/) en Safari. También puedes abrir esa dirección en cualquier navegador moderno.

La app conserva una copia en este navegador y ofrece acceso con enlace privado al correo para sincronizarla entre dispositivos. La base de datos de Supabase ya está creada con políticas que aíslan los datos por usuario, y la dirección segura de la app está permitida para el inicio de sesión.

## Publicar en Internet

El repositorio de GitHub publica esta web con GitHub Pages desde la rama principal. Los cambios que se suban al repositorio se reflejarán en la web. En el nivel gratuito, GitHub Pages requiere un repositorio público, así que el código será visible; los datos de uso permanecen privados en Supabase.

Para instalarla en el iPhone, abre la dirección HTTPS en Safari y elige **Compartir → Añadir a pantalla de inicio**. La caché offline y los iconos ya están incluidos.

La carpeta `supabase/` contiene el esquema de tablas y permisos; ese esquema ya se aplicó al proyecto `cuenta-sync`. `supabase-config.js` contiene únicamente la clave publicable del proyecto (nunca una clave secreta).
## Funciones

- Crear campos con nombre, emoji o imagen propia; el selector incluye categorías, búsqueda y tonos de piel, y también puedes escribir cualquier emoji con el teclado del móvil.
- Crear carpetas escribiendo su nombre al añadir un campo.
- Contar con un toque y deshacer el último registro de cada campo.
- Ver el total de hoy, esta semana, este mes o de siempre.
- Explorar gráficas por hora, días, semanas, meses, años o total acumulado.
- Exportar e importar una copia de los datos.

Sin iniciar sesión, los datos se quedan en este navegador. Con sesión iniciada, se sincronizan con tu cuenta privada de Supabase.
