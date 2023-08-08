# SALUT
SALUT is a web application that helps individuals relocating to a new country who want to socialize. With SALUT, users can join groups of like-minded people based on location, hobbies and languages that the user selects.

## Description
Relocating to a new country can be a an amazing experience but it also comes with it challenges too, including loneliness. Many nomads struggle to meet new people when they reach their new location, leading to feeling lonely.
SALUT was created to solve this problem by providing a platform for nomads to connect with others who share similar interests.

## My contributions

Combining my proficiency in UX design with my software engineering background, I realized a 10-day project that I was passionate about to graduate from my studies in software engineering. This project was more than a mere showcase of front-end and back-end capabilities; it aimed to build a meaningful platform that solved real expats' needs. By applying a comprehensive approach encompassing the UX design double diamond process, UI design, and full-stack development, I was able to navigate the project from conceptualization to implementation, ensuring its relevance and usability for potential users. 


## Table of Content 
- [Features and user Flow](#features)
- [Installation](#installation)
- [End Points](#endpoints)
- [Conclusion](#conclusion)


## Features 

- Create an account and build new profile
- Select location
- Select hobbies
- Select languages
- Join groups based on user's interests
- Search for groups by interest
- Look at a group member's profile page

## User Flow
![UserFlow](https://user-images.githubusercontent.com/122279872/230796935-ac5e6a2a-0855-4017-95b8-6b95458ba511.png)


## Final Solution Screens 

<img width="2173" alt="Screens" src="https://github.com/moomance/armance-capstone/assets/122279872/92653a2b-de5d-470a-ba51-e351b1203f94">


## Installation

1. Clone the repository: `git clone https://github.com/moomance/armance-capstone.git`
2. Install the dependencies: `npm install`
3. Set up the database: `mysql -u root -p`
4. Create database `CREATE DATABASE capstone`
5. Once you have a database to use, update the knexfile.js with your user, password, and database information. 
6. Create a .env file based on .env.example, and update your password information
7. Start the client: `npm start`
8. Start the server: `node --watch index.js`


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


--- 
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


--- 
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


---
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


---
### GET api/user_groups/:group_id
Functionality: Get information of a group's user's name and photo

#### Response body example when retrieving data for group 3
```json
[
    {
        "user_id": 3,
        "group_id": 3,
        "groupId": 3,
        "group_image": "http://localhost:8080/group3.png",
        "group_name": "Tokyo Cooking Class",
        "group_location": "Tokyo",
        "group_bio": "We are a group of foodies who love to cook and share our favorite Japanese recipes with others.",
        "group_language": "Japanese",
        "group_hobby": "Cooking",
        "name": "Alex",
        "avatar": "http://localhost:8080/user3.png"
    },
    {
        "user_id": 14,
        "group_id": 3,
        "groupId": 3,
        "group_image": "http://localhost:8080/group3.png",
        "group_name": "Tokyo Cooking Class",
        "group_location": "Tokyo",
        "group_bio": "We are a group of foodies who love to cook and share our favorite Japanese recipes with others.",
        "group_language": "Japanese",
        "group_hobby": "Cooking",
        "name": "Akiko",
        "avatar": "http://localhost:8080/user14.png"
    }
]
```

---

### Errors
- This API may return a 400 or 404 error
#### Example error body
```json
{
  "message": "Error retrieving data"
}
```
---
## Conclusion 

### Tech Stack used 

#### Front end: 
- React
- SAAS 
- Axios

#### Back End : 
- Node 
- Express
- cors
- knex
- mySQL 
- mySQL Workbench

### Lessons learned and next steps

As I developed this project, I encountered a number of challenges that allowed me to strengthen the new skills I have learned over the past three months.  I also learned the importance of staying flexible and adaptable. I faced unexpected challenges for this project and, by being flexible, I was better equipped to overcome these challenges and find creative solutions to problems.

Next steps for this project would be to add the possibility to message a group as well as create new groups and events. 
