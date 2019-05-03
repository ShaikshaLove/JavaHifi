angular.module("JavaHifi",["ngRoute"]);


angular.module("JavaHifi").config(function($routeProvider){
	console.log("from route  config");

	$routeProvider.when("/",{
		templateUrl:"js/app/home/html/home.html"
	}
	);

  /*Spring boot related routing configuration*/	
	$routeProvider.when("/spring-boot",{
		templateUrl:"js/app/springboot/html/spring-boot.html"
	}
	);
	$routeProvider.when("/spring-boot-into",{
		templateUrl:"js/app/springboot/html/spring-boot-intro.html"
	}
	);
	$routeProvider.when("/convert-maven-project-2-spring-boot",{
		templateUrl:"js/app/springboot/html/convert-maven-project-2-spring-boot.html"
	}
	);
	$routeProvider.when("/rest-service",{
		templateUrl:"js/app/springboot/html/rest-service-exp.html"
	}
	);
	
	
	
	
	
  /*Spring Cloud related routing configuration*/	
	$routeProvider.when("/spring-cloud",{
		templateUrl:"js/app/springcloud/html/spring-cloud.html"
	}
	);
	
	$routeProvider.when("/spring-cloud-introduction",{
		templateUrl:"js/app/springcloud/html/spring-cloud-intro.html"
	}
	);
	
	

   /*Core java related routing configuration*/	
	$routeProvider.when("/core-java",{
		templateUrl:"js/app/corejava/html/corejava.html"
	}
	);
	$routeProvider.when("/object-list",{
		templateUrl:"js/app/corejava/html/object-class/object-list.html",
	}
	);
	$routeProvider.when("/hashcode-equals",{
		templateUrl:"js/app/corejava/html/object-class/hashcode-equals.html",
	}
	);
	
	
	
  /*Servlet related routing configuration*/		
	$routeProvider.when("/servlet-index",{
		templateUrl:"js/app/j2ee/servlet/html/servlet-index.html"
	}
	);
	
	$routeProvider.when("/request-response-messages",{
		templateUrl:"js/app/j2ee/servlet/html/request-response-messages.html"
	}
	);
	
	
	
  /*Hibernate related routing configuration*/	
	$routeProvider.when("/hibernate-index",{
		templateUrl:"js/app/hibernate/html/hibernate-index.html"
	}
	);

	
	
	
   /*Spring framework related routing configuration*/	
	$routeProvider.when("/spring-framework-index",{
		templateUrl:"js/app/springframework/html/springframework-index.html"
	}
	);
	
	
	

});