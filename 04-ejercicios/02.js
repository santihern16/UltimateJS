function mostrarResolucion(ancho, alto) {
    return (ancho >= 7680 && alto >= 4320) ? '8K'
         : (ancho >= 3840 && alto >= 2160) ? '4K'
         : (ancho >= 2560 && alto >= 1440) ? 'WQHD'
         : (ancho >= 1920 && alto >= 1080) ? 'FHD'
         : (ancho >= 1280 && alto >= 720) ? 'HD'
         : false;
}

const resolucion = mostrarResolucion(7680, 4320);
console.log(resolucion);