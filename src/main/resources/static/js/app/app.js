angular.module("JavaHifi",["ngRoute"]);


angular.module("JavaHifi").config(function($routeProvider){
	console.log("from route  config");

	$routeProvider.when("/",{
		templateUrl:"js/app/home/html/home.html",
	}
	);


	$routeProvider.when("/spring-boot",{
		templateUrl:"js/app/springboot/html/spring-boot.html",
	}
	);

	$routeProvider.when("/spring-cloud",{
		templateUrl:"js/app/springcloud/html/spring-cloud.html",
	}
	);


	$routeProvider.when("/core-java",{
		templateUrl:"js/app/corejava/html/corejava.html",
	}
	);
	
	
	$routeProvider.when("/object-list",{
		templateUrl:"js/app/corejava/html/object-class/object-list.html",
	}
	);
	
	
	$routeProvider.when("/hashCode",{
		templateUrl:"js/app/corejava/html/object-class/hashcode.html",
	}
	);
	

});