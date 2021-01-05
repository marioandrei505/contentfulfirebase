(function () {

PC.pages.about = {}
var urlasset=''
var superentry=''
/**
 * Renders an article, to do all articles
 */

PC.pages.about.renderHTML = function (params) {
 
    
  /*hacerAlgoCritico()
.then(resultado => hacerAlgoOpcional()
  .then(resultadoOpcional => hacerAlgoSuper(resultadoOpcional))
  .catch(e => {})) // Ignorar si hacerAlgoOpcional falla.
.then(() => masAsuntosCriticos())
.catch(e => console.log("Acción crítica fallida: " + e.message));*/

  return PC.contentfulClient
  .getEntry('6hLeTWLDy3felaFOjatheY')
  .then(entry => {
    superentry = entry;
    var asset = PC.contentfulClient.getAsset(entry.fields.hero.sys.id)
    console.log("el id es: "+entry.fields.hero.sys.id);
    console.log("que vamos a mandar?:");
    console.log(asset.fields);
    urlasset = asset.fields.file.url ;
  })
  .then(() => {
    console.log("superentry fields aca");
    console.log(superentry.fields);
    return renderSingleProduct(superentry.fields);
  })
  /*.then(entry => {
    // do something with html, like write to a file
    console.log(entry);
    console.log("la imagen:");
    console.log(entry.hero.sys.id);
    superentry=entry;
    const asset = PC.contentfulClient.getAsset(entry.hero.sys.id)
  .then((asset) => {
    console.log("que vamos a mandar? "+ asset.fields.file.url )
    urlasset = asset.fields.file.url ;
    console.log("asset trae: "+urlasset);
    
    
  })
  console.log("super entry esta vacio?:");
    console.log(superentry);
  return renderSingleProduct(superentry)
  
    //document.getElementById('rich-text-body').innerHTML = renderedHtml;
  })*/
  .catch(error => console.log(error));

}

/*
  return PC.contentfulClient
  .getEntry('6hLeTWLDy3felaFOjatheY')
  .then(entry => {
    console.log("el objeto completo");
    console.log(entry);
    return entry.fields;
  })
  .then(entry => {
    // do something with html, like write to a file
    console.log(entry);
    console.log("la imagen:");
    console.log(entry.hero.sys.id);
    superentry=entry;
    const asset = PC.contentfulClient.getAsset(entry.hero.sys.id)
  .then((asset) => {
    console.log("que vamos a mandar? "+ asset.fields.file.url )
    urlasset = asset.fields.file.url ;
    console.log("asset trae: "+urlasset);
    
    
  })
  console.log("super entry esta vacio?:");
    console.log(superentry);
  return renderSingleProduct(superentry)
  
    //document.getElementById('rich-text-body').innerHTML = renderedHtml;
  })
  .catch(error => console.log(error));

}*/



function renderSingleProduct(entry) {
  return '<div class="product">' +
            '<div class="product-image">' +
            '<img src="' + urlasset + '" width="300" height="300" />'
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


/*
function renderSingleProduct(product) {
  var fields = product.fields
  return '<div class="product">' +
    '<div class="product-image">' +
      renderImage(fields.hero) +
      //  JSON.stringify(fields.hero)+
    '</div>' +
    '<div class="product-header">' +
      '<h2>' + fields.titulo + '</h2>' +
      //' by ' +
      //'<a href="brand/' + fields.brand.sys.id + '" data-nav>' + fields.brand.fields.companyName + '</a>' +
    '</div>' +
    //'<p class="product-categories">' +
     // fields.categories.map(function (category) {
       // return category.fields.title
      //}).join(', ') +
    //'</p>' +
    '<p>' + marked(fields.descripcion) + '</p>' +
      '<div >' +
      //'<p>'+JSON.stringify(fields.contenido.content.content.value) + '</p>' +
      '<p>'+marked(fields.contenido.content) + '</p>' +
      '<p>Productos relacionados: '+JSON.stringify(fields.productosRelacionados) + '</p>' +
      '<p> Fecha de publicación: ' + marked(fields.fecha) + '</p>' +
      //JSON.stringify(fields.productosRelacionados) +
    '</div>' +
    //'<p>Size/Type/Color: ' + fields.sizetypecolor+ '</p>' +
    //'<p>' + fields.quantity + ' in stock</p>' +
    //'<p>' + fields.price + ' &euro;</p>' +
    //'<p>SKU: ' + fields.sku + '</p>' +
    //'<p>More details: <a href="'+fields.website+'">' + fields.website + '</a></p>' +
    //'<p class="product-tags"><span>Tags:</span> ' + fields.tags.join(', ')+ '</p>' +
  '</div>'
    }
*/
/*
    function renderImage(image) {

  const asset = PC.contentfulClient.getAsset(image.sys.id)
  .then((asset) => {
    console.log("que vamos a mandar? "+ asset.fields.file.url )
    return asset.fields.file.url ;
  })



}*/


}());



