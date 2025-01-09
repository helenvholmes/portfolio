import React, { useEffect, useRef, useState } from "react";
import { motion, Transition, useMotionValue } from "framer-motion";

const trans: Transition = {
  duration: 0.8,
};

const HoverCard = ({ i }: { i: number }) => {
  const [isMaximized, setisMaximized] = useState<boolean>(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const transform = useMotionValue("rotateX(0deg)");
  const angle = 40;

  const message = ["1", "2", "3", "4", "5", "6", "!", ""];

  const handleClick = () => {
    setisMaximized(!isMaximized);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Get mouse coordinates relative to the page
    const x = e.pageX;
    const y = e.pageY;

    // Get the element's position and dimensions
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Calculate mouse coordinates relative to the center of the card
      const relativeX = Math.round(x - cardCenterX);
      const relativeY = Math.round(y - cardCenterY);
      // Update state
      setMouseX(relativeX);
      setMouseY(relativeY);
    }
  };

  // Rotation
  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const degX = width / angle;
      const degY = height / angle;
      const rx = -(mouseY / degY);
      const ry = mouseX / degX;
      var newTransform =
        "perspective(1000px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
      transform.set(newTransform);
    }
  }, [mouseX, mouseY, transform]);

  return (
    <>
      {/** Outer container div, constricts inner child motion div **/}
      <div ref={cardRef} className="aspect-video rounded-lg">
        {/** Main motion div, grows and shrinks on hover, on click grows to full screen **/}
        <motion.div
          onMouseMove={handleMouseMove}
          layout={true}
          transition={trans}
          style={{ transform }}
          animate={{}}
          className="h-full bg-surface p-4"
          onClick={() => handleClick()}
        >
          {/** Inner Content, shifts position with same transition speed **/}
          <motion.div
            className="text-white"
            layout="position"
            transition={trans}
          >
            {message[i]}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HoverCard;
