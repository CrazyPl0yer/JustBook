# Online store for sales books

Thats eng version of this store

I did it by course

You can try [demo](https://just-book.herokuapp.com/) version

## smth for install

```
npm install
cd frontend
npm install
```

## Env params
Create a .env file and input following information

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = ''
PAYPAL_CLIENT_ID = your paypal client id
```

## run

```
npm start
cd frontend
npm start
```

### Database
You can input your data from folder data or from mongoDB or you can destoy them

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

Alltime when you paing order currency convention does not work:)
