var nimsApp = angular.module("nimsApp",[]);

nimsApp.controller("nimsCtrl", function($scope){
	
	$scope.webpages = [{
		'link' : 'img/nimshome.png',
		'title' : 'Home page'
	},{
		'link' : 'img/appoint.png',
		'title' : 'Appointments page'
	},{
		'link' : 'img/doctor-staff.png',
		'title' : 'Doctor/Staff details page'
	}];

	$scope.adminpages = [{
		'link' : 'img/admin-login.png',
		'title' : 'Admin login page'
	},{
		'link' : 'img/detailspage.png',
		'title' : 'Patients detail page'
	},{
		'link' : 'img/add-edit-page.png',
		'title' : 'Add/Edit page'
	},{
		'link' : 'img/archive.png',
		'title' : 'Archives page'
	},{
		'link' : 'img/change-password.png',
		'title' : 'Change password page'
	},{
		'link' : 'img/drug-details.png',
		'title' : 'Drugs details page'
	},{
		'link' : 'img/desc-modal.png',
		'title' : 'Description modal'
	},{
		'link' : 'img/medicine-sell.png',
		'title' : 'Medcine sell page'
	},{
		'link' : 'img/staff-details.png',
		'title' : 'Staff details page'
	},{
		'link' : 'img/staff-profile.png',
		'title' : 'Staff profile page'
	},{
		'link' : 'img/profile-edit.png',
		'title' : 'Edit profile page'
	}];	

});