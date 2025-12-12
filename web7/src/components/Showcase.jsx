import Foto2 from "../assets/Foto2.png";

export default function Showcase() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">Student Projects</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mt-3">Creative Portfolio Platform</h3>
          <p className="text-sm text-gray-700 mt-2">
            Platform karya mahasiswa dengan rating & feedback.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
            Lihat Demo
          </button>
        </div>

        <img src={Foto2} className="w-full md:w-1/2 rounded-xl shadow-lg" />
      </div>
    </section>
  );
}
