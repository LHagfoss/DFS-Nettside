export default function Livestream() {
    return (
        <div className="w-screen mt-36 flex flex-col items-center justify-center">
            <h1 className="sm:hidden">Spiller nå</h1>
            <div className="container p-5 aspect-[16/9] mb-10 sm:p-0">
                <iframe className="w-full h-full" 
                    src="https://vimeo.com/event/4918100/embed/interaction" //oppdater lenke for å bytte livestream
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowFullScreen 
                    title="Livestream Embed"
                />
            </div>
            <h1 className="sm:hidden">Kommer snart</h1>

            <div className="container p-10 sm:p-0 grid grid-cols-1 sm:grid-cols-3 gap-5 justify-between">
                <LiveStream link="https://vimeo.com/event/4918100/embed/interaction"  />
                <LiveStream link="https://vimeo.com/event/4918177/embed/interaction" />
                <LiveStream link="https://vimeo.com/event/4918642/embed/interaction" />
                <LiveStream link="https://vimeo.com/event/4918663/embed/interaction" />
                <LiveStream link="https://vimeo.com/event/4918675/embed/interaction" />
                <LiveStream link="https://vimeo.com/event/4918681/embed/interaction" />
                <LiveStream link="https://vimeo.com/event/4918692/embed/interaction" />
                <LiveStream link="https://vimeo.com/event/4918698/embed/interaction" />  
            </div>

            </div>
            

            

    )
}

const LiveStream = ({link}: {link: string}) => {
    return (
        <iframe className="w-full full aspect-[16/9]" 
        src={link} 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowFullScreen 
        title="Livestream Embed"
    />
    ) 
}