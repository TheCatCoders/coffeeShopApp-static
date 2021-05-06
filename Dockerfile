FROM tomcat:8.0-alpine
LABEL maintainer="froberge.felix@gmail.com"

ADD target/coffeeshop-app.war /usr/local/tomcat/webapps/

EXPOSE 8080
CMD ["catalina.sh", "run"]

# Pull base image
#FROM tomcat:8.0-alpine
#LABEL maintainer="froberge.felix@gmail.com"

# Copy war file to tomcat webapps folder
#COPY /coffeeshop-app.war /usr/local/tomcat/webapps/