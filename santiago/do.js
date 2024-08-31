var fs = require('fs');


function crearCarpetaYArchivo(rutaCarpeta, nombreArchivo, contenido) {
  fs.mkdir(rutaCarpeta, { recursive: true }, (err) => {
    if (err) {
      console.error('Error al crear la carpeta:', err);
    } else {
      const rutaArchivo = `${rutaCarpeta}/${nombreArchivo}`;
      fs.writeFile(rutaArchivo, contenido, (err) => {
        if (err) {
          console.error('Error al crear el archivo:', err);
        } else {
          console.log('Archivo creado correctamente:', rutaArchivo);
        }
      });
    }
  });
}



var nombreCarpeta = 'Tarea';
var nombreArchivo = 'Trabajo.txt';
var contenido = '¿VAMOS POR POLA?';



crearCarpetaYArchivo(nombreCarpeta, nombreArchivo, contenido); 
 

 

var fs = require('fs');


function eliminarArchivoYCarpeta(rutaCarpeta, nombreArchivo) {
  var rutaArchivo = `${rutaCarpeta}/${nombreArchivo}`;



  fs.unlink(rutaArchivo, (err) => {
    if (err) {
      console.error('Error al eliminar el archivo:', err);
    } else {
      console.log('Archivo eliminado correctamente:', rutaArchivo);


      fs.rmdir(rutaCarpeta, { recursive: true }, (err) => {
        if (err) {
          console.error('Error al eliminar la carpeta:', err);
        } else {
          console.log('Carpeta eliminada correctamente:', rutaCarpeta);
        }
      });
    }
  });
}



var nombreCarpeta = 'Tarea';
var nombreArchivo = 'Trabajo.txt';



eliminarArchivoYCarpeta(nombreCarpeta, nombreArchivo);


