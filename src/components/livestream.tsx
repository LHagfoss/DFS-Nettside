export default function Livestream() {
    return (
        <div className="w-screen mt-24 flex flex-col items-center justify-center">

            <div className="container aspect-[16/9] p-10">
                <iframe className="w-full h-full" 
                    src="https://vimeo.com/event/4918100/embed/interaction" //oppdater lenke for å bytte livestream
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                    title="Livestream Embed"
                />
            </div>
            <div className="grid grid-cols-2 justify-between">
                
            <div className="container aspect-[16/9] p-3">
                <iframe className="w-[30vw] h-[30vh]" 
                    src="https://vimeo.com/event/4918100/embed/interaction" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                    title="Livestream Embed"
                />
            </div>
            <div className="container aspect-[16/9] p-3">
                <iframe className="w-[30vw] h-[30vh]" 
                    src="https://vimeo.com/event/4918177/embed/interaction" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                    title="Livestream Embed"
                />
            </div>
            <div className="container aspect-[16/9] p-3">
                <iframe className="w-[30vw] h-[30vh]" 
                    src="https://vimeo.com/event/4918642/embed/interaction" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                    title="Livestream Embed"
                />
            </div>
            <div className="container aspect-[16/9] p-3">
                <iframe className="w-[30vw] h-[30vh]" 
                    src="https://vimeo.com/event/4918663/embed/interaction" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                    title="Livestream Embed"
                />
            </div>
            </div>
            

            
        </div>
    )
}