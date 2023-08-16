# Simple Notes Api

## Supporting Methods
_Get all notes_ | 
`GET api/v1/notes`

_Add note_ | `POST api/v1/notes/save`
```javascript
body {
    title: string,
    content: string
    createdBy: string
}
```
_Update note_ | `PUT api/v1/notes/update` 
```javascript
body {
    noteId: string, // Required
    title: string,
    content: string
}
```
_delete note_ |
`DELETE /notes/delete/:id`

_deleta all notes_ | 
`DELETE api/v1/notes/delete`

## run app
[Nodemon](https://www.npmjs.com/package/nodemon) is required for running the app.
```bash
npm install
npm start 
```
the app must start serving on http://localhost:5000

