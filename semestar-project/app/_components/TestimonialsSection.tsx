// Import necessary components and styles
import React from 'react';
import Button from "@/components/Button";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";
import Badges from "@/components/Badge";

// Sample testimonial images
import testimonial1 from "@/public/testimonials/zdarva.jpg";
import testimonial2 from "@/public/testimonials/burgir.jpg";
import testimonial3 from "@/public/testimonials/fancy.jpg";

// Define testimonial data
const testimonials: TestimonialCardProps[] = [
  {
    image: testimonial1,
    title: "Something Healthy",
    body: "Experience the future of healthy eating with our delicious, nutrient-packed food. It's the perfect blend of taste and wellness, making every bite a guilt-free delight",
    badge: <Badges.design />,
  },
  {
    image: testimonial2,
    title: "Something for cheat days",
    body: "Indulge in pure delight with our irresistible cheat foods. These guilty pleasures are a ticket to flavor heaven, where cravings meet comfort, and every bite is a celebration.",
    badge: <Badges.digital />,
  },
  {
    image: testimonial3,
    title: "Something Exquisite",
    body: "Savor the artistry of exquisite foods. Each dish is a masterpiece of flavor, crafted with the finest ingredients and culinary expertise, ensuring every bite is a sublime experience.",
    badge: <Badges.branding />,
  },
];

const TestimonialsSection = () => (
  <section className="container flex flex-col gap-10 items-center">     

    <Button
      orange
      className="mb-10 text-base xl:text-lg xl:px-8"
      iconClassName="xl:w-4 xl:h-4"
    >
      Discover
    </Button>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.title} {...testimonial} />
      ))}
    </div>

  </section>
);

export default TestimonialsSection;
