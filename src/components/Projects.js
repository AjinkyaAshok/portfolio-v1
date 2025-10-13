import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Image from "../images/dashdine_app_banner.png";
export function AnimatedProjectsScroll({projectsRef}) {
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
      link: "https://dashdine.netlify.app",
      designation: "Food Delivery Web App",
      src: Image,
    },
  
    {
      quote:
        "Created “Tindog,” a playful concept inspired by Tinder for dogs, to demonstrate creative UI design and user flow skills in a fun, engaging format. ",
      name: "Tindog",
      link: "https://www.figma.com/community/file/1491455039743664381",
      designation: "Concept Prototyping",
      src: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/a7feea485ae7fc505784030fe5e5c1928855940a/e3f15078d8486e3358b151ad2a7cb8e866ee456e",
    },
  
  ];
  return <AnimatedTestimonials ref={projectsRef} testimonials={testimonials} />;
}
