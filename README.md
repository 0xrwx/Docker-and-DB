# Docker-and-DB

## Done:
- Configure docker volume with MySQL database
- Getting request from the server

## Docker configuration

```bash
# Clone this repository
$ git clone https://github.com/1Sayd/Docker-and-DB

# Go into the repository
$ cd Docker-and-DB

$ docker build -t web .
$ docker run --name unix_web -p 5000:8080 web
$ docker-compose up
```

## Database configuration

```bash
# Go to database environment into MySQL docker container

$ mysql -u root -p
$ password
$ USE someone;
$ CREATE TABLE Comments ( ID int NOT NULL AUTO_INCREMENT, Body varchar(255) NOT NULL, PRIMARY KEY (ID) );
$ SELECT * FROM Comments;
$ INSERT INTO Comments (Body) VALUES ('CHANGE THIS VALUE');
```