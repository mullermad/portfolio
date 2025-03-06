import template from "../assets/template.webp";
import equb from "../assets/equbsystem.png";
import nu_restaurant from "../assets/nu_restaurant.png";
import restaurant_management from "../assets/ImageNu2.png";

import internMentorship from "../assets/internmentorship.png";
import cinema from "../assets/cinema.png";

export const Projects = [
  {
    id: 1,
    title: "mentorship",
    photo: internMentorship,
    description:
      "A mentorship system is a structured platform designed to facilitate the relationship between mentors and mentees. It connects individuals seeking guidance (mentees) with experienced professionals or advisors (mentors) to help mentees achieve their personal or professional goals. Here’s a detailed description of such a system.",

    link: "https://mentorship-sooty.vercel.app/",
  },
  {
    id: 2,
    title: "Digital Equb System",
    photo: equb,
    description:
      "A Digital Equb System is an innovative platform that digitizes the traditional Ethiopian practice of Equb, a community-based savings and lending system. It brings the concept into the digital era, enabling users to participate in savings groups more efficiently, securely, and transparently through technology",
    link: "https://github.com/mullermad",
  },

  {
    id: 3,
    photo: nu_restaurant,
    title: "Nu Restaurant Website",
    description:
      "Nu Restaurant is a premier dining destination in Gondar, Ethiopia, offering a fusion of traditional and contemporary Ethiopian cuisine. The website provides an elegant platform for customers to explore the menu, make reservations, and learn about special events. Visitors can browse delicious dishes, check restaurant hours, and experience the unique ambiance of Nu Restaurant through rich visuals and engaging content.",
    link: "https://nurestaurant.vercel.app/",
  },
  {
    id: 4,
    photo: restaurant_management,
    title: "Restaurant Management System",
    description: `"A comprehensive Restaurant Management System designed to streamline restaurant operations, including order management, reservations, staff coordination, and inventory tracking. The system enhances efficiency with key features such as:  
      
     Waiter Ordering System**: Allows waiters to take customer orders digitally, reducing errors and ensuring faster service. Orders are instantly sent to the kitchen display system for processing.  
      - **Kitchen Display System (KDS)**: Displays real-time orders in the kitchen, helping chefs manage preparation efficiently. It eliminates the need for paper tickets and improves workflow.  
      - **Inventory Management System**: Tracks ingredient usage, monitors stock levels, and provides alerts for low-stock items. Helps restaurants reduce waste and optimize supply chain management.  
      
      With an intuitive interface, the system simplifies restaurant workflow, ensuring smooth operations and improved service quality."`,
    link: "https://nu-cafe-and-restaurant.vercel.app/",
  },

  {
    id: 5,
    photo: cinema,
    title: "Cinema Ticket Booking App",
    description:
      "A Cinema App is a digital platform that provides users with a seamless way to browse movies, check cinema schedules, book tickets, and engage with cinematic content. It is mainly used for booking tickets, watching movie trailers, and exploring various movie-related features. Users can view details about upcoming and currently showing movies, read synopses, check ratings and reviews, and even filter movies based on genres, directors, or actors.",
    link: "https://cinema-app-liart.vercel.app/",
  },
];
