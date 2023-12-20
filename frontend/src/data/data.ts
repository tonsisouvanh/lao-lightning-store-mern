import { BlogType, CardType, QuestionData, TestimonialType } from "../type";
import { food, restaurant1, restaurant2 } from "../assets/images";
import bitcoinundraw from "../assets/svg/bitcoinundraw.svg";
export const themes = ["light", "dark"];
// MenuData.ts

export interface MenuItem {
  label: string;
  path: string;
}

export const menuItems: MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Payment", path: "/payment" },
  { label: "Stores", path: "/stores" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog/News", path: "/blog/bloglist" },
];

export const mockFoodData: CardType[] = [
  {
    id: 1,
    imageUrl: food,
    title: "",
    description: "",
  },
  {
    id: 2,
    imageUrl: food,
    title: "",
    description: "",
  },
  {
    id: 3,
    imageUrl: food,
    title: "",
    description: "",
  },
  {
    id: 4,
    imageUrl: food,
    title: "",
    description: "",
  },
  {
    id: 5,
    imageUrl: food,
    title: "",
    description: "",
  },
  {
    id: 6,
    imageUrl: food,
    title: "",
    description: "",
  },
];
export const mockRestaurantData: CardType[] = [
  {
    id: 1,
    imageUrl: restaurant1,
    title: "",
    description: "",
  },
  {
    id: 2,
    imageUrl: restaurant2,
    title: "",
    description: "",
  },
  {
    id: 3,
    imageUrl: restaurant1,
    title: "",
    description: "",
  },
  {
    id: 4,
    imageUrl: restaurant2,
    title: "",
    description: "",
  },
  {
    id: 5,
    imageUrl: restaurant1,
    title: "",
    description: "",
  },
  {
    id: 6,
    imageUrl: restaurant2,
    title: "",
    description: "",
  },
];

export const mockQuestions: QuestionData[] = [
  {
    title: "How does Bitcoin work?",
    description:
      "Bitcoin is a decentralized digital currency that allows for secure and instant transactions. It operates on a technology called blockchain, which ensures transparency and eliminates the need for intermediaries like banks.",
  },
  {
    title: "How can I buy Bitcoin?",
    description:
      "There are several ways to buy Bitcoin, including through cryptocurrency exchanges, peer-to-peer platforms, and Bitcoin ATMs. You can also receive Bitcoin as payment for goods and services.",
  },
  {
    title: "Is Bitcoin safe to use?",
    description:
      "Bitcoin transactions are secured using cryptographic technology, making them highly secure. However, it's important to take precautions such as using a secure wallet and keeping your private keys safe.",
  },
  {
    title: "Can I use Bitcoin for online shopping?",
    description:
      "Yes, many online stores accept Bitcoin as a form of payment. Look for the Bitcoin logo or check the store's payment options to see if they accept Bitcoin.",
  },
  {
    title: "What are the advantages of using Bitcoin?",
    description:
      "Using Bitcoin offers several advantages, including lower transaction fees, faster international transfers, and increased privacy compared to traditional payment methods.",
  },
];

export const mockTestimonialsData: TestimonialType[] = [
  {
    id: 1,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Alice Johnson",
    quote:
      "“Using Lightning Wallet has made my transactions faster and more secure. It's a game-changer!”",
    // createdBy: 'Alice',
  },
  {
    id: 2,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Bob Smith",
    quote:
      "“I love how easy it is to make payments with Lightning Wallet. It’s convenient and efficient!”",
    // createdBy: 'Bob',
  },
  {
    id: 3,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Charlie Davis",
    quote:
      "“Lightning Wallet has simplified my crypto transactions. The speed and security are unmatched.”",
    // createdBy: 'Charlie',
  },
  {
    id: 4,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "David Brown",
    quote:
      "“I’ve had a great experience with Lightning Wallet. It’s reliable and user-friendly.”",
    // createdBy: 'David',
  },
  {
    id: 5,
    avatarUrl: "https://via.placeholder.com/32x32",
    name: "Emma Smith",
    quote:
      "“As a frequent crypto user, Lightning Wallet has become my go-to for quick and secure transactions.”",
    // createdBy: 'Emma',
  },
];

