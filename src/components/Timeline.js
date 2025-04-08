import { useRef, useEffect } from "react";
export default function InfiniteScrollCards() {
  const scrollRef = useRef(null);

  const Data = [
    { image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/40ab4a62bf8e37e8df9d8fb26b2f9d112098ffcb/d13d493611ea393573e7f3d7fc37f9ba8a8fbe1a", title: "Card 1", description: "Description 1" },
    { image: "img2.jpg", title: "Card 2", description: "Description 2Description 2Description 2Description 2Description 2Description 2Description 2Description 2" },
    { image: "img3.jpg", title: "Card 3", description: "Description 3" },
    { image: "img4.jpg", title: "Card 4", description: "Description 4" },
   
    // Add more cards as needed
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Start from middle
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;

    const handleScroll = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;

      if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollWidth / 2;
      } else if (scrollLeft + containerWidth >= scrollWidth) {
        scrollContainer.scrollLeft = scrollWidth / 2 - containerWidth;
      }
    };

    const autoScroll = () => {
      scrollContainer.scrollLeft += 1;
    };

    const scrollInterval = setInterval(autoScroll, 20); // Controls speed
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="p-10 flex gap-x-10 overflow-x-scroll no-scrollbar"
      ref={scrollRef}
    >
      {[...Data, ...Data].map((card, index) => (
        <div
          key={index}
          className="min-w-[250px] bg- bg-opacity-20 border flex flex-col items-center border-white/20 backdrop-blur-md w-60 h-80 rounded-lg shadow-lg p-4 transform transition-all hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={card.image}
            className="w-max h-40 rounded-lg mx-auto mb-4 object-contain"
            alt="Case Study"
          />
          <h1 className="text-white text-xl font-semibold mb-2">
            {card.title}
          </h1>
          <p className="text-white text-sm mb-4">{card.description}</p>
          <button
            type="button"
            className="bg-black px-4 py-2 w-max text-white rounded-lg transition-all hover:bg-gray-700 hover:scale-105"
          >
            See More
          </button>
        </div>
      ))}
    </div>
  );
}
