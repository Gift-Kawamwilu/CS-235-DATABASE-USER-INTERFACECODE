CREATE TABLE CUSTOMER(
      customer_id INT PRIMARY KEY,
      FirstName VARCHAR(20) NOT NULL,
      LastName VARCHAR(20) NOT NULL,
      PhoneNumber INT,
      StreetAddress VARCHAR(22),
      state VARCHAR(18),
      zipcode INT NOT NULL UNIQUE,
      city VARCHAR(20)
);

CREATE TABLE MOVIE(
      Movie_id INT PRIMARY KEY,
	  MovieType VARCHAR(50) NOT NULL,
      MovieName VARCHAR(30) NOT NULL,
      Movie_Price INT NOT NULL,
      customer_id INT
);
CREATE TABLE ACTOR(
	 Actor_id INT PRIMARY KEY,
     ActorName VARCHAR(35) NOT NULL,
     movie_id INT
);
CREATE TABLE _TRANSACTION(
	Transaction_id INT PRIMARY KEY,
    CustomerName VARCHAR(35) NOT NULL,
    Price INT NOT NULL,
    TotalPrice INT NOT NULL,
    Tax DECIMAL(3,3) NULL,
    VideoName VARCHAR(30) NOT NULL,
    customer_id INT
);

ALTER TABLE ACTOR ADD FOREIGN KEY(movie_id) REFERENCES MOVIE(movie_id);
DESCRIBE actor;	 
ALTER TABLE _transaction ADD FOREIGN KEY(customer_id) REFERENCES customer(customer_id);
      
      
      
      
      
 

