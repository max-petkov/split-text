const tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "power3.easeOut",
  },
});

tl.fromTo(
  ".hero-img",
  {
    scale: 1.3,
    borderRadius: 0,
  },
  {
    scale: 1,
    borderRadius: "24px",
    delay: 0.3,
    duration: 2,
    ease: "elastic.out(1.5, 1)",
  }
)
  .fromTo(
    ".cta1",
    { x: "100%" },
    {
      x: 0,
      autoAlpha: 1,
    },
    "<20%"
  )
  .fromTo(
    ".cta3",
    {
      x: "-100%",
    },
    {
      x: 0,
      autoAlpha: 1,
    },
    "<20%"
  )
  .fromTo(
    ".cta2",
    {
      y: "-100%",
    },
    {
      y: 0,
      autoAlpha: 1,
    },
    "<20%"
  )
  .fromTo(
    ".cta4",
    {
      x: "100%",
    },
    {
      x: 0,
      autoAlpha: 1,
    },
    "<20%"
  )
  .fromTo(
    ".cta6",
    {
      x: "-100%",
    },
    {
      x: 0,
      autoAlpha: 1,
    },
    "<20%"
  )
  .fromTo(
    ".cta5",
    {
      y: "100%",
    },
    {
      y: 0,
      autoAlpha: 1,
    },
    "<20%"
  )
  .fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");

const logo = document.querySelector(".logo");

function splitText(text) {
  const letters = text.textContent.split("");
  text.textContent = "";

  letters.forEach((letter) => {
    text.insertAdjacentHTML(
      "beforeend",
      `<span class='letter'>${letter}</span>`
    );
  });

  return function () {
    gsap.set(".letter", { y: "70%" });
    gsap.to(".letter", {
      y: 0,
      duration: 0.4,
      ease: "power1.easeOut",
      stagger: { from: "center", amount: 0.15 },
      delay: 1,
    });
  };
}

splitText(logo)();
