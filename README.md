# Database structure in MYSQL
- open mysql 
- create new database run below script
```
    CREATE DATABASE task_management;    
    USE task_management;
```
- Create Table in DB

```
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('open', 'inprogress', 'completed') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

```
 # Rename .env.sample file to .env
  - Change value according to your Database
  ```
    DB_HOST=localhost
    DB_USERNAME=root
    DB_PASSWORD=password
    DB_NAME=dbname
  ```
  # Clone the Repository in your local
  ```
  git clone https://github.com/yashvantys/task-mgt.git
  ```
  # install dependencies 
  - Run the command
  - npm install
  # Start the application
  - npm start

  # For running unit test case
  - run the command
  - npm test

  # for API tesing
  

