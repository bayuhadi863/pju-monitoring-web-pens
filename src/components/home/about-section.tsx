import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className='h-[100vh] flex items-center'>
        <div className="h-full w-full mx-4 grid grid-rows-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="row-span-3 bg-about bg-cover bg-bottom bg-no-repeat rounded-2xl shadow-lg shadow-slate-400/100">
            <div className='mx-8 mt-8 text-center lg:text-start text-4xl font-semibold leading-tight'>
              Mudah, 
              <br/>
              Cepat,
                 <br/>
              Transparan,
              <br/>
              & Efisien
            </div>
          </div>
          <div className="row-span-3 col-span-2 bg-white rounded-2xl shadow-lg shadow-slate-400/100">
            <div className='mx-8 mt-8 text-center text-[#00296B] text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold leading-tight'>
              Tentang SmartPJU
            </div>
            <div className='mx-8 pt-4 text-center text-[#00296B] text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-tight'>
              SmartPJU adalah sistem informasi yang menyediakan data terkini mengenai kondisi cuaca dan kualitas udara di suatu area. Aplikasi ini menampilkan berbagai parameter lingkungan seperti kelembapan, suhu, radiasi matahari, tekanan udara, curah hujan, kecepatan dan arah angin. Selain itu, smartPJU juga menyediakan data kualitas udara yang mencakup kadar karbon dioksida, oksigen, sulfur dioksida, ozon, dan nitrogen dioksida, serta partikel udara berukuran tertentu. Dengan fitur pemantauan real-time, smartPJU mendukung kebutuhan informasi cepat dan akurat bagi masyarakat dan instansi terkait untuk menjaga kesehatan serta kualitas lingkungan.
            </div>
            <div className='mx-8 pt-4 text-center text-[#00296B] text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-tight'>
              SmartPJU mengumpulkan data dari berbagai sensor lingkungan yang terpasang di area pemantauan. Setiap parameter lingkungan yang ditampilkan—seperti kelembapan, suhu, radiasi matahari, tekanan udara, dan curah hujan—memberikan gambaran lengkap tentang kondisi cuaca terkini. Sementara itu, data kecepatan dan arah angin membantu dalam menganalisis pergerakan udara dan potensi perubahan cuaca. Pada sisi kualitas udara, smartPJU memantau kadar gas berbahaya seperti karbon dioksida (CO₂), sulfur dioksida (SO₂), ozon (O₃), dan nitrogen dioksida (NO₂), serta tingkat oksigen (O₂) dan partikel udara (PM2.5 dan PM10) yang berpengaruh pada kesehatan. Masing-masing data dilengkapi dengan indikator status untuk menunjukkan tingkat aman atau bahaya, sehingga pengguna dapat dengan cepat mengenali kondisi yang memerlukan perhatian khusus. Dengan tampilan antarmuka yang intuitif, smartPJU dirancang agar mudah diakses oleh berbagai pengguna, mulai dari masyarakat umum hingga instansi pemerintah yang membutuhkan data lingkungan untuk pengambilan keputusan.
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
