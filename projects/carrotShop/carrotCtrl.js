var carrotApp = angular.module("carrotApp",[]);

carrotApp.controller("carrotCtrl", function($scope){
	
	$scope.webpages = [{
		'link' : 'img/carrot-home.png',
		'title' : 'Home page'
	},{
		'link' : 'img/carrot-cart-page.png',
		'title' : 'Cart page'
	},{
		'link' : 'img/carrot-category.png',
		'title' : 'Category page'
	},{
		'link' : 'img/carrot-product-modal.png',
		'title' : 'Product information modal'
	},];

	$scope.adminpages = [{
		'link' : 'img/admin-dashboard.png',
		'title' : 'Admin dashboard'
	},{
		'link' : 'img/add-edit-productts.png',
		'title' : 'Add/Edit Products page'
	},{
		'link' : 'img/admin-category-page.png',
		'title' : 'Categories page'
	},{
		'link' : 'img/admin-users.png',
		'title' : 'Administrators page'
	},{
		'link' : 'img/archive-page.png',
		'title' : 'Archieve page'
	},{
		'link' : 'img/brand-page.png',
		'title' : 'Brands page'
	},{
		'link' : 'img/carrot-admin-login.png',
		'title' : 'Admin login'
	},{
		'link' : 'img/change-password.png',
		'title' : 'Change password page'
	},{
		'link' : 'img/order-page.png',
		'title' : 'Order confirmation/cancellation page'
	},{
		'link' : 'img/products-page.png',
		'title' : 'Products page'
	}];	

});