# Money Management App

## Developing

### Prerequisites
[Node](https://nodejs.org/en/download/)


### Setting up Dev

#### Client

1. Clone this repo
2. Open `/client` in VSCode or your favorite IDE
3. Install dependencies
    ```
    npm install
    ```
4. Install dependencies for server
    ```
    cd ../server
    npm install
    cd ../client
    ```

4. Start developing
    ```
    npm start
    ```
    Note: The start script will run both the server and the client at the same time, so you don't need to run the server again to use API.

#### Server

1. Clone this repo
2. Open `/server` in VSCode or your favorite IDE
3. Install dependencies
    ```
    npm install
    ```
4. Start developing
    ```
    npm start
    ```

## API Reference
Usage examples at [`/server/api-example/`](./server/api-example/)

### Authentication

#### Login
```javascript
POST "http://localhost:5000/login"
REQUEST { username: String, password: String }
RESPONSE { 
    message: String
    user:  {
        _id: String,
        account_balance: Number,
    }
}
```
`message` is one of the following:
`"SUCCESS", "WRONG PASSWORD", "NOT REGISTERED"`.
If login successful, `user` will contain user information, otherwise it is `undefined`.
#### Register 
```javascript
POST "http://localhost:5000/register"
REQUEST { username: String, password: String }
RESPONSE { message: String }
```
`message` is one of the following:
`"SUCCESS", "ALREADY EXIST"`

### For Transactions

#### Get all categories
```javascript
GET "http://localhost:5000/all-categories"
RESPONSE [
    {
        _id: String, 
        name: String, 
        type: String, 
    }
]
```

### For Projects
#### Get all projects of user
```javascript
GET "http://localhost:5000/all-projects/<username>"
RESPONSE [
    {
        _id: String,
        project_name: String,
        reality_money: Number,
        target: Number,
        start_date: Date,
        end_date: Date,
        privilege: String
    }
]
```

#### Add a new project
```javascript
POST "http://localhost:5000/new-project"
REQUEST {
    project_name: String,
    target: Number,
    start_date: Date,
    end_date: Date,
    manager_id: String
}
RESPONSE {
    message: "SUCCESS"
}
```
Note: Put `_id` you get from login to `manager_id`

#### Find users (use this to get user_ID to add members)
```javascript
GET "http://localhost:5000/find-users/<search-string>"
RESPONSE [
    {
        _id: String
        username: String
    }
]
```
This will return all users whose username contains the search string. 

#### Add a member to project
```javascript
POST "http://localhost:5000/add-member"
REQUEST {user_ID: String, project_ID: String}
RESPONSE {
    message: "SUCCESS"
} 
```


## Database
TODO
