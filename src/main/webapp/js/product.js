
function findProduct() {
	// Specific route in OCP, need to make this generic in some way
	var rootURL = "http://productservice-coffeeshop.192.168.64.2.nip.io/ProductService/api";

	$.ajax({
		type: 'GET',
		cache: false,
		crossDomain: true,
		contentType: 'application/json',
		url: rootURL +"/products",
		dateType: "json",
		success: renderProducts,
		error: errorProduct
	});
}



function renderProducts(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [data]);

	$('#productList li').remove();
	$.each(list, function(index, product) {
		$('#productList').append('<li class="list-group-item"><a href="#" data-toggle="modal" data-target="#productModal" data-drink-id="' + product.id + '">'+ product.name +  '</a><span class="badge">' + product.price + '</span></li>');
		});
}

function errorProduct(jqXHR) {
	$('#errorProduct').text( jqXHR.responseJSON );
}

//triggered when modal for product is about to be shown
$('#productModal').on('show.bs.modal', function(e) {

    //get data-id attribute of the clicked element
    var drinkId = $(e.relatedTarget).data('drink-id');

    $('#modalProductName').val( drinkId );
});