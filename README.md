# Cuenta

Una app web progresiva (PWA) de contador personal para Safari, diseñada primero para móvil. No propone hábitos ni campos: cada persona decide qué contar y cómo organizarlo.

## Abrir en Safari

Abre [Cuenta en GitHub Pages](https://joseluismesamolinero-ui.github.io/cuenta/) en Safari. También puedes abrir esa dirección en cualquier navegador moderno.

La app abre directamente, sin cuenta ni contraseña. Guarda los contadores en el almacenamiento de Safari de ese dispositivo y funciona sin conexión después de abrirla una vez.

## Publicar en Internet

El repositorio de GitHub publica esta web con GitHub Pages desde la rama principal. Los cambios que se suban al repositorio se reflejarán en la web. GitHub Pages sirve la app mediante una dirección web. El código y la página pueden ser vistos por quien conozca la dirección; los contadores ya no se envían a un servidor.

Para instalarla en el iPhone, abre la dirección HTTPS en Safari y elige **Compartir → Añadir a pantalla de inicio**. La caché offline y los iconos ya están incluidos. Los datos se guardan por separado en cada dispositivo; usa Exportar datos para conservar una copia.

La carpeta `supabase/` contiene el esquema de tablas y permisos; ese esquema ya se aplicó al proyecto `cuenta-sync`. `supabase-config.js` contiene únicamente la clave publicable del proyecto (nunca una clave secreta).
## Funciones

- Crear campos con nombre, emoji o imagen propia; el selector incluye categorías, búsqueda y tonos de piel, y también puedes escribir cualquier emoji con el teclado del móvil.
- Crear carpetas escribiendo su nombre al añadir un campo.
- Contar con un toque y deshacer el último registro de cada campo.
- Ver el total de hoy, esta semana, este mes o de siempre.
- Explorar gráficas por hora, días, semanas, meses, años o total acumulado.
- Exportar e importar una copia de los datos.

Los registros se guardan solo en el dispositivo actual. No se sincronizan automáticamente con otros dispositivos.