export const mockBlogsData: BlogType[] = [
  {
    id: 1,
    imageUrl: bitcoinundraw,
    category: "Payments",
    title: "The Future of Bitcoin Payments",
    description:
      "Experience the future of Bitcoin payments with Lightning Wallet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    authorName: "John Doe",
    authorTitle: "CEO, ABC Company",
  },
  {
    id: 2,
    imageUrl: bitcoinundraw,
    category: "Security",
    title: "Enhanced Security Features",
    description:
      "Security is our top priority. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
    authorName: "Jane Smith",
    authorTitle: "CTO, XYZ Tech",
  },
  {
    id: 3,
    imageUrl: restaurant1,
    category: "User-Friendly",
    title: "Intuitive and User-Friendly Design",
    description:
      "Our user-friendly design ensures a seamless experience for both beginners and advanced users. Duis aute irure dolor in reprehenderit.",
    authorName: "Alex Johnson",
    authorTitle: "Product Manager, LMN Corp",
  },
  {
    id: 4,
    imageUrl: restaurant2,
    category: "Convenience",
    title: "Convenient and Efficient Transactions",
    description:
      "Make transactions with ease and efficiency. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    authorName: "Emily Brown",
    authorTitle: "COO, PQR Services",
  },
  {
    id: 5,
    imageUrl: food,
    category: "Innovation",
    title: "Innovative Solutions for Crypto Enthusiasts",
    description:
      "Stay ahead with our innovative solutions tailored for crypto enthusiasts. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    authorName: "Chris Davis",
    authorTitle: "Founder, Crypto Innovations",
  },
];

export const foodData = [
  {
    _id: {
      $oid: "657d6f3add43646167fd2d78",
    },
    name: "Laotian Spicy Noodles",
    category: "Noodles",
    image: [
      "https://example.com/spicy-noodles1.jpg",
      "https://example.com/spicy-noodles2.jpg",
    ],
    restaurants: [
      {
        $oid: "657d6e779b6d94067d32e092",
      },
      {
        $oid: "657d6e779b6d94067d32e093",
      },
    ],
    __v: 0,
    createdAt: {
      $date: "2023-12-16T09:34:50.093Z",
    },
    updatedAt: {
      $date: "2023-12-16T09:34:50.093Z",
    },
  },
  {
    _id: {
      $oid: "657d6f3add43646167fd2d79",
    },
    name: "Grilled Mekong River Fish",
    category: "Seafood",
    image: [
      "https://example.com/river-fish1.jpg",
      "https://example.com/river-fish2.jpg",
    ],
    restaurants: [
      {
        $oid: "657d6e779b6d94067d32e093",
      },
      {
        $oid: "657d6e779b6d94067d32e094",
      },
    ],
    __v: 0,
    createdAt: {
      $date: "2023-12-16T09:34:50.094Z",
    },
    updatedAt: {
      $date: "2023-12-16T09:34:50.094Z",
    },
  },
  {
    _id: {
      $oid: "657d6f3add43646167fd2d7a",
    },
    name: "Golden Pagoda Spring Rolls",
    category: "Appetizers",
    image: [
      "https://example.com/spring-rolls1.jpg",
      "https://example.com/spring-rolls2.jpg",
    ],
    restaurants: [
      {
        $oid: "657d6e779b6d94067d32e094",
      },
      {
        $oid: "657d6e779b6d94067d32e095",
      },
    ],
    __v: 0,
    createdAt: {
      $date: "2023-12-16T09:34:50.095Z",
    },
    updatedAt: {
      $date: "2023-12-16T09:34:50.095Z",
    },
  },
  {
    _id: {
      $oid: "657d6f3add43646167fd2d7b",
    },
    name: "Luang Flavors Sticky Rice",
    category: "Desserts",
    image: [
      "https://example.com/sticky-rice1.jpg",
      "https://example.com/sticky-rice2.jpg",
    ],
    restaurants: [
      {
        $oid: "657d6e779b6d94067d32e095",
      },
      {
        $oid: "657d6e779b6d94067d32e096",
      },
    ],
    __v: 0,
    createdAt: {
      $date: "2023-12-16T09:34:50.095Z",
    },
    updatedAt: {
      $date: "2023-12-16T09:34:50.095Z",
    },
  },
  {
    _id: {
      $oid: "657d6f3add43646167fd2d7c",
    },
    name: "Riverside Noodle Soup",
    category: "Soup",
    image: [
      "https://example.com/noodle-soup1.jpg",
      "https://example.com/noodle-soup2.jpg",
    ],
    restaurants: [
      {
        $oid: "657d6e779b6d94067d32e096",
      },
      {
        $oid: "657d6e779b6d94067d32e092",
      },
    ],
    __v: 0,
    createdAt: {
      $date: "2023-12-16T09:34:50.095Z",
    },
    updatedAt: {
      $date: "2023-12-16T09:34:50.095Z",
    },
  },
];
