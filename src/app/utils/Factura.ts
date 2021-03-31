class Factura {

    timbrar(datos: Datos): void {
        let xml = new XML();
        let resultado = xml.crearXml(datos);
    }
}
class XML {
    crearXml(datos: Datos):void {

    }
}

interface Datos {

}
