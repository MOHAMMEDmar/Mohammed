src/lib/mockData.js
export const MODULES = [
  { key: "foodroute", name: "FoodRoute", path: "/foodroute", icon: "Apple", color: "#16a34a",
    tagline: "Rescue surplus food", desc: "AI routes surplus food from restaurants, farms & hotels to shelters and families before it expires." },
  { key: "aquaflow", name: "AquaFlow", path: "/aquaflow", icon: "Droplets", color: "#0ea5e9",
    tagline: "Smart water routing", desc: "Report leaks, shortages & surplus. AI recommends efficient water distribution across the city." },
  { key: "wearshare", name: "WearShare", path: "/wearshare", icon: "Shirt", color: "#8b5cf6",
    tagline: "Donate & reuse goods", desc: "Clothes, books, furniture & supplies. AI recognises items and matches them by urgency & distance." },
  { key: "techcycle", name: "TechCycle", path: "/techcycle", icon: "Laptop", color: "#f59e0b",
    tagline: "Redistribute electronics", desc: "Laptops, phones & tablets matched to students, schools & repair centres. E-waste tracked." },
  { key: "ecokids", name: "EcoKids Zone", path: "/ecokids", icon: "Sparkles", color: "#ec4899",
    tagline: "Learn & play", desc: "Sustainability games, quizzes, daily eco-challenges and class leaderboards for young changemakers." },
  { key: "campaigns", name: "Campaign Hub", path: "/campaigns", icon: "Megaphone", color: "#14b8a6",
    tagline: "Join the movement", desc: "Tree drives, cleanups & rescue initiatives. AI recommends campaigns by your interests & location." },
];

export const LIVE_STATS = {
  mealsRescued: 184320,
  litresWaterSaved: 2640000,
  itemsDonated: 52870,
  devicesReused: 3940,
  co2Prevented: 412,
  volunteers: 8650,
  campaigns: 142,
  peopleHelped: 96400,
};

export const PULSE_ZONES = [
  { id: 1, name: "Al Mina Fish Market", type: "food", status: "red", lat: 24.519, lng: 54.378, value: "320kg surplus", note: "Urgent — expires in 4h" },
  { id: 2, name: "Corniche West", type: "water", status: "yellow", lat: 24.476, lng: 54.327, value: "Leak reported", note: "Moderate flow loss" },
  { id: 3, name: "Khalifa City Shelter", type: "food", status: "green", lat: 24.419, lng: 54.578, value: "Demand met", note: "Resolved 2h ago" },
  { id: 4, name: "Mussafah Industrial", type: "recycling", status: "red", lat: 24.351, lng: 54.499, value: "E-waste pileup", note: "Collection needed" },
  { id: 5, name: "Yas Island Hotels", type: "food", status: "yellow", lat: 24.499, lng: 54.607, value: "85kg buffet surplus", note: "Pickup window open" },
  { id: 6, name: "Al Reem Community", type: "clothes", status: "yellow", lat: 24.498, lng: 54.404, value: "Donation drive", note: "Demand rising" },
  { id: 7, name: "Madinat Zayed", type: "books", status: "green", lat: 24.487, lng: 54.366, value: "Library stocked", note: "Resolved" },
  { id: 8, name: "Al Bateen Schools", type: "electronics", status: "red", lat: 24.452, lng: 54.330, value: "40 laptops needed", note: "High demand" },
  { id: 9, name: "Khalidiya Park", type: "water", status: "green", lat: 24.470, lng: 54.342, value: "Conserved 12k L", note: "Optimised" },
  { id: 10, name: "Saadiyat Beach", type: "recycling", status: "yellow", lat: 24.546, lng: 54.430, value: "Cleanup scheduled", note: "Volunteers needed" },
  { id: 11, name: "Al Wahda Mall", type: "clothes", status: "red", lat: 24.470, lng: 54.374, value: "Overflow donations", note: "Re-route needed" },
  { id: 12, name: "MBZ City Families", type: "food", status: "yellow", lat: 24.400, lng: 54.540, value: "12 families waiting", note: "Match pending" },
];

export const PULSE_FILTERS = [
  { key: "all", label: "All", color: "#334155" },
  { key: "food", label: "Food", color: "#16a34a" },
  { key: "water", label: "Water", color: "#0ea5e9" },
  { key: "clothes", label: "Clothes", color: "#8b5cf6" },
  { key: "books", label: "Books", color: "#f59e0b" },
  { key: "electronics", label: "Electronics", color: "#ef4444" },
  { key: "recycling", label: "Recycling", color: "#14b8a6" },
];

