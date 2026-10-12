# Cuenta

Una app web progresiva (PWA) de contador personal para Safari, diseñada primero para móvil. No propone hábitos ni campos: cada persona decide qué contar y cómo organizarlo.

## Abrir en Safari

En Mac, haz doble clic en **Abrir Cuenta.command**. En Safari, abre [http://127.0.0.1:8000](http://127.0.0.1:8000). Deja abierta la ventana que inicia el servidor mientras utilizas la aplicación.

La app conserva una copia en este navegador y ofrece acceso con enlace privado al correo para sincronizarla entre dispositivos. La base de datos de Supabase ya está creada con políticas que aíslan los datos por usuario; falta publicar la app en HTTPS y permitir esa dirección en la configuración de acceso antes de activar la sincronización.

## Publicar en Internet

El archivo `.github/workflows/pages.yml` prepara la publicación automática con GitHub Pages. La app solo podrá estar disponible desde cualquier lugar después de subir esta carpeta a GitHub y activar Pages. En el nivel gratuito, GitHub Pages requiere un repositorio público, así que el código será visible; los datos de uso permanecen privados en Supabase.

Tras publicarla, abre la dirección HTTPS en Safari y elige **Compartir → Añadir a pantalla de inicio** para instalarla en el iPhone. La caché offline y el icono de iPhone ya están incluidos.

La carpeta `supabase/` contiene el esquema de tablas y permisos; ese esquema ya se aplicó al proyecto `cuenta-sync`. `supabase-config.js` contiene únicamente la clave publicable del proyecto (nunca una clave secreta).
## Funciones

- Crear campos con nombre, emoji o imagen propia; el selector incluye categorías, búsqueda y tonos de piel, y también puedes escribir cualquier emoji con el teclado del móvil.
- Crear carpetas escribiendo su nombre al añadir un campo.
- Contar con un toque y deshacer el último registro de cada campo.
- Ver el total de hoy, esta semana, este mes o de siempre.
- Explorar gráficas por hora, días, semanas, meses, años o total acumulado.
- Exportar e importar una copia de los datos.

Sin iniciar sesión, los datos se quedan en este navegador. Con sesión iniciada, se sincronizan con tu cuenta privada de Supabase.
