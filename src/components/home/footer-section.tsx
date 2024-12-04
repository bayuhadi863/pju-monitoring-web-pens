import React from "react";
import CustomContainer from "./custom-container";
import logoPENS from "@/assets/PENS.png";
import logoPengmas from "@/assets/Logo Pengmas.png";
import logoTutWuriHandayani from "@/assets/Logo Tut Wuri Handayani.png";
import logoVokasi from "@/assets/Logo Vokasi.png";
import pemkotLogo from '@/assets/pemkot.png';

const FooterSection: React.FC = () => {
  return (
    <section>
      <CustomContainer className="bg-white">
        <div className="bg-white">
          <div className="flex flex-col py-8">
            <div className="flex justify-center gap-1">
              <img
                src={pemkotLogo}
                alt="Logo Pemkot Surabaya"
                className="w-auto h-12 object-cover object-center"
              />
              <img
                src={logoVokasi}
                alt="Logo Vokasi"
                className="w-auto h-12 object-cover object-center"
              />
              <img
                src={logoPengmas}
                alt="Logo Pengmas"
                className="w-auto h-12 object-cover object-center"
              />
              <img
                src={logoPENS}
                alt="Logo Pens"
                className="w-auto h-12 object-cover object-center"
              />
              <img
                src={logoTutWuriHandayani}
                alt="Logo Tut Wuri Handayani"
                className="w-auto h-12 object-cover object-center"
              />
            </div>
            <div className="text-center text-sm font-semibold pt-4 text-gray-900">
              Tim Pengabdian Masyarakat PENS 2024
            </div>
            <div className="text-center text-sm text-slate-500 font-medium">
              © 2024 SmartPJU All Rights Reserved
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FooterSection;
