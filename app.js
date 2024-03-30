// function init() {
//   const lightEl = document.getElementById("light");

//   // state
//   let isLightVis = false;
//   let lightX = 0;
//   let lightY = 0;
//   let prevSeconds;

//   function fadeInLight() {
//     isLightVis = true;
//   }
//   function fadeOutLight() {
//     isLightVis = false;
//   }
//   function moveLight(x, y) {
//     lightX = x;
//     lightY = y;
//   }

//   // render
//   const render = () => {
//     // update light position
//     if (isLightVis) {
//       lightEl.style.transform = `translate3d(calc(-180% + ${lightX}px), calc(-110% + ${lightY}px), 0px)`;
//       lightEl.style.opacity = 1;
//     } else {
//       lightEl.style.opacity = 0;
//     }

//     // re-render
//     requestAnimationFrame(render);
//   };

//   // initial render
//   requestAnimationFrame(render);

//   // listen for mouse movement (controls light position)
//   document.body.addEventListener("mousemove", (e) => {
//     const { pageX, pageY } = e;

//     moveLight(pageX, pageY);
//     fadeInLight();
//   });

//   const mouseTarget = document.getElementById("spotlight");

//   mouseTarget.addEventListener("mouseenter", (e) => {
//     console.log(e);
//   });
//   mouseTarget.addEventListener("mousemove", (e) => {
//     console.log("move", e);
//   });
//   mouseTarget.addEventListener("mouseleave", (e) => {
//     console.log(e);
//   });

//   document.body.addEventListener("touchmove", (e) => {
//     const { changedTouches } = e;
//     const { pageX, pageY } = changedTouches[0];

//     moveLight(pageX, pageY);
//     fadeInLight();
//   });

//   // fade in light only when over (prevents light "jumping")
//   document.body.addEventListener("mouseleave", fadeOutLight);
//   document.body.addEventListener("touchend", fadeOutLight);
// }

// init();

const logo = document.getElementById("logo");

const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

function handleMediaChange(media) {
  if (media.matches === true) {
    console.log("hello");
    document.head.insertAdjacentHTML(
      "beforeend",
      '<link rel="icon" href="/favicon-w.ico" sizes="any">'
    );
    logo.src = "/logo-w.svg";
  } else {
    document.head.insertAdjacentHTML(
      "beforeend",
      '<link rel="icon" href="/favicon-b.ico" sizes="any">'
    );
    logo.src = "/logo-b.svg";
  }
}

handleMediaChange(mediaQueryList);

mediaQueryList.addEventListener("change", handleMediaChange);
