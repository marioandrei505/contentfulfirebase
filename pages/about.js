(function () {

PC.pages.about = {}

/**
 * Renders the individual product page
 */

PC.pages.about.renderHTML = function (params) {
 
    
    return PC.contentfulClient.getEntries({
    content_type: PC.config.articuloContentTypeId,
    'fields.titulo': '84 Porsche 911 \"Tardza\"'
  })
  .then(function (entries) {
    return renderSingleProduct(entries.items[0])
  })
    
}





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
      '<p>'+ marked(fields.contenido) + '</p>' +
      '<p>' + marked(fields.fecha) + '</p>' +
      //JSON.stringify(fields.productosRelacionados) +
      //  JSON.stringify(fields.hero)+
    '</div>' +
    //'<p>Size/Type/Color: ' + fields.sizetypecolor+ '</p>' +
    //'<p>' + fields.quantity + ' in stock</p>' +
    //'<p>' + fields.price + ' &euro;</p>' +
    //'<p>SKU: ' + fields.sku + '</p>' +
    //'<p>More details: <a href="'+fields.website+'">' + fields.website + '</a></p>' +
    //'<p class="product-tags"><span>Tags:</span> ' + fields.tags.join(', ')+ '</p>' +
  '</div>'
    }

    function renderImage(image) {
  if(image && image.fields.file) {
    return '<img src="' + image.fields.file.url + '" width="300" height="300" />'
  } else {
    return ''
  }
}


}());



