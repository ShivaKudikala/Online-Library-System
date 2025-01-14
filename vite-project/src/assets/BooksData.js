const booksData = [
    {
      id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      description: "A novel about the American dream, love, and tragedy set in the 1920s.",
      publishedYear: 1925,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Great+Gatsby",
      rating: 4.5
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
      description: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
      publishedYear: 1949,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=1984",
      rating: 4.8
    },
    {
      id: "3",
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Science",
      description: "An exploration of cosmology and the origins of the universe.",
      publishedYear: 1988,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=A+Brief+History+of+Time",
      rating: 4.7
    },
    {
      id: "4",
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
      description: "A guide to modern entrepreneurship and building sustainable businesses.",
      publishedYear: 2011,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Lean+Startup",
      rating: 4.2
    },
    {
      id: "5",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description: "A prelude to The Lord of the Rings, following the journey of Bilbo Baggins.",
      publishedYear: 1937,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Hobbit",
      rating: 4.9
    },
    {
      id: "6",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "History",
      description: "A deep dive into the history of the human species.",
      publishedYear: 2014,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Sapiens",
      rating: 4.7
    },
    {
      id: "7",
      title: "Atomic Habits",
      author: "James Clear",
      category: "Business",
      description: "A practical guide to building good habits and breaking bad ones.",
      publishedYear: 2018,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Atomic+Habits",
      rating: 4.8
    },
    {
      id: "8",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      category: "Fantasy",
      description: "The first book in the Harry Potter series, introducing the wizarding world.",
      publishedYear: 1997,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Harry+Potter",
      rating: 4.9
    },
    {
      id: "9",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Classic",
      description: "A story about adolescent rebellion and self-discovery.",
      publishedYear: 1951,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Catcher+in+the+Rye",
      rating: 4.1
    },
    {
      id: "10",
      title: "The Art of War",
      author: "Sun Tzu",
      category: "Classic",
      description: "An ancient Chinese military treatise on strategy and tactics.",
      publishedYear: -500,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Art+of+War",
      rating: 4.4
    },
    {
      id: "11",
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      description: "A fable about following your dreams and listening to your heart.",
      publishedYear: 1988,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Alchemist",
      rating: 4.7
    },
    {
      id: "12",
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description: "A science fiction saga set on the desert planet Arrakis.",
      publishedYear: 1965,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Dune",
      rating: 4.5
    },
    {
      id: "13",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Classic",
      description: "A novel about racial inequality and moral growth in the American South.",
      publishedYear: 1960,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=To+Kill+a+Mockingbird",
      rating: 4.8
    },
    {
      id: "14",
      title: "Meditations",
      author: "Marcus Aurelius",
      category: "History",
      description: "A series of personal writings by the Roman Emperor on Stoicism.",
      publishedYear: 180,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Meditations",
      rating: 4.3
    },
    {
      id: "15",
      title: "The Road",
      author: "Cormac McCarthy",
      category: "Science",
      description: "A post-apocalyptic tale of a father and son's journey to survive.",
      publishedYear: 2006,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Road",
      rating: 4.6
    },
    {
      id: "16",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Sci-Fi",
      description: "A deep dive into the human mind's thinking systems.",
      publishedYear: 2011,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Thinking+Fast+and+Slow",
      rating: 4.7
    },
    {
      id: "17",
      title: "Brave New World",
      author: "Aldous Huxley",
      category: "Sci-Fi",
      description: "A dystopian novel set in a futuristic, highly controlled society.",
      publishedYear: 1932,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Brave+New+World",
      rating: 4.3
    },
    {
      id: "18",
      title: "The Power of Now",
      author: "Eckhart Tolle",
      category: "Science",
      description: "A guide to spiritual enlightenment and living in the present moment.",
      publishedYear: 1997,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Power+of+Now",
      rating: 4.6
    },
    {
      id: "19",
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description: "An epic fantasy trilogy set in Middle-earth.",
      publishedYear: 1954,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=The+Lord+of+the+Rings",
      rating: 4.9
    },
    {
      id: "20",
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      category: "History",
      description: "A historical analysis of how civilizations developed.",
      publishedYear: 1997,
      coverImage: "https://dummyimage.com/150x220/000/fff&text=Guns+Germs+and+Steel",
      rating: 4.7
    }
  ];
  
  export default booksData;
  