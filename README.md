# armance-capstone: SALUT
SALUT is a web application that helps individuals relocating to a new country who want to socialize. With SALUT, users can join groups of like-minded people based on location, hobbies and languages that the user selects.

## Description
Relocating to a new country can be a an amazing experience. But it also comes with it challenges too, including loneliness. Many nomads struggle to meet new people when they reach their new location, leading to feeling lonely.
SALUT was created to solve this problem by providing a platform for nomads to connect with others who share similar interests.


## Features 

- Create an account and build new profile
- Select location
- Select hobbies
- Select languages
- Join groups based on user's interests
- Search for groups by interest

    

## Installation

1. Clone the repository: `git clone https://github.com/moomance/armance-capstone.git`
2. Install the dependencies: `npm install`
3. Set up the database: `npm run capstone`
4. Start the client: `npm start`
5. Start the server: `node --watch index.js`


## Endpoints
### Table 2: 02-hobbies

### GET api/hobbies 
Functionality:  Get a list of all hobbies

#### Response body example
```json
[
     {
        "id": 1,
        "hobby": "Photography",
        "icon": "U+1F4F8"
    },
    {
        "id": 2,
        "hobby": "Hiking",
        "icon": "U+1F97E"
    },
    {
        "id": 3,
        "hobby": "Cooking",
        "icon": "U+1F373"
    },
]
```

### Errors
- This API may return a 400 or 404 error
#### Example error body
```json
{
  "message": "Error retrieving hobbies"
}
```

### Table 3: 03-user_hobbies

### GET api/user_hobbies/:user_id 

Functionality: Get a list of each users' hobbies

#### Response body example retrieving hobbies for user 3
```json
[
    {
        "user_id": 3,
        "hobby_id": 3,
        "hobby": "Cooking",
        "icon": "U+1F373",
        "avatar": "http://localhost:8080/user3.png",
        "name": "Alex",
        "bio": "こんにちは！",
        "language1": "Japanese",
        "language2": "English",
        "language3": "Spanish",
        "location": "Tokyo"
    },
    {
        "user_id": 3,
        "hobby_id": 7,
        "hobby": "Music",
        "icon": "U+1F3A7",
        "avatar": "http://localhost:8080/user3.png",
        "name": "Alex",
        "bio": "こんにちは！",
        "language1": "Japanese",
        "language2": "English",
        "language3": "Spanish",
        "location": "Tokyo"
    },
    {
        "user_id": 3,
        "hobby_id": 8,
        "hobby": "Dancing",
        "icon": "U+1F57A",
        "avatar": "http://localhost:8080/user3.png",
        "name": "Alex",
        "bio": "こんにちは！",
        "language1": "Japanese",
        "language2": "English",
        "language3": "Spanish",
        "location": "Tokyo"
    }
]
```

### Errors
- This API may return a 400 or 404 error
#### Example error body
```json
{
  "message": "Error retrieving user hobbies"
}
```

### Table 4: 04-group_details

### GET api/groups 

Functionality: Get a list of groups

#### Response body example
```json
[
    {
        "groupId": 1,
        "group_name": "Paris Photography Club",
        "group_image": "http://localhost:8080/group1.png",
        "group_location": "Paris",
        "group_bio": "We are a group of photography enthusiasts who love exploring the streets of Paris with our cameras.",
        "group_language": "French",
        "group_hobby": "Photography"
    },
    {
        "groupId": 2,
        "group_name": "New York Hiking Club",
        "group_image": "http://localhost:8080/group2.png",
        "group_location": "New York",
        "group_bio": "We love to explore the great outdoors and discover new hiking trails in and around New York City.",
        "group_language": "English",
        "group_hobby": "Hiking"
    },
]
```

### Errors
- This API may return a 400 or 404 error
#### Example error body
```json
{
  "message": "Error retrieving groups"
}
```

### GET api/groups/:id
Functionality: Get information of a single group

#### Response body example when retrieving data for group 9
```json
[
    {
    "groupId": 9,
    "group_name": "Tokyo Board Game Society",
    "group_bio": "We are a group of board game enthusiasts who love to play and discuss all kinds of board games in Tokyo.",
    "group_image": "http://localhost:8080/group9.png"
}
]
```

### Errors
- This API may return a 400 or 404 error
#### Example error body
```json
{
  "message": "Record with id is not found"
}
```



GET /users/:id
Get details about a specific user.

Table 2 - Products
GET /products
Get a list of all products.

GET /products/:id
Get details about a specific product.

Table 3 - Orders
GET /orders
Get a list of all orders.

GET /orders/:id
Get details about a specific order.

Table 4 - Customers
GET /customers
Get a list of all customers.

GET /customers/:id
Get details about a specific customer.

Table 5 - Categories
GET /categories
Get a list of all categories.

GET /categories/:id
Get details about a specific category.

### GET `/videos`
- Returns an array of video objects 
- Contains only enough information to display in side bar
#### Response body example
```json
[
    {   
        "id": "1af0jruup5gu", 
        "title": "BMX Rampage: 2018 Highlights", 
        "channel": "Red Cow", 
        "image": "https://i.imgur.com/l2Xfgpl.jpg" 
    },
    { 
        "id": "1ainjruutd1j", 
        "title": "Become A Travel Pro In One Easy Lesson", 
        "channel": "Todd Welch", 
        "image": "https://i.imgur.com/5qyCZrD.jpg"
    }
]
```

### GET `/videos/:id`
- `:id` must be swapped out with the id of a video as found in the list of videos
- Returns a detailed object of a single video
    -  Details include the list of comments for that video
- Example response body
```json
{ 
        "id": "1af0jruup5gu",
        "title": "BMX Rampage: 2018 Highlights",
        "channel": "Red Cow",
        "image": "https://i.imgur.com/l2Xfgpl.jpg",
        "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        "views": "1,001,023",
        "likes": "110,985",
        "duration": "4:01",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": 1545162149000,
        "comments": [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ] 
    }
```
