import Benefit from "../components/layout/Benefit";
import Blog from "../components/layout/Blogs";
import Contact from "../components/layout/Contact";
import Discover from "../components/layout/Discover";
import DiscoverPlace from "../components/layout/DiscoverPlace";
import Faq from "../components/layout/FAQ";
import Hero from "../components/layout/Hero";
import HowItWorks from "../components/layout/HowItWorks";
import LightningWalletSignup from "../components/layout/LightningWalletSignup";
import Testimonials from "../components/layout/Testimonials";
import { mockFoodData, mockRestaurantData } from "../data/data";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefit />
      <DiscoverPlace />
      <Discover
        headline="Discover Laos Food"
        subline="Discover LAOS through a culinary journey of timeless classics and contemporary creations, showcasing our nation's authentic tastes."
        slidesData={mockFoodData}
        slidesPerView={1}
      />
      <Discover
        headline="Discover Top Restaurants in Laos"
        subline="Indulge in extraordinary tastes and exquisite dining with our carefully curated selection of top restaurants."
        slidesData={mockRestaurantData}
        slidesPerView={1}
      />
      <Discover
        topic="store"
        headline="Discover Stores That Accept Bitcoin Payments"
        subline="Find a wide range of stores that accept Bitcoin payments through our lightning-fast platform. Pay with ease and security using the power of cryptocurrency."
        slidesData={mockRestaurantData}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        cardSize={"lg:h-[34rem]"}
        // cardInfoBox={
        //   "absolute left-0 bottom-10 lg:top-1/3 lg:left-20 p-10 rounded-xl flex flex-col items-start gap-6 px-6 bg-white backdrop-blur-sm bg-white/50"
        // }
      />
      <LightningWalletSignup />
      <Faq />
      <Testimonials
        headline="Customer Tesitmonials"
        subline="Hear from stores that successfully implemented Bitcoin payments."
      />
      <Contact />
      <Blog
        headline="Exploring All The Blogs Content"
        subline="Stay updated with the latest news and trends."
      />
    </>
  );
};

export default HomePage;
