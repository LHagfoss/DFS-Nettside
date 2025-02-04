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