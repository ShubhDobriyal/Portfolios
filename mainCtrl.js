var myApp = angular.module("myApp",[]);

myApp.controller("mainCtrl", function($scope){
	$scope.jobs = [{
		'company': 'Esferasoft',
		'date': 'June 2018 - July 2018',
		'job': 'Angularjs Intern',
		'link': 'http://www.esferasoft.com/'
	},{
		'company': 'L&D Global',
		'date': 'May 2018 - June 2018',
		'job': 'Web developer Intern',
		'link': 'http://lndglobal.org/'
	}];

	$scope.skills = [{
		'skillname': 'HTML',
		'percent': '90'
	},{
		'skillname': 'CSS',
		'percent': '80'
	},{
		'skillname': 'Javascript',
		'percent': '70'
	},{
		'skillname': 'PHP',
		'percent': '65'
	},{
		'skillname': 'Bootstrap',
		'percent': '85'
	},{
		'skillname': 'MaterializeCSS',
		'percent': '60'
	},{
		'skillname': 'Angularjs',
		'percent': '55'
	},{
		'skillname': 'Adobe Photoshop',
		'percent': '50'
	},{
		'skillname': 'Python',
		'percent': '50'
	},{
		'skillname': 'Java',
		'percent': '60'
	},{
		'skillname': 'MySql',
		'percent': '90'
	},{
		'skillname': 'Wordpress',
		'percent': '70'
	}];

	$scope.otherSkills = ['J2EE','C#','C','Node.JS','SQL'];

	$scope.schools = [{
		'schoolName': 'Tulas Institute of Technology',
		'dateOfGraduation': '2019(Studying)',
		'course': 'B.Tech(Computer Science Engineering)',
		'location': 'Dehradun, Uttrakhand'
	},{
		'schoolName': 'Shri Guru Ram Rai Public School',
		'dateOfGraduation': '2015',
		'course': 'Senior School',
		'location': 'Kotdwara, Uttrakhand'
	},{
		'schoolName': 'Geetanjali Children Academy',
		'dateOfGraduation': '2013',
		'course': 'High School',
		'location': 'Dugadda, Uttrakhand'
	}];

	$scope.projects= [{
		'projectName' : 'Carrot Shop',
		'projectType' : 'E-commerce website',
		'technologies' : 'HTML5,CSS3,JavaScript,Bootstrap,PHP,MySql',
		'thumbnail' : 'img/carrot.png',
		'link' : 'projects/carrotShop/carrot.html'
	},{
		'projectName' : 'NIMS',
		'projectType' : 'Hospital management website',
		'technologies' : 'HTML5,CSS3,JavaScript,Bootstrap,PHP,MySql',
		'thumbnail' : 'img/nims.png',
		'link' : 'projects/nims/nims.html'
	},{
		'projectName' : 'JobsFinder',
		'projectType' : 'Job Portal',
		'technologies' : 'HTML5,CSS3,JavaScript,Angularjs,Bootstrap,PHP,MySql',
		'thumbnail' : 'img/jobsfinder.png',
		'link' : 'projects/jobsfinder/jobsfinder.html'
	}];

	$scope.webpages = [{
		'link' : 'projects/carrotShop/img/carrot-home.png',
		'title' : 'Home page'
	},{
		'link' : 'projects/carrotShop/img/carrot-cart-page.png',
		'title' : 'Cart page'
	},{
		'link' : 'projects/carrotShop/img/carrot-category.png',
		'title' : 'Category page'
	},{
		'link' : 'projects/carrotShop/img/carrot-product-modal.png',
		'title' : 'Product information modal'
	},];

});