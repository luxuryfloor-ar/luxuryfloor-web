# luxuryfloor-web

Código personalizado de la tienda **luxuryfloor.com.ar** (Tienda Nube).

- `src/`: versión que carga la tienda (scripts + `src/media/` con imágenes y videos).
- `original/` y `assets/`: copia sin tocar de lo que estaba en el servidor anterior (backup).

La tienda carga los archivos desde jsDelivr fijando el código de un commit, por ejemplo:
`https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@<commit>/src/luxury-floor-home10.js`

Cada cambio queda en un commit nuevo y se actualiza ese código en Tienda Nube.
Para volver atrás, se vuelve a poner el código del commit anterior (ver historial en VERSIONES.md).
