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

### Login
```javascript
let data = { username: "example", password: "example" };

fetch("http://localhost:5000/login", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data.message, '\n', data.user));
  // data.message is one of the following: 
  // "SUCCESS", "WRONG PASSWORD", "NOT REGISTERED"
```

If login successful, `data.user` will contain user information, otherwise it is `undefined`.
```
 {
  _id: '63b039df07258122b58d3b2a',
  username: 'example',
  password: 'example',
  account_balance: 0,
  __v: 0
}
```

### Register
```javascript
let data = { username: "example", password: "example" };

fetch("http://localhost:5000/register", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data.message));
  // data.message is one of the following: 
  // "SUCCESS", "ALREADY EXIST"
```


## Database
TODO
