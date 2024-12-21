import vector from "../../assets/landing/Vector3.svg";
import { ViewInit } from "../carrousel/initiatives";

const BannerSection = () => {

  return (
    <section className="relative min-h-[750px] flex items-center justify-center overflow-hidden">
      <img
        src={vector}
        alt="vector"
        className="absolute top-0 -z-10 max-w-fit"
      />
      <div className="flex flex-col gap-1 text-center pt-2 items-center text-black md:max-w-[800px]">
        <p className="text-3xl font-medium md:text-4xl">
          Iniciativas
        </p>
        <ViewInit/>
      </div>
    </section>
  );
};

export default BannerSection;
