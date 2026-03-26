import logo from "../../public/pasfoto.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="flex justify-center items-center mt-8 md:mt-0">
      <div className="relative inline-block w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">

        {/* Abstract blob background */}
        <div
          className="absolute inset-[-15px] w-[calc(100%+30px)] h-[calc(100%+30px)]"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
            borderRadius: "58% 42% 67% 33% / 35% 63% 37% 65%",
            zIndex: 0,
          }}
        />

        {/* Gambar di atas blob */}
        <div
          className="relative z-10 w-full h-full"
          style={{
            borderRadius: "58% 42% 67% 33% / 35% 63% 37% 65%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <Image
            src={logo}
            alt="hero"
            loading="eager"
            priority
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;