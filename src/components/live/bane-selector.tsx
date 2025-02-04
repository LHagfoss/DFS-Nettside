"use client"

import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import skyttere from "@/data/skyttere.json"
import { animatePageOut } from "@/app/utils/animations"

interface Skytte {
    id: number
    name: string
    bane: string
    skudd: number
}

interface BaneSelectorProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BaneSelector({ isOpen, onClose }: BaneSelectorProps) {
    const router = useRouter()
    const container = useRef(null)
    const [selectedBaner, setSelectedBaner] = useState<number[]>([])
    const tl = useRef<gsap.core.Timeline | null>(null)

    const toggleBane = (id: number) => {
        setSelectedBaner(prev => {
            const numericId = Number(id)
            if (isNaN(numericId)) return prev
            
            return prev.includes(numericId) 
                ? prev.filter(baneId => baneId !== numericId) 
                : [...prev, numericId]
        })
    }

    const showSelectedBaner = async () => {
        if (selectedBaner.length > 0) {
            const validIds = selectedBaner.filter(id => !isNaN(id) && id > 0)
            if (validIds.length === 0) return
            
            const href = `/live/${validIds.join(',')}`
            await animatePageOut(href, router, () => {
                onClose()
            })
        }
    }

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })
            .set(".bane-overlay", {
                xPercent: 100,
                visibility: "visible"
            })
            .to(".bane-overlay", {
                xPercent: 0,
                duration: 0.6,
                ease: "power3.inOut"
            })
            .from(".bane-item", {
                x: 50,
                opacity: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out",
            }, "-=0.3")
    }, { scope: container })

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            tl.current?.play()
        } else {
            const timeline = tl.current
            timeline?.reverse().then(() => {
                document.body.style.overflow = ""
                gsap.set(".bane-overlay", { visibility: "hidden" })
            })
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    return (
        <div ref={container} className={`fixed right-0 top-0 h-full z-50 ${!isOpen ? 'pointer-events-none' : ''}`}>
            <div className="bane-overlay fixed right-0 top-0 h-full w-[30vw] bg-[--accent] overflow-y-auto visibility-hidden">
                <div className="p-8">
                    <button 
                        onClick={onClose}
                        className="bg-red-100 text-[--accent] rounded-full px-6 py-3 mb-8"
                    >
                        Lukk
                    </button>

                    <div className="space-y-4 mb-24">
                        {skyttere.map((skytte: Skytte) => (
                            <div 
                                key={skytte.id}
                                className="bane-item flex items-center"
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedBaner.includes(skytte.id)}
                                    onChange={() => toggleBane(skytte.id)}
                                    className="mr-4 h-6 w-6"
                                />
                                <div className="text-white">
                                    <p className="font-bold">{skytte.name}</p>
                                    <p>Bane: {skytte.bane}</p>
                                    <p>Skudd: {skytte.skudd}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedBaner.length > 0 && (
                        <div className="fixed bottom-0 right-0 w-[30vw] p-4 bg-[--accent] border-t border-white/10">
                            <button
                                onClick={showSelectedBaner}
                                className="w-full bg-red-100 text-[--accent] rounded-full px-6 py-3"
                            >
                                Vis valgte baner ({selectedBaner.length})
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 