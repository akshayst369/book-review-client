require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const books = [
  {
    title: "The Alchemist",
    cover: "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    reviews: ["Artfully, Coelho combines philosophy, wisdom, and the simplicity of language to tell this story. Masterfully told and somehow deeply personal while maintaining a comfortable distance from the reader, The Alchemist is a story everyone should enjoy and learn from at least once."]
  },
  {
    title: "Rich Dad Poor Dad",
    cover: "https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg",
    reviews: ["The literary work Rich Dad Poor Dad, penned by Robert Kiyosaki, is a timeless guide to financial literacy that imparts significant knowledge on capital accumulation and achieving economic autonomy. This written masterpiece has retained its status as an all-time favorite for over twenty years now and continues to be instrumental in empowering countless individuals worldwide towards managing their monetary affairs effectively."]
  },
  {
    title: "The Road",
    cover: "/images/the_road.jpg",
    reviews: ["The Road is a harrowing post-apocalyptic novel that follows a father and his young son as they journey through a devastated landscape. With the world in ruins and most of humanity wiped out, the pair struggles to survive against the constant threats of starvation, exposure, and violent scavengers. McCarthy's stark, poetic prose captures the deep bond between father and son as they cling to hope and each other in the face of overwhelming despair. The novel is a profound meditation on the will to survive, the nature of humanity, and the enduring power of love."]
  },
  {
    title: "The Lord of the Rings",
    cover: "/images/The_Lord_of_the_Rings.jpg",
    reviews: ["The Lord of the Rings is an epic fantasy trilogy that chronicles the quest to destroy the One Ring and defeat the Dark Lord Sauron. The story begins in the Shire, where the unassuming hobbit Frodo Baggins inherits the ring from his uncle Bilbo. With the guidance of the wizard Gandalf, Frodo sets out on a perilous journey to Mount Doom, where the ring must be destroyed. Along the way, he is joined by his loyal friends Sam, Merry, and Pippin, as well as a fellowship that includes the ranger Aragorn, the elf Legolas, the dwarf Gimli, and Boromir, a man of Gondor. The trilogy explores themes of friendship, sacrifice, and the struggle between good and evil, set against the richly detailed backdrop of Middle-earth, complete with its own languages, histories, and cultures. Tolkien's masterful world-building and intricate plot have made this series a cornerstone of modern fantasy literature, inspiring countless adaptations, including the highly acclaimed film series directed by Peter Jackson."]
  },
  {
    title: "The Da Vinci Code",
    cover: "/images/the_da_vinci_code.jpg",
    reviews: ["The Da Vinci Code is a gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels a series of cryptic clues related to the works of Leonardo da Vinci. After a murder at the Louvre Museum, Langdon teams up with French cryptologist Sophie Neveu to uncover a conspiracy involving a secret society and the Holy Grail. As they race against time to decode the puzzle, they encounter twists and turns that challenge their beliefs and put their lives in danger. Brown's fast-paced narrative blends history, art, and religion, making for an electrifying read."]
  },
  {
    title: "The Great Gatsby",
    cover: "/images/The_Great_Gatsby.jpg",
    reviews: ["The Great Gatsby is a tragic love story, a mystery, and a social commentary on American life. Set in the Jazz Age on Long Island, the novel depicts the life of Jay Gatsby and his unrequited love for Daisy Buchanan. Through the eyes of Nick Carraway, a Yale graduate and World War I veteran, Fitzgerald portrays the opulence and excess of the Roaring Twenties. The novel delves into themes of ambition, love, wealth, and the American Dream, illustrating the complexities and ultimate disillusionment of the pursuit of happiness."]
  },
  {
    title: "Narnia",
    cover: "/images/Narnia.jpg",
    reviews: ["The Lion, the Witch and the Wardrobe is the first published and best-known book in The Chronicles of Narnia series by C.S. Lewis. It tells the story of four siblings—Peter, Susan, Edmund, and Lucy Pevensie—who discover a magical wardrobe that leads to the land of Narnia. There, they join the great lion Aslan in the battle against the White Witch, who has plunged Narnia into eternal winter. The novel explores themes of good versus evil, redemption, and the power of faith and courage. Lewis's enchanting narrative, allegorical layers, and richly imagined world have made this book a beloved classic. The story's film adaptations have introduced the magical world of Narnia to new generations, further cementing its place in popular culture."]
  },
  {
    title: "Pride and Prejudice",
    cover: "/images/Pride_and_Prejudice.png",
    reviews:["Pride and Prejudice is a romantic novel of manners that paints a vivid picture of early 19th-century England. The story revolves around Elizabeth Bennet, an intelligent and spirited young woman, and her evolving relationship with the wealthy and enigmatic Mr. Darcy. As they navigate issues of morality, education, and class, the novel explores the importance of marrying for love rather than money or social prestige. Austen's wit and keen observations on human behavior make this a timeless classic that continues to resonate with readers."]
  },
  {
    title: "Fight Club",
    cover: "/images/Fight_Club.png",
    reviews: ["Fight Club is a provocative novel by Chuck Palahniuk that delves into themes of masculinity, consumerism, and identity. The story is narrated by an unnamed protagonist who is disillusioned with his monotonous corporate job and the empty consumer culture he inhabits. He forms an underground fight club with the enigmatic Tyler Durden as a way to express his frustrations and reclaim his sense of self. As the club's activities escalate and take a more anarchic turn, the narrator must confront the darker aspects of his psyche and his complicated relationship with Tyler. Palahniuk's raw, visceral prose and the novel's exploration of societal norms have made it a cult classic, and its film adaptation directed by David Fincher, starring Brad Pitt and Edward Norton, has achieved iconic status."]  
  },
  {
    title: "Harry Potter",
    cover: "/images/Harry_Potter.jpg",
    reviews: ["Harry Potter and the Prisoner of Azkaban is a fantasy novel written by the British author J. K. Rowling. It is the third instalment in the Harry Potter series. The novel follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry."]
  },
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected, seeding books...");
    return Book.insertMany(books);
  })
  .then(() => {
    console.log("Books seeded successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error:", err);
  });
