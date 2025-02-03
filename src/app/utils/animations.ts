import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
    const bannerContainer = document.querySelector('.banner-container') as HTMLElement;
    const bannerOne = document.getElementById("banner-1") as HTMLElement;
    const bannerTwo = document.getElementById("banner-2") as HTMLElement;
    const bannerThree = document.getElementById("banner-3") as HTMLElement;
    const bannerFour = document.getElementById("banner-4") as HTMLElement;

    if (bannerContainer && bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 100,
            stagger: 0.2,
            ease: "power4.inOut",
            onComplete: () => {
                bannerContainer.style.zIndex = '-10';
            }
        });
    }
};

export const animatePageOut = (href: string, router: AppRouterInstance, onComplete: () => void) => {    
    return new Promise<void>((resolve) => {
        const bannerContainer = document.querySelector('.banner-container');
        const bannerOne = document.getElementById("banner-1");
        const bannerTwo = document.getElementById("banner-2");
        const bannerThree = document.getElementById("banner-3");
        const bannerFour = document.getElementById("banner-4");

        if (bannerContainer && bannerOne && bannerTwo && bannerThree && bannerFour) {
            const tl = gsap.timeline({
                onComplete: () => {
                    router.push(href);
                    onComplete();
                    resolve();
                }
            });

            tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
                yPercent: -100,
            }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
                yPercent: 0,
                stagger: 0.2,
                ease: "power4.inOut",
            });
        } else {
            router.push(href);
            onComplete();
            resolve();
        }
        
    });
};  

export const animateNavbarIn = () => {
  const navItem = document.querySelectorAll(".nav-item") as NodeListOf<HTMLElement>;
  const tl = gsap.timeline();

  gsap.set(navItem, {
    clipPath: 'inset(100% 0 0 0)',
    opacity: 0,
  });

  tl.to(navItem, {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    y: 0,
    duration: 2,
    stagger: 0.15,
    ease: "power4.out"
  });
};

export const animateCVIn = () => {
  const cv = document.querySelector('.cv') as HTMLElement;
  const tl = gsap.timeline();


  gsap.set(cv, {
    opacity: 0,
    clipPath: 'inset(100% 0 0 0)',
  });

  tl.to(cv, {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    duration: 1,
    ease: "power4.out",
  });
};

export const springPopup = (popup: HTMLElement, isOpen: boolean) => {
  const tl = gsap.timeline();
  if (isOpen) {
    tl.fromTo(popup, 
        { scale: 0, opacity: 0 },
        { 
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
            immediateRender: false
        }
    );
  } else {
    tl.to(popup, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        onComplete: () => {
          gsap.set(popup, { clearProps: "all" });
        }
    });
  }

  return tl;
}; 