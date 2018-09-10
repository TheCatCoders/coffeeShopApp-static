# CoffeeShop App

Plain front end application using HTML5, Bootstrap, JQuery and CSS.  The project represent the interface for a coffee shop and is currently us as a demo purposes for a micro services architecture application. 

This is a maven project so just import it into your favorite IDE and it should work.  For the more hardcore, it can also be build on the command line with standard maven command.

The applicaiton was created to run in a standard Webserver.
* Wildfly 10+

It has also been tested using docker containers using the s2i mechanism of OpenShift Container plateform.

To operate properly it needs the microservices echo system

1. LoginService [LoginService](https://github.com/TheCatCoders/loginService) ]
2. RegisterService [RegisterService](https://github.com/TheCatCoders/registrationService)
3. ProductService [ProductService](https://github.com/TheCatCoders/productService) ]
4. ClientService [ClientService](https://github.com/TheCatCoders/clientService) ]


#Here how to [contribute](CONTRIBUTING.md)

in docs
