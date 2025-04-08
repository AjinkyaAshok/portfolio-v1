import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Image from "../images/dashdine-banne.png";
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Tackled delivery delays at building entrances by designing a Delivery Access Management prototype aimed at streamlining check-ins for food delivery agents across residential and commercial complexes.",
      name: "Check-Inn Optimization for Delivery Apps",
      link: "https://www.figma.com/community/file/1473705913486771548",
      designation: "Case Study",
      src: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/40ab4a62bf8e37e8df9d8fb26b2f9d112098ffcb/d13d493611ea393573e7f3d7fc37f9ba8a8fbe1a",
    },
    {
      quote:
        "Designed and developed end-to-end platform using Figma, React.js, Redux. Improved UX via enhanced filtering and streamlined order flows.",
      name: "Dash Dine",
      link: "dashdine.netlify.app",
      designation: "Food Delivery Web App",
      src: Image,
    },
    // {
    //   quote:
    //     "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //   name: "Emily Watson",
    //   link: "www.google.com",
    //   designation: "Operations Director at CloudScale",
    //   src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    {
      quote:
        "Created “Tindog,” a playful concept inspired by Tinder for dogs, to demonstrate creative UI design and user flow skills in a fun, engaging format. ",
      name: "Tindog",
      link: "https://www.figma.com/community/file/1491455039743664381",
      designation: "Concept Prototyping",
      src: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/a7feea485ae7fc505784030fe5e5c1928855940a/e3f15078d8486e3358b151ad2a7cb8e866ee456e",
    },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   link: "www.google.com",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