export const FOOD_LISTINGS = [
  { id: 1, title: "Fresh Bakery Surplus", donor: "Le Pain Quotidien — Marina", qty: "60 loaves & pastries", expiresInMin: 240, distanceKm: 2.4, matchedTo: "Emirates Red Crescent", status: "matched", type: "Bakery" },
  { id: 2, title: "Buffet Leftovers (sealed)", donor: "Yas Hotel", qty: "85 kg mixed", expiresInMin: 180, distanceKm: 6.1, matchedTo: null, status: "available", type: "Hotel" },
  { id: 3, title: "Organic Vegetables", donor: "Al Ain Farms", qty: "120 kg produce", expiresInMin: 1440, distanceKm: 14.0, matchedTo: "Tarahum Food Bank", status: "in_transit", type: "Farm" },
  { id: 4, title: "Dairy & Yoghurt", donor: "Spinneys — Khalidiya", qty: "200 units", expiresInMin: 90, distanceKm: 3.2, matchedTo: null, status: "available", type: "Supermarket" },
  { id: 5, title: "Cooked Rice & Curry", donor: "Household — Al Reem", qty: "15 portions", expiresInMin: 120, distanceKm: 1.1, matchedTo: "Family Network", status: "matched", type: "Household" },
];

export const WATER_REPORTS = [
  { id: 1, kind: "Leak", location: "Corniche West pipeline", severity: "high", reportedBy: "Citizen", ago: "12 min", rec: "Dispatch ADWEA crew — est. 4,000 L/hr loss" },
  { id: 2, kind: "Shortage", location: "Mussafah Block 12", severity: "high", reportedBy: "NGO", ago: "38 min", rec: "Route tanker from Khalidiya surplus reserve" },
  { id: 3, kind: "Surplus", location: "Khalidiya Park irrigation", severity: "low", reportedBy: "Municipality", ago: "1 h", rec: "Redirect 12,000 L to MBZ green corridor" },
  { id: 4, kind: "Leak", location: "Al Wahda basement", severity: "medium", reportedBy: "Business", ago: "2 h", rec: "Schedule inspection within 24h" },
];

