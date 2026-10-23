# Versiones publicadas

Cada línea es un commit que se puede cargar en la tienda. La tienda usa el código del commit en las URLs de jsDelivr.

| Fecha | Commit | Qué cambió |
|---|---|---|
| (servidor anterior) | — | Código original en `hpanel.webcodebuilders.com` (copia en `original/`) |
| 2026-10-17 | `b557da96b63376e6aa9cb597bb291823718d8005` | Precio de contado, 3 cuotas sin interés con Mercado Pago, +1500 clientes, sin 25% OFF / tachado / estrellas / 30 días, materiales PVC-EVA-velcro, clic en "+1500" lleva a los videos, banner nuevo, videos livianos |
| 2026-10-18 | `8e77ee39a3da9393e8cfb2936f648717b764c676` | Tarjetas: se oculta el precio repetido arriba del bloque verde de contado. Mismo día: promo 25% pausada y precios nuevos en la tienda (225.000 / 7 asientos 240.000 / solo adelante 185.000) |
| 2026-10-18 | `a2e7f017da4dd05ddce6e7e5e046bb1476c346c2` | Formas de pago: débito en cuotas sin interés con GOcuotas; crédito muestra la cuota que informa Tienda Nube (con interés si corresponde); se saca la fila de cuotas del bloque final; banner "Cuotas sin interés con débito". Pago Nube pasado a cuotas con interés. Para mostrar cantidad de cuotas GOcuotas: `GOCUOTAS_CUOTAS` (tarjetas) y `gocuotasCuotas` (ficha) |
| 2026-10-18 | `9a979f2b6c4ca391727c2311d9eb5560f25979a3` | Escena de capas (portada y ficha) con movimiento suave y texto del escaneo; sin "3D" ni "láser" en el resto de la web; 5% OFF por transferencia (Pago Nube); GOcuotas hasta 4 cuotas. Pago Nube: descuento transferencia 25%→5% y MODO apagado |
| 2026-10-18 | `8191a8a2846b594d66fd90f260a0ee82e4c8d73c` | Portada: "Alfombras termoformadas" + bajada "Protección premium para tu auto", solo badge +1500; "Mirá lo que es el cambio"; nuevo texto de "Somos un grupo que ama dar lo mejor de sí"; imagen ilustrativa de capas arriba de la animación |
| 2026-10-18 | `3175698b37a9a3e245a739df47d80cc8ae59b405` | Antes y después: "Arrastrá el divisor para verlo" (portada y ficha) |
| 2026-10-18 | `b1820ba91f52c5894ee1c853db76b6c29f704c26` | Botón "Conocenos" lleva al reel con todo el equipo (instagram.com/reel/DZTShDbRsw9) |
| 2026-10-18 | `e78b1f59256fcfdc795caf5502d4107fa6ca7186` | GOcuotas: "hasta 4 × $X sin interés" (la cantidad la define GOcuotas según el cliente) |
| 2026-10-19 | `6ebd13cc168fb35a3d4137d4b2f1bac3e9ebf79f` | "Envío gratis" destacado en ficha (recuadro dorado) y tarjetas (cinta) cuando el producto tiene envío gratis en Tienda Nube. Saveiro (solo adelante) con envío gratis |
| 2026-10-23 | `f9d86cb998e5e8c91bfdcbf47add131151b77afb` | Tarjeta de crédito Mercado Pago: "hasta 3 × $X sin interés" en tarjetas, ficha y preguntas; el resto de las tarjetas muestra la cuota con interés. Se apaga con `MP_CARD_CUOTAS = 0` (tarjetas) y `mpCardCuotas: 0` (ficha) |

## Código para Google Tag Manager (etiqueta HTML personalizada)

```html
<script defer src="https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@f9d86cb998e5e8c91bfdcbf47add131151b77afb/src/luxury-floor-home10.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@f9d86cb998e5e8c91bfdcbf47add131151b77afb/src/luxury-floor-home-social-proof2.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@f9d86cb998e5e8c91bfdcbf47add131151b77afb/src/luxury-floor-product-card2.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@f9d86cb998e5e8c91bfdcbf47add131151b77afb/src/luxury-floor-product-info2.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@f9d86cb998e5e8c91bfdcbf47add131151b77afb/src/luxury-floor-description2.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/luxuryfloor-ar/luxuryfloor-web@f9d86cb998e5e8c91bfdcbf47add131151b77afb/src/luxury-floor-capas.js"></script>
```
