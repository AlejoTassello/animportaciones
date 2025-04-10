function calcularCosto() {
    const exw = parseFloat(document.getElementById('exw').value);
    const pesoBruto = parseFloat(document.getElementById('pesoBruto').value);
    const pesoVolumetrico = parseFloat(document.getElementById('pesoVolumetrico').value);
    
    if (isNaN(exw) || isNaN(pesoBruto) || isNaN(pesoVolumetrico)) {
      alert('Por favor, ingrese todos los valores correctamente.');
      return;
    }
  
    // Valores constantes
    const gastosFijos = 2406.03;
    const tasaFlete = 10.50; // Tarifa por kg o peso volumétrico
    const factorVolumetrico = 167;
    const fobIncremento = 690;
    const cifIncremento = 1.01; // Incremento sobre el FOB para calcular el CIF
    const tasaDerechosImportacion = 0.14; // 14% sobre CIF
    const tasaIvaCf = 0.105; // 10.50% sobre Base IVA
    const tasaIvaAdicional = 0.10; // 10% sobre Base IVA
    const tasaGanancias = 0.06; // 6% sobre Base IVA
    const tasaIngresosBrutos = 0.025; // 2.50% sobre Base IVA
    const tasaImpuestoPais = 0.075; // 7.50% sobre FOB
    const comision = 0.30; // 30% de comisión

    // Cálculo del peso volumétrico en función del factor volumétrico
    const pesoVolCalc = pesoVolumetrico * factorVolumetrico;
  
    // Cálculo del flete internacional basado en el peso mayor
    const fleteInternacional = pesoBruto > pesoVolCalc ? pesoBruto * tasaFlete : pesoVolCalc * tasaFlete;
  
    // Cálculo del FOB
    const fob = exw + fobIncremento;
  
    // Cálculo del CIF
    const cif = (fob + fleteInternacional) * cifIncremento;
  
    // Cálculo de derechos de importación
    const derechosImportacion = cif * tasaDerechosImportacion;
  
    // Cálculo de la base IVA
    const baseIva = cif + derechosImportacion;
  
    // Cálculo del IVA CF e IVA adicional
    const ivaCf = baseIva * tasaIvaCf;
    const ivaAdicional = baseIva * tasaIvaAdicional;
  
    // Cálculo de ganancias e ingresos brutos
    const ganancias = baseIva * tasaGanancias;
    const ingresosBrutos = baseIva * tasaIngresosBrutos;
  
    // Cálculo del impuesto país
    const impuestoPais = fob * tasaImpuestoPais;
  
    // Suma de impuestos aduaneros
    const impuestosAduaneros = derechosImportacion + ivaCf + ivaAdicional + ganancias + ingresosBrutos + impuestoPais;
  
    // Cálculo de la suma total
    const sumaTotal = baseIva + fleteInternacional + gastosFijos + impuestosAduaneros;
  
    // Cálculo del total con comisión
    const totalComision = sumaTotal + (sumaTotal * comision);
  
    // Mostrar solo el resultado final
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `

      <p class="text-2xl rounded-lg font-bold text-black">Costo Final: <span class="ml-2">${totalComision.toFixed(2)}</span> USD</p>
    `;
    resultadoDiv.style.display = 'block';
  }