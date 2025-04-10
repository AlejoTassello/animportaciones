function calcularMaritimo() {
  const exw = parseFloat(document.getElementById('exwMaritimo').value);
  const toneladas = parseFloat(document.getElementById('toneladasMaritimo').value);

  if (isNaN(exw) || isNaN(toneladas)) {
    alert('Por favor, ingrese todos los valores correctamente.');
    return;
  }

  const costosFijos = 2588.73;
  const fleteBase = 6550;
  const limiteToneladas = 24;
  const comision = 0.30;

  const fob = exw;
  const fleteInternacional = toneladas > limiteToneladas ? fleteBase * 2 : fleteBase;
  const cif = (fob + fleteInternacional) * 1.01;
  const derechosImportacion = cif * 0.35;
  const baseIva = cif + derechosImportacion;
  const tasaEstadistica = cif * 0.03;
  const ivaCf = baseIva * 0.21;
  const ivaAdicional = baseIva * 0.20;
  const ganancias = baseIva * 0.06;
  const ingresosBrutos = baseIva * 0.025;
  const impuestoPais = fob * 0.075;

  const impuestosAduaneros = derechosImportacion + tasaEstadistica + ivaCf + ivaAdicional + ganancias + ingresosBrutos + impuestoPais;
  const sumaTotal = baseIva + fleteInternacional + costosFijos + impuestosAduaneros;
  const totalComision = sumaTotal + (sumaTotal * comision);

  const resultadoDiv = document.getElementById('resultadoMaritimo');
  resultadoDiv.querySelector('#totalComisionMaritimo').innerText = totalComision.toFixed(2);
  resultadoDiv.style.display = 'block';
}
