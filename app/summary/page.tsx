import Result from "../ui/summary/result";
import { hanken } from "../lib/fonts";
import SummaryData from "../ui/summary/summay";
export default function Summary() {
    return (
        <main className={`${hanken.className} bg-white md:min-h-screen md:flex md:items-center md:justify-center `}>
            
            <section className="sm:flex sm:py-4 `">
                <Result />
                <SummaryData />
            </section>
        </main>
    );
}