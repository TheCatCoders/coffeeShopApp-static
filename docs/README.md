[![Maven Central](https://maven-badges.herokuapp.com/maven-central/cz.jirutka.rsql/rsql-parser/badge.svg?style=plastic)](https://maven-badges.herokuapp.com/maven-central/cz.jirutka.rsql/rsql-parser)

# CoffeeShop App

Plain front end application using HTML5, Bootstrap, JQuery and CSS.  The project represent the interface for a coffee shop and is currently us as a demo purposes for a microservices architecture application.

This is a maven project so just import it into your favorite IDE and it should work. It can be build and release as a docker image using the following maven command.

*  mvn clean install -P dockerBuild,dockerRelease

The application can be run in docker
* docker run -p 8080:8080 coffeeshop-app:[tag]


To operate properly it needs the microservices echo system

1. LoginService [LoginService](https://github.com/loginService) ]
2. RegisterService [RegisterService](https://github.com/registrationService)
3. ProductService [ProductService](https://github.com/productService) ]
4. ClientService [ClientService](https://github.com/clientService) ]


#Here how to [contribute](CONTRIBUTING.md)
