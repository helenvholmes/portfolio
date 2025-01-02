// import { motion, useMotionValue, Transition } from "framer-motion";

// const HoverCard = ({ i }: { i: number }) => {
//   const [isMaximized, setisMaximized] = useState<boolean>(false);
//   const [isHovered, setHovered] = useState(false);
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const transform = useMotionValue("rotateX(0deg)");
//   const angle = 40;

//   const message = ["1", "2", "3", "4", "5", "6", "!", ""];

//   const handleClick = () => {
//     setisMaximized(!isMaximized);
//   };

//   const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
//     // Get mouse coordinates relative to the page
//     const x = e.pageX;
//     const y = e.pageY;

//     // Get the element's position and dimensions
//     if (cardRef.current) {
//       const rect = cardRef.current.getBoundingClientRect();
//       const cardCenterX = rect.left + rect.width / 2;
//       const cardCenterY = rect.top + rect.height / 2;

//       // Calculate mouse coordinates relative to the center of the card
//       const relativeX = Math.round(x - cardCenterX);
//       const relativeY = Math.round(y - cardCenterY);
//       // Update state
//       setMouseX(relativeX);
//       setMouseY(relativeY);
//     }
//   };

//   //rotation
//   useEffect(() => {
//     if (cardRef.current) {
//       const rect = cardRef.current.getBoundingClientRect();
//       const width = rect.width;
//       const height = rect.height;
//       const degX = width / angle;
//       const degY = height / angle;
//       const rx = -(mouseY / degY);
//       const ry = mouseX / degX;
//       var newTransform =
//         "perspective(1000px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
//       transform.set(newTransform);
//     }
//   }, [mouseX, mouseY]);

//   return (
//     <>
//       {/** Outer container div, constricts inner child motion div **/}
//       <div ref={cardRef} className={`aspect-[16/9] rounded-[8px]`}>
//         {/** Main motion div, grows and shrinks on hover, on click grows to full screen **/}
//         <motion.div
//           onMouseMove={handleMouseMove}
//           layout={true}
//           transition={trans}
//           // whileHover={}
//           style={{ transform }}
//           animate={{}}
//           className={`h-full bg-black p-4`}
//           onClick={() => handleClick()}
//         >
//           {/** Inner Content, shifts position with same transition speed **/}
//           <motion.div
//             transition={trans}
//             layout="position"
//             className="text-white"
//           >
//             {message[i]}
//           </motion.div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// const trans: Transition = {
//   duration: 0.8,
// };

// export default HoverCard;

// // <motion.div
// //         onMouseMove={handleMouseMove}
// //         layout={true}
// //         transition={trans}
// //         onMouseLeave={handleMouseLeave}
// //         initial={{
// //           rotateX: 0,
// //           rotateY: 0,
// //           transformPerspective: 1000
// //          }}
// //         animate={{
// //           rotateX: rx,
// //           rotateY: ry,
// //           transformPerspective: 1000
// //         }}
// //         className={`bg-black  h-full p-4`}
// //         onClick={() => handleClick()}
// //       ></motion.div>

// // https://hawaiinational.bank/business-cards/
