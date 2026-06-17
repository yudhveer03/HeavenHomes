const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views, private beach access, and cozy evenings by the fire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Downtown Loft",
        description: "Experience the vibrant city life from this sleek, modern loft. Located in the heart of downtown, you are just steps away from the finest dining, shopping, and nightlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Secluded Mountain Cabin",
        description: "Unplug and reconnect with nature in this rustic mountain cabin. Surrounded by towering pines and scenic hiking trails, it's the perfect retreat for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 950,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Tropical Luxury Villa",
        description: "Indulge in paradise at this breathtaking tropical villa. Features a private infinity pool, lush gardens, and sweeping panoramic views of the crystal-clear ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Historic European Apartment",
        description: "Immerse yourself in history in this beautifully restored apartment. Featuring classic architecture, high ceilings, and charming views of old world European streets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1100,
        location: "Paris",
        country: "France",
    },
    {
        title: "Serene Desert Oasis",
        description: "Relax in luxury at this striking modern home nestled in the desert landscape. Perfect for stargazing, enjoying the private pool, and peaceful desert sunsets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Palm Springs",
        country: "United States",
    },
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views, private beach access, and cozy evenings by the fire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Downtown Loft",
        description: "Experience the vibrant city life from this sleek, modern loft. Located in the heart of downtown, you are just steps away from the finest dining, shopping, and nightlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Secluded Mountain Cabin",
        description: "Unplug and reconnect with nature in this rustic mountain cabin. Surrounded by towering pines and scenic hiking trails, it's the perfect retreat for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 950,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Tropical Luxury Villa",
        description: "Indulge in paradise at this breathtaking tropical villa. Features a private infinity pool, lush gardens, and sweeping panoramic views of the crystal-clear ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Historic European Apartment",
        description: "Immerse yourself in history in this beautifully restored apartment. Featuring classic architecture, high ceilings, and charming views of old world European streets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1100,
        location: "Paris",
        country: "France",
    },
    {
        title: "Serene Desert Oasis",
        description: "Relax in luxury at this striking modern home nestled in the desert landscape. Perfect for stargazing, enjoying the private pool, and peaceful desert sunsets.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Palm Springs",
        country: "United States",
    },
    {
        title: "Cozy Mountain Cabin",
        description: "Escape to this warm and rustic cabin surrounded by pine forests and breathtaking mountain views. Ideal for hiking, bonfires, and peaceful evenings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 950,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Luxury Beachfront Villa",
        description: "Wake up to the sound of waves in this stunning beachfront villa featuring a private infinity pool and direct beach access.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Tokyo Loft",
        description: "Experience the vibrant city life of Tokyo in this sleek loft apartment with minimalist interiors and skyline views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1400,
        location: "Tokyo",
        country: "Japan",
    },
    {
        title: "Lakeside Wooden Cottage",
        description: "Enjoy peaceful mornings and kayaking adventures in this charming lakeside retreat surrounded by nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 800,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Santorini Cliff House",
        description: "Stay in a beautiful whitewashed home perched on the cliffs with breathtaking sunset views over the Aegean Sea.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Rustic Countryside Farmhouse",
        description: "Reconnect with nature in this peaceful farmhouse surrounded by rolling green fields and fresh country air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 700,
        location: "Tuscany",
        country: "Italy",
    },
    {
        title: "Elegant London Penthouse",
        description: "Enjoy luxury living in the heart of the city with panoramic skyline views and sophisticated modern interiors.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "London",
        country: "United Kingdom",
    },
    {
        title: "Rainforest Treehouse Retreat",
        description: "Live among the treetops in this eco-friendly treehouse surrounded by lush rainforest and exotic wildlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1300,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Scandinavian Minimalist Home",
        description: "Relax in this beautifully designed Nordic-inspired home with clean interiors and cozy wooden accents.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Stockholm",
        country: "Sweden",
    },
    {
        title: "Dubai Skyline Apartment",
        description: "Stay in a luxurious high-rise apartment offering stunning city skyline views and world-class amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 2100,
        location: "Dubai",
        country: "United Arab Emirates",
    },
    {
        title: "Hidden Jungle Bungalow",
        description: "Find tranquility in this secluded jungle bungalow with open-air living spaces and tropical surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "Phuket",
        country: "Thailand",
    },
    {
        title: "Historic Castle Stay",
        description: "Experience royal living in this restored medieval castle featuring grand halls and antique decor.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Edinburgh",
        country: "Scotland",
    },
    {
        title: "Ocean View Apartment",
        description: "Wake up to stunning ocean views in this stylish apartment located just steps from the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1700,
        location: "Sydney",
        country: "Australia",
    },
    {
        title: "Traditional Kyoto House",
        description: "Stay in an authentic Japanese home featuring tatami mats, sliding doors, and peaceful garden views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Kyoto",
        country: "Japan",
    },
    {
        title: "Modern New York Studio",
        description: "Enjoy city living in this compact yet stylish studio apartment in the heart of Manhattan.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 2400,
        location: "New York",
        country: "United States",
    },
    {
        title: "Tropical Island Villa",
        description: "Unwind in paradise with this private island villa featuring crystal-clear waters and palm tree views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 2800,
        location: "Maldives",
        country: "Maldives",
    },
    {
        title: "Snowy Alpine Chalet",
        description: "Perfect for winter getaways, this cozy chalet offers ski-in access and breathtaking snowy landscapes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1900,
        location: "Zermatt",
        country: "Switzerland",
    },
    {
        title: "Bohemian Artist Loft",
        description: "Stay in a colorful loft filled with creative decor, vintage furniture, and artistic vibes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1000,
        location: "Berlin",
        country: "Germany",
    },
    {
        title: "Safari Lodge Adventure",
        description: "Experience wildlife up close in this luxury safari lodge overlooking the African savannah.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 3200,
        location: "Nairobi",
        country: "Kenya",
    },
    {
        title: "Canal Side Amsterdam Home",
        description: "Charming canal-side house with classic Dutch architecture and beautiful waterfront views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
        },
        price: 1450,
        location: "Amsterdam",
        country: "Netherlands",
    }
];

module.exports = { data: sampleListings };