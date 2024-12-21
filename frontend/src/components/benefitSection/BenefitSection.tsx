import benefit_bg from "../../assets/landing/benefits_bg.svg";
import phone from "../../assets/landing/iPhone X.png";
import { benefitData } from "../../utils/benefitSectionData";

const BenefitSection = () => {
  return (
    <section className="min-h-[990px] relative flex items-center justify-center overflow-hidden">
      <img
        src={benefit_bg}
        alt="benefit_bg"
        className="blur-[1px] absolute top-0 -z-10 max-w-fit"
      />
      <div className="container flex flex-col items-center justify-around gap-5 md:flex-row mb-16">
        <div className="md:w-[500px] md:h-[500px] flex flex-col items-start justify-between">
          <p className="text-3xl font-medium md:text-4xl">Beneficios</p>
          {benefitData.map((data, index) => (
            <div key={index} className="flex items-start gap-6">
              <img src={data.icon} alt="icons" />
              <div className="flex flex-col max-w-[500spx]">
                <p className="text-xl font-semibold">{data.title}</p>
                <p className="text-base font-normal">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
        <img
          src={phone}
          alt="phone"
          className="max-h-[500px] md:max-h-[630px]"
        />
      </div>
    </section>
  );
};

export default BenefitSection;
