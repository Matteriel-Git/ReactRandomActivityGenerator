const activities = [
    {
        "activity": "Go for a walk",
        "description": "To walk for pleasure rather than for practical reasons",
        "picture": <img src="https://hips.hearstapps.com/hmg-prod/images/runner-feet-running-on-road-closeup-on-shoe-royalty-free-image-918789438-1553785419.jpg" alt="" />
    },
    {
        "activity": "Listen to music",
        "description": "Put on your favortite music",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Photography",
        "description": "Take pictures of something that interests you. Can be fashion, sports, architecture, nature, etc",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Read a newspaper or magazine",
        "description": "A printed publication (usually issued daily or weekly) consisting of folded unstapled sheets and containing news, feature articles, advertisements, and correspondence",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Take a bath",
        "description": "Relax in a nice long bath",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Sit in the sun",
        "description": "Sunscreen required",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Watch a movie",
        "description": "An old favorite, or a new one that interests you",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Go on a bike ride",
        "description": "Find a nice path and explore it",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Write in a journal",
        "description": "Put your thoughts down on paper",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Work on a puzzle",
        "description": "A game, toy, or problem designed to test ingenuity or knowledge",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Recall a happy memory",
        "description": "The best memory you can think of",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Coloring",
        "description": "Grab a marker or colored pencil and start coloring",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Gardening",
        "description": "Grow some plants",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Spend time with friends",
        "description": "Have some fun with your firends",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Do yoga",
        "description": "A Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Swimming",
        "description": "Great activity for a hot day",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Singing",
        "description": "Perform some songs",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Dancing",
        "description": "Get your feet and body moving to some music",
        "picture": <img src="" alt="" />
    },
    {
        "activity": "Go to a flea market",
        "description": "Full of interesting people and things"
    },
    {
        "activity": "Drawing",
        "description": "A picture or diagram made with a pencil, pen, or crayon rather than paint"
    },
    {
        "activity": "Painting",
        "description": "The process or art of using paint, in a picture, as a protective coating, or as decoration"
    },
    {
        "activity": "Go running",
        "description": "The action or movement of a runner"
    },
    {
        "activity": "Join a book club",
        "description": "Where a group comes together to talk about the current book they are reading"
    },
    {
        "activity": "Go to a farmer's market",
        "description": "A food market at which local farmers sell fruit and vegetables and often meat, cheese, and bakery products directly to consumers."
    },
    {
        "activity": "Talk to loved one's",
        "description": "Could be a family member or someone you care deeply about"
    },
    {
        "activity": "Play a musical instrument",
        "description": "Any device for producing a musical sound"
    },
    {
        "activity": "Crafting (crochet, model building)",
        "description": "The activity or hobby of making decorative articles by hand"
    },
    {
        "activity": "Get a massage",
        "description": "The rubbing and kneading of muscles and joints of the body with the hands, especially to relieve tension or pain"
    },
    {
        "activity": "Cooking",
        "description": "The practice or skill of preparing food by combining, mixing, and heating ingredients"
    },
    {
        "activity": "Go to a park",
        "description": "A large public green area in a town, used for recreation"
    },
    {
        "activity": "Play a sport",
        "description": "Football, basketball, baseball, soccer, etc"
    },
    {
        "activity": "Go sightseeing in your own town",
        "description": "The activity of visiting places of interest in a particular location"
    },
    {
        "activity": "Read a book",
        "description": "A book you've always wanted to read"
    },
    {
        "activity": "Meditate",
        "description": "Think deeply or focus one's mind for a period of time, in silence or with the aid of chanting, for religious or spiritual purposes or as a method of relaxation"
    },
    {
        "activity": "Watch a sunrise or sunset",
        "description": "Great to be paired with another acitivity on this list"
    },
    {
        "activity": "Enjoy a cup of tea",
        "description": "A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water"
    },
    {
        "activity": "Have a picnic",
        "description": "An outing or occasion that involves taking a packed meal to be eaten outdoors"
    },
    {
        "activity": "Visit a museum",
        "description": "A building in which objects of historical, scientific, artistic, or cultural interest are stored and exhibited"
    },
    {
        "activity": "Sudoku or a crossword puzzle",
        "description": "A puzzle in which players insert the numbers one to nine into a grid consisting of nine squares subdivided into a further nine smaller squares in such a way that every number appears once in each horizontal line, vertical line, and square"
    },
    {
        "activity": "Play a board game",
        "description": "Any game played on a board, especially one that involves the movement of pieces on the board, such as chess or checkers"
    },
    {
        "activity": "Look at old photos",
        "description": "One's that bring back great memories"
    },
    {
        "activity": "Roadtrip",
        "description": "A journey made by car, bus, etc"
    },
    {
        "activity": "Call a friend or family member",
        "description": "Just to catch up with each other"
    },
    {
        "activity": "Hiking",
        "description": "The activity of going for long walks, especially in the country or woods"
    },
    {
        "activity": "Go to movie theatre",
        "description": "A theater where movies are shown for public entertainment"
    },
    {
        "activity": "Volunteer",
        "description": "A person who freely offers to take part in an enterprise or undertake a task"
    },
    {
        "activity": "Go to the library",
        "description": "A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to"
    },
    {
        "activity": "Go to a coffee shop",
        "description": "A cafe serving coffee and light refreshments"
    },
    {
        "activity": "Stargazing",
        "description": "Observing the stars"
    },
    {
        "activity": "Explore somewhere new",
        "description": "Anywhere that interests you"
    }
]

export default activities;