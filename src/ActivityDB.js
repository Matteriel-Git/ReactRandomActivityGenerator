const activities = [
    {
        "activity": "Go for a walk",
        "description": "To walk for pleasure rather than for practical reasons",
        "picture": <img id="photos" src="images/walk.jpg" alt="walk" />
    },
    {
        "activity": "Listen to music",
        "description": "Put on your favortite music",
        "picture": <img id="photos" src="images/listen.jpg" alt="earbuds" />
    },
    {
        "activity": "Do photography",
        "description": "Take pictures of something that interests you. Can be fashion, sports, architecture, nature, etc",
        "picture": <img id="photos" src="images/photography.jpeg" alt="camera" />
    },
    {
        "activity": "Read a newspaper or magazine",
        "description": "A printed publication (usually issued daily or weekly) consisting of folded unstapled sheets and containing news, feature articles, advertisements, and correspondence",
        "picture": <img id="photos" src="images/newspaper.jpg" alt="newspaper" />
    },
    {
        "activity": "Take a bath",
        "description": "Relax in a nice long bath",
        "picture": <img id="photos" src="images/bath.jpg" alt="relaxing bath" />
    },
    {
        "activity": "Sit in the sun",
        "description": "Sunscreen required",
        "picture": <img id="photos" src="images/sun-sitting.jpg" alt="girl layign at the beach" />
    },
    {
        "activity": "Watch a movie",
        "description": "An old favorite, or a new one that interests you",
        "picture": <img id="photos" src="images/movie-watch.jpg" alt="watching movies" />
    },
    {
        "activity": "Go on a bike ride",
        "description": "Find a nice path and explore it",
        "picture": <img id="photos" src="images/bike-ride.jpg" alt="bike ride" />
    },
    {
        "activity": "Write in a journal",
        "description": "Put your thoughts down on paper",
        "picture": <img id="photos" src="images/journal.jpg" alt="journal" />
    },
    {
        "activity": "Work on a puzzle",
        "description": "A game, toy, or problem designed to test ingenuity or knowledge",
        "picture": <img id="photos" src="images/puzzle.jpg" alt="puzzle" />
    },
    {
        "activity": "Recall a happy memory",
        "description": "The best memory you can think of",
        "picture": <img id="photos" src="images/memory.jpg" alt="memory" />
    },
    {
        "activity": "Color",
        "description": "Grab a marker or colored pencil and start coloring",
        "picture": <img id="photos" src="images/coloring.jpg" alt="coloring" />
    },
    {
        "activity": "Do gardening",
        "description": "Grow some plants",
        "picture": <img id="photos" src="images/gardening.jpg" alt="gardening" />
    },
    {
        "activity": "Spend time with friends",
        "description": "Have some fun with firends",
        "picture": <img id="photos" src="images/friends.jpg" alt="friends" />
    },
    {
        "activity": "Do yoga",
        "description": "A Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation",
        "picture": <img id="photos" src="images/yoga.jpg" alt="yoga" />
    },
    {
        "activity": "Swim",
        "description": "Great activity for a hot day",
        "picture": <img id="photos" src="images/swimming.jpg" alt="swimming" />
    },
    {
        "activity": "Sing",
        "description": "Perform some songs",
        "picture": <img id="photos" src="images/singing.jpg" alt="singing" />
    },
    {
        "activity": "Dance",
        "description": "Get your feet and body moving to some music",
        "picture": <img id="photos" src="images/dancing2.jpg" alt="dancing" />
    },
    {
        "activity": "Go to a flea market",
        "description": "Full of interesting people and things",
        "picture": <img id="photos" src="images/fleamarket.jpg" alt="flea market" />
    },
    {
        "activity": "Draw",
        "description": "A picture or diagram made with a pencil, pen, or crayon rather than paint",
        "picture": <img id="photos" src="images/drawing.jpg" alt="drawing" />
    },
    {
        "activity": "Paint",
        "description": "The process or art of using paint, in a picture, as a protective coating, or as decoration",
        "picture": <img id="photos" src="images/painting.jpg" alt="painting" />
    },
    {
        "activity": "Go running",
        "description": "The action or movement of a runner",
        "picture": <img id="photos" src="images/running.jpg" alt="running" />
    },
    {
        "activity": "Join a book club",
        "description": "Where a group comes together to talk about the current book they are reading",
        "picture": <img id="photos" src="images/bookclub.jpg" alt="book club" />
    },
    {
        "activity": "Go to a farmer's market",
        "description": "A food market at which local farmers sell fruit and vegetables and often meat, cheese, and bakery products directly to consumers.",
        "picture": <img id="photos" src="images/farmersmarket.jpg" alt="farmers market" />
    },
    {
        "activity": "Talk to loved one's",
        "description": "Could be a family member or someone you care deeply about",
        "picture": <img id="photos" src="images/lovedones.jpg" alt="talking to loved ones" />
    },
    {
        "activity": "Play a musical instrument",
        "description": "Any device for producing a musical sound",
        "picture": <img id="photos" src="images/instrument.jpg" alt="playing guitar" />
    },
    {
        "activity": "Do crafting (crochet, model building)",
        "description": "The activity or hobby of making decorative articles by hand",
        "picture": <img id="photos" src="images/crafting.jpg" alt="crafting" />
    },
    {
        "activity": "Get a massage",
        "description": "The rubbing and kneading of muscles and joints of the body with the hands, especially to relieve tension or pain",
        "picture": <img id="photos" src="images/massage.jpg" alt="massage" />
    },
    {
        "activity": "Cook",
        "description": "The practice or skill of preparing food by combining, mixing, and heating ingredients",
        "picture": <img id="photos" src="images/cooking.jpg" alt="cooking" />
    },
    {
        "activity": "Go to a park",
        "description": "A large public green area in a town, used for recreation",
        "picture": <img id="photos" src="images/park.jpg" alt="park" />
    },
    {
        "activity": "Play a sport",
        "description": "Football, basketball, baseball, soccer, etc",
        "picture": <img id="photos" src="images/sports.jpg" alt="sports" />
    },
    {
        "activity": "Go sightseeing in your own town",
        "description": "The activity of visiting places of interest in a particular location",
        "picture": <img id="photos" src="images/sightseeing.jpg" alt="sightseeing" />
    },
    {
        "activity": "Read a book",
        "description": "A book you've always wanted to read",
        "picture": <img id="photos" src="images/book.jpg" alt="reading a book" />
    },
    {
        "activity": "Meditate",
        "description": "Think deeply or focus one's mind for a period of time, in silence or with the aid of chanting, for religious or spiritual purposes or as a method of relaxation",
        "picture": <img id="photos" src="images/meditate.jpg" alt="meditating" />
    },
    {
        "activity": "Watch a sunrise or sunset",
        "description": "Great to be paired with another activity on this list",
        "picture": <img id="photos" src="images/sunrise.png" alt="sunrise" />
    },
    {
        "activity": "Enjoy a cup of tea",
        "description": "A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water",
        "picture": <img id="photos" src="images/tea.jpg" alt="cup of tea" />
    },
    {
        "activity": "Have a picnic",
        "description": "An outing or occasion that involves taking a packed meal to be eaten outdoors",
        "picture": <img id="photos" src="images/picnic.jpg" alt="picnic" />
    },
    {
        "activity": "Visit a museum",
        "description": "A building in which objects of historical, scientific, artistic, or cultural interest are stored and exhibited",
        "picture": <img id="photos" src="images/museum.jpg" alt="museum" />
    },
    {
        "activity": "Do sudoku or a crossword puzzle",
        "description": "A puzzle in which players insert the numbers one to nine into a grid consisting of nine squares subdivided into a further nine smaller squares in such a way that every number appears once in each horizontal line, vertical line, and square",
        "picture": <img id="photos" src="images/sudoku.jpg" alt="sudoku" />
    },
    {
        "activity": "Play a board game",
        "description": "Any game played on a board, especially one that involves the movement of pieces on the board, such as chess or checkers",
        "picture": <img id="photos" src="images/boardgame.jpg" alt="boardgame" />
    },
    {
        "activity": "Look at old photos",
        "description": "One's that bring back great memories",
        "picture": <img id="photos" src="images/oldphotos.jpeg" alt="oldphotos" />
    },
    {
        "activity": "Do a roadtrip",
        "description": "A journey made by car, bus, etc",
        "picture": <img id="photos" src="images/roadtrip.jpg" alt="roadtrip" />
    },
    {
        "activity": "Call a friend or family member",
        "description": "Just to catch up with each other",
        "picture": <img id="photos" src="images/callingfriend.jpg" alt="calling a friend" />
    },
    {
        "activity": "Go hiking",
        "description": "The activity of going for long walks, especially in the country or woods",
        "picture": <img id="photos" src="images/hiking.jpg" alt="hiking" />
    },
    {
        "activity": "Go to movie theatre",
        "description": "A theater where movies are shown for public entertainment",
        "picture": <img id="photos" src="images/movietheatre.jpg" alt="movie theatre" />
    },
    {
        "activity": "Volunteer",
        "description": "A person who freely offers to take part in an enterprise or undertake a task",
        "picture": <img id="photos" src="images/volunteer.jpg" alt="volunteer" />
    },
    {
        "activity": "Go to the library",
        "description": "A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to",
        "picture": <img id="photos" src="images/library.jpg" alt="library" />
    },
    {
        "activity": "Go to a coffee shop",
        "description": "A cafe serving coffee and light refreshments",
        "picture": <img id="photos" src="images/coffeeshop.jpg" alt="coffee shop" />
    },
    {
        "activity": "Stargaze",
        "description": "Observing the stars",
        "picture": <img id="photos" src="images/stargazing.jpg" alt="stargazing" />
    },
    {
        "activity": "Explore somewhere new",
        "description": "Anywhere that interests you",
        "picture": <img id="photos" src="images/exploring.jpg" alt="exploring" />
    }
]

export default activities;