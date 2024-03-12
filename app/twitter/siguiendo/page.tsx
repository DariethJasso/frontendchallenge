import FourYou from "@/app/ui/twitter/4you";
import Tweets from "@/app/ui/twitter/Tweets";

export default function Siguiendo() {
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