# luxuryfloor-web

Código personalizado de la tienda **luxuryfloor.com.ar** (Tienda Nube).

- `src/`: versión que carga la tienda (scripts + `src/media/` con imágenes y videos).
- `original/` y `assets/`: copia sin tocar de lo que estaba en el servidor anterior (backup).

La tienda carga los archivos desde jsDelivr con una versión fija, por ejemplo:
`https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@v1/src/luxury-floor-home10.js`

Cada cambio se publica con una etiqueta nueva (`v2`, `v3`…) y se actualiza el número en Tienda Nube.
Para volver atrás, se vuelve a poner el número anterior.
