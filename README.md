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
  - open Task.postman_collection.json and import in postman
```JSON
{
	"info": {
		"_postman_id": "3c4de8e1-409d-490a-8632-e92fd7aa654d",
		"name": "Task",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "1225358",
		"_collection_link": "https://dark-resonance-319183.postman.co/workspace/Yash~4b5b8103-7aa0-4322-a41e-5b1fab24cde8/collection/1225358-3c4de8e1-409d-490a-8632-e92fd7aa654d?action=share&source=collection_link&creator=1225358"
	},
	"item": [
		{
			"name": "getMetrics",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/metrics",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"metrics"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Task",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\":\"Test3\",\n    \"description\":\"This is a testing task3 managent\",\n    \"status\":\"open\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/tasks",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"tasks"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Task",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\":\"Test2 updated\",\n    \"description\":\"This is a testing task2 managent\",\n    \"status\":\"inprogress\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/tasks/2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"tasks",
						"2"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Task",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/tasks/2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"tasks",
						"2"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Task By ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/tasks/3",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"tasks",
						"3"
					]
				}
			},
			"response": []
		}
	]
}

```

