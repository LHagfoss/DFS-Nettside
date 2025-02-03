"use client";

import { animatePageIn, animatePageOut } from "@/app/utils/animations";
import { useRouter } from "next/navigation";
import Link from 'next/link'

interface MenuLinkProps {
    href: string;
    label: string;
    className?: string;
    prefetch?: boolean;
    onClick: () => void;
}

export default function MenuLink({ href, label, className, prefetch, onClick }: MenuLinkProps) {
    const router = useRouter();

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        onClick();
        
        sessionStorage.setItem('isMenuNavigation', 'true');
        
        try {
            await animatePageOut(href, router, animatePageIn);
        } catch (error) {
            console.error('Navigation error:', error);
            router.push(href);
        }
    };
    
    return (
        <Link 
            href={href} 
            className={`text-[60px] sm:text-[80px] lg:text-[100px] leading-[85%] uppercase text-[#f4f4f5] ${className}`}
            prefetch={prefetch}
            onClick={handleClick}
        >
            {label}
        </Link>
    );
}