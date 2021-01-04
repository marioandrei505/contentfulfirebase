(function () {

PC.pages.about = {}

/**
 * Renders an article, to do all articles
 */

PC.pages.about.renderHTML = function (params) {
 
    
    /*return PC.contentfulClient.getEntries({
    content_type: PC.config.articuloContentTypeId,
    'fields.titulo': '84 Porsche 911 \"Tardza\"'
  })
  .then(function (entries) {
    return renderSingleProduct(entries.items[0])
  })*/

/*
  return PC.contentfulClient
  .getEntry('6hLeTWLDy3felaFOjatheY')
  .then(entry => {
    const rawRichTextField = entry.fields.contenido;
    return documentToHtmlString(rawRichTextField);
  })
  .then(renderedHtml => {
    // do something with html, like write to a file
    console.log(renderedHtml);
    return renderSingleProduct(renderedHtml)
    //document.getElementById('rich-text-body').innerHTML = renderedHtml;
  })
  .catch(error => console.log(error));
*/
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
    return renderSingleProduct(entry)
    //document.getElementById('rich-text-body').innerHTML = renderedHtml;
  })
  .catch(error => console.log(error));

}

function renderSingleProduct(entry) {
  return '<div class="product">' +
            '<div class="product-image">' +
              +renderImage(entry.hero) +
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
    function renderImage(image) {
      /*
  if(image && image.fields.file) {
    return '<img src="' + image.fields.file.url + '" width="300" height="300" />'
  } else {
    return ''
  }*/

  const asset = PC.contentfulClient.getAsset(image.sys.id)
  .then((asset) => {
    console.log("el objeto de la imagen completo "+asset.fields.file.url)
    return '<img src="' + asset.fields.file.url + '" width="300" height="300" />';
  })



}


}());



