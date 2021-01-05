(function () {

PC.pages.about = {}
var urlasset=''
var superentry=''
/**
 * Renders an article, to do all articles
 */

PC.pages.about.renderHTML = function (params) {


  const promesa = hazAlgo();
  const promesa2 = promesa.then(exitoCallback, falloCallback);


    /*
  return PC.contentfulClient
  .getEntry('6hLeTWLDy3felaFOjatheY')
  .then(entry => {
    superentry = entry;
    
  })
  .then(() => {
    console.log("el id de la imagen es: "+superentry.fields.hero.sys.id);
    asset = PC.contentfulClient.getAsset(superentry.fields.hero.sys.id);
    console.log("que vamos a mandar?:");
    console.log(asset.fields.file.url);
    urlasset = asset.fields.file.url;
  })
  .then(() => {
    console.log("superentry fields aca");
    console.log(superentry.fields);
    return renderSingleProduct(superentry.fields);
  })

  .catch(error => console.log(error));*/

} 


function exitoCallback(resultado) { 
  console.log("superentry fields aca");
    console.log(superentry.fields);
    return renderSingleProduct(superentry.fields);
    
}

function falloCallback(error) {
  console.log("Error: " + error);
}

function hazAlgo() {
  PC.contentfulClient
  .getEntry('6hLeTWLDy3felaFOjatheY')
  .then(entry => {
    superentry = entry;
    console.log("saliendo de haz algo");
  })
  .catch(error => console.log(error));
}

function renderSingleProduct(entry) {
  return '<div class="product">' +
            '<div class="product-image">' +
            //'<img src="' + urlasset + '" width="300" height="300" />'
            '</div>' +
          '<div class="product-header">' +
            '<h2>' + entry.titulo + '</h2>' +
          '</div>' +
          '<p>' + marked(entry.descripcion) + '</p>' +
          '<div class="product-header">' +
          documentToHtmlString(entry.contenido)+
          '</div>' +
          '<p>Productos relacionados: '+JSON.stringify(entry.productosRelacionados) + '</p>' +
          '<p> Fecha de publicación: ' + marked(entry.fecha) + '</p>' +

          '</div>'
    }




}());



