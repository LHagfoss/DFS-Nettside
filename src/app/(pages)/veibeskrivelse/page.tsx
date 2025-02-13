import Veibeskrivelse from "@/components/veibeskrivelse";
import Footer from "@/components/footer";

export default function Home(){
    return(
        <>
        <main className="flex w-screen flex-col items-center justify-center">
        <title>DFS-Nettside | Veibeskrivelse</title>
        <Veibeskrivelse />
        </main>
        <Footer />
        </>
    )
}
