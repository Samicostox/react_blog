import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? "none" : "auto",
      }}
      className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl overflow-hidden border-[1px] border-teal-200/25 bg-gradient-to-br from-slate-400/30 to-slate-500/40 backdrop-blur-md md:left-6 md:right-6 md:top-6 md:rounded-2xl"
    >
      <div className="flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />
        <Links />
        <Logo />
        <Buttons setMenuOpen={setMenuOpen} />
      </div>
      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({ hovered, scope }) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${hovered ? 1 : 0}) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-2xl"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

const Logo = () => (
    <div className="pointer-events-none absolute left-0 top-[50%] z-10 md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
      <img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1709388804/Innovation_Studios_3_wqhskx.png" alt="Innovation Studios" className="h-64 max-w-full" />
    </div>
  );

const Links = () => (
  <div className="hidden items-center gap-2 lg:flex font-alliance">
    <GlassLink text="Products" />
    <GlassLink text="History" />
    <GlassLink text="Contact" />
  </div>
);


const GlassLink = ({ text }) => {
    return (
        <a
          href="#"
          className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 text-slate-900 transition-colors group-hover:text-white font-alliance">
            {text}
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-br from-teal-500 to-teal-600 opacity-0 transition-opacity group-hover:opacity-100 font-alliance" />
        </a>
      );
    };

const TextLink = ({ text }) => {
  return (
    <a href="#" className="text-slate-900 transition-colors hover:text-slate-900">
      {text}
    </a>
  );
};

const Buttons = ({ setMenuOpen }) => (
  <div className="flex items-center gap-4">
    <div className="hidden md:block">
     
    </div>
    <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95 font-alliance">
     Discovery Call
    </button>
    <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95 font-alliance">
    Contact Us
    </button>
    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

const SignInButton = () => {
  return (
    <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 text-white transition-colors group-hover:text-slate-900 font-alliance">
        Contact Us
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-teal-500 to-teal-600 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? "fit-content" : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Products" />
          <TextLink text="History" />
          <TextLink text="Contact" />
        </div>
        <SignInButton />
      </div>
    </motion.div>
  );
};

export default GlassNavigation;