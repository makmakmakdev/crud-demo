# Read Me
This is a simple app that shows how to implement basic CRUD operations in Node.js with MongoDB.
### *This uses the following packages: **express, mongoose***
---
### Install
```bash
npm install
npm start
```

### Copy .env file
```bash
cp .envexample .env
```

### In your .env file add your MongoDB url
```javascript
DB_CONNECTION = //Your MongoDB url goes here
```
sample url: **mongodb+srv://\<username>:\<password>@<cluster>.6cai5.mongodb.net/\<collection>?retryWrites=true&w=majority**

---
## Create
* endpoint: **localhost:3000/api/users**
* method: **POST**
```javascript
//User is a Model

const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
});

const savedUser = user.save( err => {} );
```
---
## Read
* endpoint: **localhost:3000/api/users**
* method: **GET**
```javascript
const user = User.find();
```
---
## Update
* endpoint: **localhost:3000/api/users/:id**
* method: **PUT**
```javascript
const user = User.findOne({_id: req.params.id});
const updatedUser = User.updateOne({_id: req.params.id}, {
    $set: {
        email: req.body.email || user.email,
        password: req.body.password || user.password
    }
});
```

---
## Delete
* endpoint: **localhost:3000/api/users/:id**
* method: **DELETE**
```javascript
const removedUser = User.deleteOne({_id: req.params.id});
```
---
## Connecting to MongoDB
```javascript
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    err => {
        if (err) return console.log(`Encountered error: ${err}`);
        return console.log('Connected to MongoDB...');
    }
);
```