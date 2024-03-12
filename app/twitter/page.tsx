
import { useData } from "../hook/useData";
import FourYou from "../ui/twitter/4you";
import Post from "../ui/twitter/post";
import Tweets from "../ui/twitter/Tweets";

export default function Home(){
    
    return (
        <main className="bg-black h-auto">
            <section>
                <FourYou />
                <br />
                <Tweets />
            </section>
        </main>
    )
}