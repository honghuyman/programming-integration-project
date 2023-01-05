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

React + Fetch - HTTP GET: https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples

React + Fetch - HTTP POST: https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

### Authentication

#### Login
```javascript
POST "http://localhost:3005/login"
REQUEST { username: String, password: String }
RESPONSE { 
    message: String
    user:  {
        _id: String,
    }
}
```
`message` is one of the following:
`"SUCCESS", "WRONG PASSWORD", "NOT REGISTERED"`.
If login successful, `user` will contain user ID, otherwise it is `undefined`.
#### Register 
```javascript
POST "http://localhost:3005/register"
REQUEST { username: String, password: String }
RESPONSE { message: String }
```
`message` is one of the following:
`"SUCCESS", "ALREADY EXIST"`

### For Transactions

#### Get all categories
```javascript
GET "http://localhost:3005/all-categories"
RESPONSE [
    {
        _id: String, 
        name: String, 
        type: String, 
    }
]
```

#### Get all transactions of user

```javascript
GET "http://localhost:3005/all-transactions/<user_ID>"
RESPONSE [
    {
        date: String, // yyyy-mm-dd
        transactions: [
            {
                _id: String,
                amount: Number,
                note: String,
                category_ID: {
                    _id: String,
                    name: String,
                    type: String // "income" or "spending"
                }
            }
        ]
    }
]
```

#### Get transaction by ID
```javascript
GET "http://localhost:3005/transaction/<transaction_ID>"
RESPONSE {
    _id: String,
    amount: Number,
    note: String,
    date: Date,
    category_ID: {
      _id: String,
      name: String,
      type: String // "income" or "spending"
    },
}
```
#### Get balance of user
```javascript
GET "http://localhost:3005/balance/<user_ID>"
RESPONSE { account_balance: Number }
```

#### Add transaction

```javascript
POST "http://localhost:3005/add-transaction"
REQUEST {
    user_ID: String,
    amount: Number,
    category_ID: String,
    note: String,
    date: Date
}
RESPONSE { message: "SUCCESS" }
```

#### Update transaction
```javascript
POST "http://localhost:3005/update-transaction"
REQUEST {
    transaction_ID: String,
    amount: Number,
    category_ID: String,
    note: String,
    date: Date
}
RESPONSE { message: "SUCCESS" }
```

#### Delete transaction

```javascript
POST "http://localhost:3005/delete-transaction"
REQUEST {
    transaction_ID: String
}
RESPONSE { message: "SUCCESS" }
```

### For Projects
#### Get all projects of user
```javascript
GET "http://localhost:3005/all-projects/<username>"
RESPONSE [
    {
        _id: String,
        project_name: String,
        reality_money: Number,
        target: Number,
        start_date: Date,
        end_date: Date
    }
]
```

#### Get project by Project_ID
```javascript
GET "http://localhost:3005/project/<project_ID>"
RESPONSE {
        _id: String,
        project_name: String,
        reality_money: Number,
        target: Number,
        start_date: Date,
        end_date: Date
    }
```

#### Get all members of project
```javascript
GET "http://localhost:3005/all-members/<project_ID>"
RESPONSE [
    {
        _id: String,
        username: String,
        privilege: String,
        money: Number
    }
]
```
`privilege` is `"manager"` or `"member"` 

#### Add a new project
```javascript
POST "http://localhost:3005/new-project"
REQUEST {
    project_name: String,
    target: Number,
    start_date: Date,
    end_date: Date,
    manager_id: String
}
RESPONSE {
    _id: String,
    project_name: String,
    reality_money: Number,
    target: Number,
    start_date: Date,
    end_date: Date
}
```
Note: Put `_id` you get from login to `manager_id` in request

#### Update a project
```javascript
POST "http://localhost:3005/update-project"
REQUEST {
    _id: String
    target: String,
    start_date: String,
    end_date: String
}
RESPONSE {
    message: "SUCCESS"
} 
```

#### Delete a project
```javascript
POST "http://localhost:3005/delete-project"
REQUEST {
    project_ID: String,
}
RESPONSE {
    message: "SUCCESS"
} 
```

#### Find users (use this to get user_ID to add members)
```javascript
GET "http://localhost:3005/find-users/<search-string>"
RESPONSE [
    {
        _id: String,
        username: String
    }
]
```
This will return all users whose username contains the search string. 

#### Add a member to project
```javascript
POST "http://localhost:3005/add-member"
REQUEST {user_ID: String, project_ID: String}
RESPONSE {
    message: "SUCCESS"
} 
```



#### Add money to project
```javascript
POST "http://localhost:3005/add-money-to-project"
REQUEST {
    user_ID: String,
    project_ID: String,
    money: Number
}
RESPONSE {
    message: "SUCCESS"
} 
```

#### Delete a member
```javascript
POST "http://localhost:3005/delete-member"
REQUEST {
    user_ID: String,
    project_ID: String,
}
RESPONSE {
    message: "SUCCESS"
} 
```

## Database
TODO
