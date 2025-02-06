import gsap from "gsap";
import { useInView } from 'react-intersection-observer';

export const animateHomeIn = () => {
    const homeElement = document.querySelectorAll('.home-element');
    const tl = gsap.timeline();

    tl.fromTo(homeElement, {
        clipPath: 'inset(100% 0% 0% 0%)',
        opacity: 0,
      }, {
        clipPath: 'inset(0% 0% 0% 0%)',
        stagger: 0.2,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      });
    
      return tl;
};