import Foto1Img from "../assets/Foto1.jpg";

export default function HeroSection() {
return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-900">
                RUANG EKSPRESI : Wadah kreatif & kompetitif mahasiswa
            </h1>
            <div className="flex flex-wrap gap-3 mt-5">
                <span className="px-4 py-1 bg-yellow-200 rounded-full text-sm">Kreatif</span>
                <span className="px-4 py-1 bg-green-200 rounded-full text-sm">Cerdas</span>
                <span className="px-4 py-1 bg-blue-200 rounded-full text-sm">Kolaboratif</span>
                <span className="px-4 py-1 bg-pink-200 rounded-full text-sm">Support</span>
            </div>
        </div>
        <img
            src={Foto1Img}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
            alt="foto1"
        />
    </section>
);
}
