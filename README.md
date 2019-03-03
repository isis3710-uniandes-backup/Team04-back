# Team04-back
Here is the Back-end of Team 04 web development project

## Installation

Clone the Repository and run the following commands inside the folder:

```bash
npm install
npm run dev-start
```
The app will now be running on http://localhost:3000

## Documents inside the project

To make API test, there are postman collections for each resource inside the folder:

```bash
/docs/pruebas
```
So you can import them into [Postman](https://www.getpostman.com/)

We are using the npm [uuid](https://www.npmjs.com/package/uuid) to generate an unique and random id to every resource we create,
this is why the PUT and DELETE requests may return 404 when you run them from collections, but running them manually should work perfectly.

After every request on every resource, the response data is saved into a json file in the following path:

```bash
/JSON
```

## Authors
Yesid Bejarano Camacho - 201511498 <br/>
Michael Stiven Osorio Riaño - 201616273
