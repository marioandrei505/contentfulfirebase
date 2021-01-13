(function () {

  PC.pages.about = {}
  
  /**
   * Renders the products list page
   *
   * The products list page can optionally be filtered by a category, and will
   * then only show products from that category. This is only used from the
   * categories page, in order to render lists of products with only products
   * from a selected category.
   */
  
  PC.pages.about.renderHTML = function (params) {
    var query = {
      content_type: PC.config.articuloContentTypeId
    }
  
    if (params && params.categoryId) {
      query['fields.categories.sys.id[in]'] = params.categoryId
    }
  
    return PC.contentfulClient.getEntries(query)
    .then(function (entries) {
      return renderProducts(entries.items)
    })
  }
  
  function renderProducts(products) {
    return '<h1>Productsss</h1>' +
      '<div class="products">' +
      products.map(renderSingleProduct).join('\n') +
      '</div>'
  }
  
  function renderSingleProduct(product) {
    var fields = product.fields
    return '<div class="product-in-list">' +
      '<div class="product-image">' +
        renderImage(fields.image[0], fields.slug) +
      '</div>' +
      '<div class="product-details">' +
        renderProductDetails(fields) +
      '</div>' +
    '</div>'
  }
  
  function renderProductDetails(fields) {
    return renderProductHeader(fields) +
      '<p class="product-categories">' +
      fields.categories.map(function (category) {
        return category.fields.title
      }).join(', ') +
      '</p>' +
      PC.utils.truncate(marked(fields.productDescription), 100) +
      '<p>' + fields.price + ' &euro;</p>' +
      '<p class="product-tags"><span>Tags:</span> ' + fields.tags.join(', ')+ '</p>'
  }
  
  function renderProductHeader(fields) {
    return '<div class="product-header">' +
      '<h2>' +
        '<a href="product/' + fields.slug + '" data-nav>' +
          fields.productName +
        '</a>'+
      '</h2>' +
      ' by ' +
      '<a href="brand/' + fields.brand.sys.id + '" data-nav>' + fields.brand.fields.companyName + '</a>' +
    '</div>'
  }
  
  function renderImage(image, slug) {
    if(image && image.fields.file) {
      return '<a href="product/' + slug + '" data-nav>' +
        '<img src="' + image.fields.file.url + '" width="150" height="150" />' +
      '</a>'
    } else {
      return ''
    }
  }
  
  }());
  

/*
(function () {

PC.pages.about = {}
var urlasset=''
var superentry=''
/**
 * Renders an article, to do all articles
 */
/*
PC.pages.about.renderHTML = function (params) {


  const promesa2 = hazAlgo().then(exitoCallback(exito), falloCallback(error));


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
  /*

} 


function exitoCallback(resultado) { 
  console.log("hola resultado: "+resultado);
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
    return entry;
  })
  .then((entry) => {
    console.log("el id de la imagen es: "+entry.fields.hero.sys.id);
    asset = PC.contentfulClient.getAsset(entry.fields.hero.sys.id)
    .then(asset => {
      console.log("que vamos a mandar?:");
      console.log(asset.fields.file.url);
      urlasset = asset.fields.file.url;
      return urlasset;
    })
    .catch(error => console.log(error));
    
    return urlasset;
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



*/