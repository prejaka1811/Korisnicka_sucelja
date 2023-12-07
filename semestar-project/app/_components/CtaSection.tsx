import Image from "next/image";
import Button from "@/components/Button";
import image from "@/public/cta/sva-spiza.jpg";

const CtaSection = () => (
  <div className="bg-[#ECECEC] w-full">
    <section className="pb-8 lg:container flex flex-col lg:flex-row justify-center items-center gap-20 w-full">

      {/* Hide the image on mobile screens */}
      <div className="relative h-full w-full lg:brightness-100 lg:saturate-100 lg:flex-grow hidden lg:block">
        <Image
          src={image}
          placeholder="blur"
          alt={"CTA image"}
          className="lg:rounded-lg"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>

      <div className="px-5 lg:px-0 flex flex-col gap-5 max-w-lg" style={{ minHeight: '200px', maxHeight: '500px' }}>
        <div>
          <h1 className="sm:text-black text-center font-Inter font-extrabold text-4xl leading-normal tracking-wider">
            Share anything you find with others
          </h1>
        </div>
        <p className="text-black text-center font-Inika font-bold text-2xl leading-normal tracking-wide">
          Share the essence of your kitchen with a community of food lovers. Our
          platform celebrates your recipes, connecting people through the joy of
          cooking. Join us to preserve culinary traditions, inspire with new
          creations, and embrace a world of flavors. From experienced chefs to
          kitchen novices, your recipes hold value. Be a part of a global culinary
          movement where tastes and stories converge. Unleash your inner chef,
          share the magic of your recipes, and relish the connections you'll make
          along the way. Start sharing your culinary journey with us toda
        </p>
        <div className="flex justify-center">
          <Button orange className="text-base">
            SUBMIT
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default CtaSection;
