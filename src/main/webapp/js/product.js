function findProduct() {
	// Specific route in OCP, need to make this generic in some way
	$.ajax({
		type: 'GET',
		cache: false,
		crossDomain: true,
		contentType: 'application/json',
		url: productService +"/products",
		dateType: "json",
		success: renderProducts,
		error: errorProduct
	});
}

function findProductByName() {
    // Specific route in OCP, need to make this generic in some way
    var name = $('#filterProductName').val();

    if ( name == '' ) {
        findProduct();
    } else {
        $.ajax({
            type: 'GET',
            cache: false,
            crossDomain: true,
            contentType: 'application/json',
            url: productService + "/products/search/" + $('#filterProductName').val(),
            dateType: "json",
            success: renderProducts,
            error: errorProduct
        });
    }
}

function renderProducts(data) {
    // JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
    var list = data == null ? [] : (data instanceof Array ? data : [data]);

    $('#productList li').remove();
    $.each(list, function(index, product) {
        $('#productList').append('<li class="list-group-item"><a href="#" data-toggle="modal" data-target="#productModal" data-drink-id="' + product.id + '">'+ product.name +  '</a><span class="badge">' + product.price + ' $ </span></li>');
    });
}


function errorProduct(jqXHR) {
	$('#errorProduct').text( jqXHR.responseJSON );
}

//triggered when modal for product is about to be shown
$('#productModal').on('show.bs.modal', function(e) {
    $.ajax({
        type: 'GET',
        cache: false,
        crossDomain: true,
        contentType: 'application/json',
        url: productService +"/products/" + $(e.relatedTarget).data('drink-id'),
        dateType: "json",
        success: function (data) {
            $('#productModalHeader').text( data.name );
        	$('#modalProductDesc').text( data.description );
            $('#modalProductCat').text( data.category );
            $('#modalProductSubCat1').text( data.subCategory_1 );
            $('#modalProductSubCat2').text( data.subCategory_2 );
            $('#modalProductPrice').text( data.price + " $" ) ;
    	},
        error: errorProduct
    });
});