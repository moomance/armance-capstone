/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("group_details").del();
  await knex("group_details").insert([
    {
      groupId: 1,
      group_name: "Paris Photography Club",
      group_image: "http://localhost:8080/group1.png",
      group_location: "Paris",
      group_bio:
        "We are a group of photography enthusiasts who love exploring the streets of Paris with our cameras.",
      group_language: "French",
      group_hobby: "Photography",
    },
    {
      groupId: 2,
      group_name: "New York Hiking Club",
      group_image: "http://localhost:8080/group2.png",
      group_location: "New York",
      group_bio:
        "We love to explore the great outdoors and discover new hiking trails in and around New York City.",
      group_language: "English",
      group_hobby: "Hiking",
    },
    {
      groupId: 3,
      group_name: "Tokyo Cooking Class",
      group_image: "http://localhost:8080/group3.png",
      group_location: "Tokyo",
      group_bio:
        "We are a group of foodies who love to cook and share our favorite Japanese recipes with others.",
      group_language: "Japanese",
      group_hobby: "Cooking",
    },
    {
      groupId: 4,
      group_name: "Barcelona Painting Workshop",
      group_image: "http://localhost:8080/group4.png",
      group_location: "Barcelona",
      group_bio:
        "We are a group of artists who love to paint and draw in the beautiful city of Barcelona.",
      group_language: "Spanish",
      group_hobby: "Painting",
    },
    {
      groupId: 5,
      group_name: "Rome Gaming Society",
      group_image: "http://localhost:8080/group5.png",
      group_location: "Rome",
      group_bio:
        "We are a group of gamers who love to play board games, card games, and video games in Rome.",
      group_language: "Italian",
      group_hobby: "Gaming",
    },
    {
      groupId: 6,
      group_name: "Berlin Yoga Club",
      group_image: "http://localhost:8080/group6.png",
      group_location: "Berlin",
      group_bio:
        "We are a group of yogis who love to practice yoga and meditation in the parks and gardens of Berlin.",
      group_language: "German",
      group_hobby: "Yoga",
    },
    {
      groupId: 7,
      group_name: "Paris Music Jam",
      group_image: "http://localhost:8080/group7.png",
      group_location: "Paris",
      group_bio:
        "We are a group of musicians who love to play and sing together in the cafes and bars of Paris.",
      group_language: "French",
      group_hobby: "Music",
    },
    {
      groupId: 8,
      group_name: "New York Dancing Crew",
      group_image: "http://localhost:8080/group8.png",
      group_location: "New York",
      group_bio:
        "We are a group of dancers who love to learn and perform different styles of dance in New York City.",
      group_language: "English",
      group_hobby: "Dancing",
    },
    {
      groupId: 9,
      group_name: "Tokyo Board Game Society",
      group_image: "http://localhost:8080/group9.png",
      group_location: "Tokyo",
      group_bio:
        "We are a group of board game enthusiasts who love to play and discuss all kinds of board games in Tokyo.",
      group_language: "Japanese",
      group_hobby: "Board Games",
    },
    {
      groupId: 10,
      group_name: "Barcelona Wine Tasting Club",
      group_image: "http://localhost:8080/group10.png",
      group_location: "Barcelona",
      group_bio:
        "We are a group of wine lovers who love to taste and learn about different wines in and around Barcelona.",
      group_language: "Spanish",
      group_hobby: "Drinking",
    },
    {
      groupId: 11,
      group_name: "Tokyo Ramen Fanatics",
      group_image: "http://localhost:8080/group11.png",
      group_location: "Tokyo",
      group_bio:
        "We are a group of ramen lovers who love to explore and taste different types of ramen in Tokyo.",
      group_language: "Japanese",
      group_hobby: "Drinking",
    },
    {
      groupId: 12,
      group_name: "Rome Sports Club",
      group_image: "http://localhost:8080/group12.png",
      group_location: "Rome",
      group_bio:
        "We are a group of sports enthusiasts who love to play and watch different sports in Rome.",
      group_language: "Italian",
      group_hobby: "Sports",
    },
    {
      groupId: 13,
      group_name: "Berlin Movie Buffs",
      group_image: "http://localhost:8080/group13.png",
      group_location: "Berlin",
      group_bio:
        "We are a group of movie lovers who love to watch and discuss all kinds of movies in Berlin.",
      group_language: "German",
      group_hobby: "Movies",
    },
    {
      groupId: 14,
      group_name: "Paris Wine and Cheese Tasting",
      group_image: "http://localhost:8080/group14.png",
      group_location: "Paris",
      group_bio:
        "We are a group of wine and cheese lovers who love to taste and learn about different wines and cheeses in Paris.",
      group_language: "French",
      group_hobby: "Drinking",
    },
    {
      groupId: 15,
      group_name: "New York Music Lovers",
      group_image: "http://localhost:8080/group15.png",
      group_location: "New York",
      group_bio:
        "We are a group of music lovers who love to attend concerts and discover new artists in New York City.",
      group_language: "English",
      group_hobby: "Music",
    },
    {
      groupId: 16,
      group_name: "Tokyo Sake Enthusiasts",
      group_image: "http://localhost:8080/group16.png",
      group_location: "Tokyo",
      group_bio:
        "We are a group of sake lovers who love to taste and learn about different types of sake in Tokyo.",
      group_language: "Japanese",
      group_hobby: "Drinking",
    },
    {
      groupId: 17,
      group_name: "Barcelona Football Fans",
      group_image: "http://localhost:8080/group17.png",
      group_location: "Barcelona",
      group_bio:
        "We are a group of football fans who love to watch and support FC Barcelona in the local bars and stadiums.",
      group_language: "Spanish",
      group_hobby: "Sports",
    },
    {
      groupId: 18,
      group_name: "Rome Film Festival",
      group_image: "http://localhost:8080/group18.png",
      group_location: "Rome",
      group_bio:
        "We are a group of movie enthusiasts who love to attend and participate in the annual Rome Film Festival.",
      group_language: "Italian",
      group_hobby: "Movies",
    },
    {
      groupId: 19,
      group_name: "Berlin Language Exchange",
      group_image: "http://localhost:8080/group19.png",
      group_location: "Berlin",
      group_bio:
        "We are a group of language learners who love to practice and improve our language skills through conversation and cultural exchange over a drink.",
      group_language: "German",
      group_hobby: "Drinking",
    },
    {
      groupId: 20,
      group_name: "Berlin Mountain Hikers",
      group_image: "http://localhost:8080/group20.png",
      group_location: "Berlin",
      group_bio:
        "We are a group of hikers who love to explore and conquer the mountains near Berlin.",
      group_language: "German",
      group_hobby: "Hiking",
    },
    {
      groupId: 21,
      group_name: "Paris Wine Tasting",
      group_image: "http://localhost:8080/group21.png",
      group_location: "Paris",
      group_bio:
        "We are a group of wine lovers who love to taste and learn about French wines in Paris.",
      group_language: "French",
      group_hobby: "Drinking",
    },
    {
      groupId: 22,
      group_name: "Barcelona Flamenco Dance",
      group_image: "http://localhost:8080/group22.png",
      group_location: "Barcelona",
      group_bio:
        "We are a group of dance enthusiasts who love to learn and perform the traditional flamenco dance in Barcelona.",
      group_language: "Spanish",
      group_hobby: "Dancing",
    },
    {
      groupId: 23,
      group_name: "Barcelona Painting Workshop",
      group_image: "http://localhost:8080/group23.png",
      group_location: "Barcelona",
      group_bio:
        "We are a group of artists who love to paint and share our techniques and inspiration in Barcelona.",
      group_language: "Spanish",
      group_hobby: "Painting",
    },
    {
      groupId: 24,
      group_name: "Rome Photography Club",
      group_image: "http://localhost:8080/group24.png",
      group_location: "Rome",
      group_bio:
        "We are a group of photography enthusiasts who love to capture the beauty and history of Rome through our lenses.",
      group_language: "Italian",
      group_hobby: "Photography",
    },
    {
      groupId: 25,
      group_name: "New York Board Game Night",
      group_image: "http://localhost:8080/group25.png",
      group_location: "New York",
      group_bio:
        "We are a group of board game lovers who love to play and discover new board games in New York City.",
      group_language: "English",
      group_hobby: "Board Games",
    },
    {
      groupId: 26,
      group_name: "Tokyo Karaoke Night",
      group_image: "http://localhost:8080/group26.png",
      group_location: "Tokyo",
      group_bio:
        "We are a group of music lovers who love to sing and have fun in the karaoke bars of Tokyo.",
      group_language: "Japanese",
      group_hobby: "Music",
    },
    {
      groupId: 27,
      group_name: "Berlin Beer Tasting",
      group_image: "http://localhost:8080/group27.png",
      group_location: "Berlin",
      group_bio:
        "We are a group of beer lovers who love to taste and learn about different types of beer in Berlin.",
      group_language: "German",
      group_hobby: "Drinking",
    },
    {
      groupId: 28,
      group_name: "Paris Yoga in the Park",
      group_image: "http://localhost:8080/group28.png",
      group_location: "Paris",
      group_bio:
        "We are a group of yoga enthusiasts who love to practice and connect with nature in the parks of Paris.",
      group_language: "French",
      group_hobby: "Yoga",
    },
    {
      groupId: 29,
      group_name: "Barcelona Cooking Class",
      group_image: "http://localhost:8080/group29.png",
      group_location: "Barcelona",
      group_bio:
        "We are a group of food lovers who love to cook and learn new recipes in Barcelona.",
      group_language: "Spanish",
      group_hobby: "Cooking",
    },
    {
      groupId: 30,
      group_name: "Rome Cinema Paradiso",
      group_image: "http://localhost:8080/group30.png",
      group_location: "Rome",
      group_bio:
        "We are a group of movie lovers who love to watch and discuss classic Italian movies in Rome.",
      group_language: "Italian",
      group_hobby: "Movies",
    },
    {
      groupId: 31,
      group_name: "New York Running Club",
      group_image: "http://localhost:8080/group31.png",
      group_location: "New York",
      group_bio:
        "We are a group of runners who love to explore and challenge ourselves on the streets of New York City.",
      group_language: "English",
      group_hobby: "Sports",
    },
    {
      groupId: 32,
      group_name: "Tokyo Dance Workshop",
      group_image: "http://localhost:8080/group32.png",
      group_location: "Tokyo",
      group_bio:
        "We are a group of dance enthusiasts who love to learn and perform different styles of dance in Tokyo.",
      group_language: "Japanese",
      group_hobby: "Dancing",
    },
    {
      groupId: 33,
      group_name: "French Food Lovers",
      group_image: "http://localhost:8080/group33.png",
      group_location: "France",
      group_bio: "A group for foodies who love French cuisine.",
      group_language: "French",
      group_hobby: "Drinking",
    },
  ]);
};
