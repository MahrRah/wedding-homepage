```sh 
curl -X POST http://localhost:7071/api/rsvp/3333 -H "Content-Type: application/json" -d '{"name": "linuxize", "email": "linuxize@example.com"}'
```
# Run Mongos DB locally 

```sh
docker run -d -p 27017:27017 --name test-mongo mongo:latest
```
Load data into MongoDB

https://earthly.dev/blog/mongodb-docker/#:~:text=Running%20MongoDB%20in%20a%20Docker%20Container,-For%20development%2C%20it&text=You%20can%20pull%20the%20latest,Atlas%20or%20MongoDB%20Enterprise%20Server.&text=This%20will%20pull%20the%20latest%20official%20image%20from%20Docker%20Hub.


insert 
db.guest.insert({_id:1,
...       "rsvpCode": "3333",
...       "name": "Valentin",
...       "lastname": "Grosjean",
...       "dinner": "3",
...       "brunch": "true",
...       "message": "sagjafshjal",
...       "plusOne": [
...         {
...           "name": "valentin",
...           "lastname": "grosjean",
...           "food": ""
...         }
...       ],
...       "children": [
...         {
...           "name": "valentin",
...           "lastname": "grosjean",
...           "food": "",
...           "age": ""
...         },
...         {
...           "name": "valentin",
...           "lastname": "grosjean",
...           "food": "",
...           "age": ""
...         },
...         {
...           "name": "valentin",
...           "lastname": "grosjean",
...           "food": "",
...           "age": ""
...         }
...       