export const DONATION_ITEMS = [
  { id: 1, name: "Winter Jackets (bundle)", category: "Clothes", condition: "Good", aiTag: "Outerwear · 92% match", urgency: "High", distanceKm: 3.4, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400" },
  { id: 2, name: "Children's Story Books", category: "Books", condition: "Like New", aiTag: "Education · 88% match", urgency: "Medium", distanceKm: 5.2, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400" },
  { id: 3, name: "Study Desk & Chair", category: "Furniture", condition: "Good", aiTag: "Furniture · 79% match", urgency: "Medium", distanceKm: 8.0, image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400" },
  { id: 4, name: "School Stationery Kits", category: "Supplies", condition: "New", aiTag: "Supplies · 95% match", urgency: "High", distanceKm: 1.9, image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400" },
];

export const DEVICES = [
  { id: 1, type: "Laptop", model: "Dell Latitude 5400 ×8", condition: "Refurbished", matchedTo: "Al Bateen School", status: "matched", co2: "210 kg saved" },
  { id: 2, type: "Smartphone", model: "iPhone SE ×15", condition: "Good", matchedTo: "Students Network", status: "in_transit", co2: "95 kg saved" },
  { id: 3, type: "Tablet", model: "Samsung Tab A ×6", condition: "Fair", matchedTo: null, status: "available", co2: "60 kg saved" },
  { id: 4, type: "Charger / Accessory", model: "Mixed lot ×40", condition: "Good", matchedTo: "Repair Hub Mussafah", status: "matched", co2: "18 kg saved" },
];

export const CAMPAIGNS = [
  { id: 1, title: "Mangrove Planting Drive", category: "Tree Planting", date: "Sat 12 Apr", location: "Jubail Mangrove Park", volunteers: 320, goal: 500, impact: "5,000 trees", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600", recommended: true },
  { id: 2, title: "Saadiyat Beach Cleanup", category: "Cleanup", date: "Fri 18 Apr", location: "Saadiyat Public Beach", volunteers: 180, goal: 250, impact: "2 tonnes waste", image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600", recommended: true },
  { id: 3, title: "Ramadan Food Rescue", category: "Food Rescue", date: "Ongoing", location: "City-wide", volunteers: 640, goal: 800, impact: "40,000 meals", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600", recommended: false },
  { id: 4, title: "Back-to-School Book Drive", category: "Donation", date: "Mon 21 Apr", location: "Madinat Zayed", volunteers: 95, goal: 150, impact: "8,000 books", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600", recommended: true },
  { id: 5, title: "Water Conservation Week", category: "Water", date: "Apr 24–30", location: "Schools & Communities", volunteers: 210, goal: 300, impact: "1M L saved", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600", recommended: false },
  { id: 6, title: "Winter Clothing Drive", category: "Donation", date: "Sun 27 Apr", location: "Al Wahda Mall", volunteers: 130, goal: 200, impact: "6,000 garments", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600", recommended: false },
];

export const IMPACT_TREND = [
  { month: "Nov", meals: 9200, water: 180, items: 3100 },
  { month: "Dec", meals: 12400, water: 220, items: 4200 },
  { month: "Jan", meals: 15800, water: 260, items: 5100 },
  { month: "Feb", meals: 19200, water: 310, items: 6400 },
  { month: "Mar", meals: 24600, water: 360, items: 7800 },
  { month: "Apr", meals: 31200, water: 420, items: 9200 },
];

export const RESOURCE_SPLIT = [
  { name: "Food", value: 42, color: "#16a34a" },
  { name: "Water", value: 23, color: "#0ea5e9" },
  { name: "Clothes", value: 16, color: "#8b5cf6" },
  { name: "Electronics", value: 11, color: "#f59e0b" },
  { name: "Books", value: 8, color: "#14b8a6" },
];

export const USER = {
  name: "Layla Al Mansoori",
  type: "Volunteer",
  city: "Abu Dhabi",
  score: 1840,
  level: "Eco Champion",
  rank: 12,
  rankOf: 8650,
  donated: 86,
  rescued: 142,
  co2Prevented: 1.9,
  waterConserved: 24800,
  progressToNext: 72,
};

export const BADGES = [
  { id: 1, name: "First Rescue", icon: "Award", earned: true, color: "#16a34a" },
  { id: 2, name: "100 Meals", icon: "Apple", earned: true, color: "#f59e0b" },
  { id: 3, name: "Water Guardian", icon: "Droplets", earned: true, color: "#0ea5e9" },
  { id: 4, name: "Tree Planter", icon: "TreePine", earned: true, color: "#14b8a6" },
  { id: 5, name: "Tech Reuser", icon: "Laptop", earned: false, color: "#8b5cf6" },
  { id: 6, name: "Streak 30", icon: "Flame", earned: false, color: "#ef4444" },
];

export const ACTIVITY = [
  { id: 1, text: "Matched 60 loaves to Emirates Red Crescent", time: "2h ago", icon: "Apple", color: "#16a34a" },
  { id: 2, text: "Reported a leak at Corniche West", time: "Yesterday", icon: "Droplets", color: "#0ea5e9" },
  { id: 3, text: "Joined Mangrove Planting Drive", time: "2 days ago", icon: "TreePine", color: "#14b8a6" },
  { id: 4, text: "Donated 3 winter jackets", time: "4 days ago", icon: "Shirt", color: "#8b5cf6" },
];

export const LEADERBOARD = [
  { rank: 1, name: "Green Falcons — Cycle 6B", points: 4820, kind: "Class" },
  { rank: 2, name: "Eco Warriors — Cycle 5A", points: 4410, kind: "Class" },
  { rank: 3, name: "Desert Bloom — Cycle 6A", points: 3990, kind: "Class" },
  { rank: 4, name: "Solar Squad — Cycle 4B", points: 3560, kind: "Class" },
  { rank: 5, name: "Wave Makers — Cycle 5C", points: 3120, kind: "Class" },
];

export const ECO_CHALLENGES = [
  { id: 1, title: "Turn off the tap while brushing", points: 20, icon: "Droplets", done: true },
  { id: 2, title: "Bring a reusable bottle today", points: 25, icon: "Recycle", done: true },
  { id: 3, title: "Sort your recycling at home", points: 30, icon: "Trash2", done: false },
  { id: 4, title: "Plant a seed or care for a plant", points: 40, icon: "Sprout", done: false },
];

export const QUIZ = [
  { q: "How long does plastic take to break down?", options: ["1 year", "20 years", "Up to 500 years"], answer: 2 },
  { q: "Which saves the most water at home?", options: ["Shorter showers", "Leaving tap running", "Washing one plate at a time"], answer: 0 },
  { q: "What can we do with food scraps?", options: ["Throw them away", "Compost them", "Burn them"], answer: 1 },
];

export const TESTIMONIALS = [
  { name: "Emirates Red Crescent", role: "NGO Partner", quote: "Catalyst cut our food-rescue response time by 60%. The AI matching is a game changer.", logo: "ERC" },
  { name: "Yas Hotels Group", role: "Hospitality Partner", quote: "We've redirected tonnes of buffet surplus to families instead of landfill.", logo: "YH" },
  { name: "Abu Dhabi Municipality", role: "Government", quote: "The Pulse heatmap gives us a real-time view of the whole emirate's resource flow.", logo: "ADM" },
];

export const PARTNERS = ["Emirates Red Crescent", "Abu Dhabi Municipality", "ADNOC", "Masdar", "Spinneys", "Yas Hotels", "Al Ain Farms", "Tarahum"];

export const statusColor = { red: "#ef4444", yellow: "#f59e0b", green: "#22c55e" };