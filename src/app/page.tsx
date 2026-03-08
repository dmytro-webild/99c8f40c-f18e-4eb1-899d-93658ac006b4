"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterCard from "@/components/sections/footer/FooterCard";
import {
  Flame,
  UtensilsCrossed,
  Home,
  MapPin,
  Phone,
  BookOpen,
  Star,
  ChefHat,
  Heart,
  CheckCircle,
  Calendar,
  Facebook,
  Instagram,
  Award,
  ThumbsUp,
  Moon,
} from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Des Pardes"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reserve", id: "contact" },
            { name: "Reviews", id: "testimonials" },
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          tag="Authentic Heritage Dining"
          tagIcon={Flame}
          tagAnimation="slide-up"
          title="Authentic Pakistani Heritage Dining Experience"
          description="Discover traditional flavors and cultural warmth in the heart of historic Saidpur Village. Experience generations of hospitality through our signature Karahi, Biryani, and BBQ specialties"
          buttons={[
            { text: "Reserve Your Table Now", href: "contact" },
            { text: "Browse Menu", href: "menu" },
          ]}
          background={{ variant: "radial-gradient" }}
          dashboard={{
            title: "Des Pardes Experience",            logoIcon: UtensilsCrossed,
            imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081875.jpg",            buttons: [
              { text: "Dine In", href: "#" },
              { text: "Order Online", href: "#" },
            ],
            sidebarItems: [
              { icon: Home },
              { icon: MapPin, active: true },
              { icon: Phone },
            ],
            stats: [
              {
                title: "Years of Tradition",                values: [15, 20, 25],
                description: "Heritage perfected."},
              {
                title: "Happy Families",                values: [1200, 1500, 1800],
                description: "Served monthly."},
              {
                title: "Signature Dishes",                values: [12, 15, 18],
                description: "Authentic recipes."},
            ],
            chartTitle: "Monthly Reservations",            chartData: [
              { value: 45 },
              { value: 60 },
              { value: 75 },
              { value: 55 },
              { value: 90 },
            ],
            listTitle: "Today's Specials",            listItems: [
              {
                icon: Flame,
                title: "Nihari - Slow-cooked & Spiced",                status: "Available"},
              {
                icon: UtensilsCrossed,
                title: "Seekh Kabab - Chargrilled Fresh",                status: "Hot"},
              {
                icon: ChefHat,
                title: "Biryani - Premium Rice Dish",                status: "Popular"},
            ],
          }}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          tagIcon={BookOpen}
          tagAnimation="slide-up"
          title="Celebrating Generations of Authentic Pakistani Hospitality in Saidpur Village"
          buttons={[
            { text: "Book a Table", href: "contact" },
            { text: "Learn More", href: "#" },
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          tag="What We Offer"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="Dining Experience Tailored to Your Needs"
          description="From intimate family gatherings to corporate events, Des Pardes offers multiple ways to enjoy authentic Pakistani cuisine"
          features={[
            {
              id: "dine-in",              label: "Dine In",              title: "Experience Heritage Ambiance",              items: [
                "Intimate village setting",                "Live cultural entertainment",                "Family-friendly atmosphere",                "Authentic décor & heritage"],
              buttons: [{ text: "Reserve Now", href: "contact" }],
            },
            {
              id: "takeout",              label: "Pickup",              title: "Authentic Cuisine at Home",              items: [
                "Fresh preparation",                "Quick pickup service",                "Bulk orders welcome",                "Special packaging"],
              buttons: [{ text: "Order Online", href: "#" }],
            },
            {
              id: "delivery",              label: "Delivery",              title: "Bring Des Pardes to Your Door",              items: [
                "Hot meal guarantee",                "Islamabad delivery",                "Flexible timing",                "Premium service"],
              buttons: [{ text: "Order Now", href: "#" }],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          tag="Menu Favorites"
          tagIcon={ChefHat}
          tagAnimation="slide-up"
          title="Signature Dishes That Define Des Pardes"
          description="Explore our most celebrated traditional Pakistani specialties, each prepared with generations of expertise"
          products={[
            {
              id: "1",              brand: "Des Pardes",              name: "Karahi Gosht",              price: "₨650",              rating: 5,
              reviewCount: "342",              imageSrc: "http://img.b2bpic.net/free-photo/nuddles-miso-soup-table_140725-6750.jpg",              imageAlt: "Pakistani karahi gosht meat dish traditional"},
            {
              id: "2",              brand: "Des Pardes",              name: "Biryani Hyderabadi",              price: "₨550",              rating: 5,
              reviewCount: "289",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-cooked-rice-with-dough-slices-dark-surface-dish-dark-meal-food-photo_140725-81863.jpg",              imageAlt: "Hyderabadi biryani rice dish authentic"},
            {
              id: "3",              brand: "Des Pardes",              name: "Nihari Royal",              price: "₨480",              rating: 5,
              reviewCount: "156",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-meat-soup-with-different-seasonings_140725-133967.jpg",              imageAlt: "Pakistani nihari slow-cooked meat traditional"},
            {
              id: "4",              brand: "Des Pardes",              name: "Seekh Kabab Platter",              price: "₨420",              rating: 5,
              reviewCount: "198",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-assortment-tasty-kebabs-with-tomatoes-vegetables_23-2148685492.jpg",              imageAlt: "seekh kabab grilled meat skewers Pakistani"},
          ]}
          animationType="slide-up"
          gridVariant="bento-grid"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          tag="Guest Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="What Our Guests Say"
          description="Real experiences from families and professionals who've discovered authentic Pakistani hospitality at Des Pardes"
          testimonials={[
            {
              id: "1",              name: "Fatima Khan",              role: "Family Gatherings",              testimonial:
                "The ambiance at Des Pardes transported us back to our heritage. The Karahi was absolutely authentic, and the hospitality was exceptional. Perfect for family occasions!",              imageSrc: "http://img.b2bpic.net/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg",              imageAlt: "Pakistani woman portrait professional headshot",              icon: Heart,
            },
            {
              id: "2",              name: "Ahmed Hassan",              role: "Corporate Events",              testimonial:
                "We hosted our company retreat here. The traditional Biryani and BBQ spread impressed everyone. The team went above and beyond to accommodate our group.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-man-shirt-mockup_23-2149260883.jpg",              imageAlt: "Pakistani man portrait professional headshot",              icon: ThumbsUp,
            },
            {
              id: "3",              name: "Zara Malik",              role: "Tourist",              testimonial:
                "As a visitor to Islamabad, Des Pardes was the highlight. The blend of authentic cuisine and heritage village setting was unforgettable. Highly recommended!",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-straw-hat-countryside_285396-1386.jpg",              imageAlt: "woman tourist portrait travel authentic",              icon: Star,
            },
            {
              id: "4",              name: "Usman Ahmed",              role: "Regular Customer",              testimonial:
                "I visit Des Pardes every month. Their consistency in quality, warmth in service, and commitment to tradition are unmatched. It's home away from home.",              imageSrc: "http://img.b2bpic.net/free-photo/young-man-talking-phone-while-sitting-couch_23-2148306611.jpg",              imageAlt: "man customer portrait regular authentic",              icon: Award,
            },
            {
              id: "5",              name: "Leila Samir",              role: "Food Enthusiast",              testimonial:
                "The Nihari here is perfection. You can taste the decades of family recipes. Every dish tells a story of authentic Pakistani culinary heritage.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-cranberries_23-2149172471.jpg",              imageAlt: "food enthusiast woman portrait authentic",              icon: Flame,
            },
            {
              id: "6",              name: "Raza Khan",              role: "Event Planner",              testimonial:
                "For Ramadan buffets and special occasions, Des Pardes is our go-to venue. Their buffet spread is impressive, and the heritage setting adds cultural richness to any event.",              imageSrc: "http://img.b2bpic.net/free-photo/working-man_1098-18366.jpg",              imageAlt: "event planner man portrait professional",              icon: Moon,
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          tag="Trusted By"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          title="Featured & Recognized"
          description="Des Pardes has been celebrated by food critics, travel guides, and cultural heritage organizations across Islamabad"
          names={[
            "IslamabadFoodie Magazine",            "Heritage Saidpur Foundation",            "Pakistani Culinary Council",            "Tourism Board Islamabad",            "Top 10 Restaurants Islamabad",            "Cultural Heritage Network",            "Foodie Community Awards",            "Local Business Excellence"]}
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Connected"
          tagIcon={Calendar}
          tagAnimation="slide-up"
          title="Reserve Your Table & Stay Updated"
          description="Join our community of food enthusiasts and heritage seekers. Reserve your table now or subscribe for special offers, event updates, and Ramadan specials."
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="Your email address"
          buttonText="Reserve & Subscribe"
          termsText="We respect your privacy and will only send you updates about special events, Ramadan offerings, and exclusive dining experiences at Des Pardes."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Des Pardes"
          copyrightText="© 2025 Des Pardes. Authentic Pakistani Heritage Dining. All rights reserved."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/despardes",              ariaLabel: "Visit our Facebook"},
            {
              icon: Instagram,
              href: "https://instagram.com/despardes",              ariaLabel: "Follow us on Instagram"},
            {
              icon: Phone,
              href: "tel:+92-51-XXXX-XXXX",              ariaLabel: "Call Des Pardes"},
            {
              icon: MapPin,
              href: "https://maps.google.com/?q=Des+Pardes+Saidpur+Village",              ariaLabel: "Find us on Google Maps"},
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
