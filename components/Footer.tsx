import Logo from "@/components/Logo-big";
import Icons from "@/components/Icons";

type TitleProps = {
  children: string;
};

type ListProps = {
  title: string;
  items: string[];
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-roboto-condensed font-bold text-3xl whitespace-nowrap text-brand-orange-800 mb-3 lg:mb-6">
    {children}
  </div>
);

const FooterList = ({ title, items }: ListProps) => (
  <div>
    <FooterListTitle>{title}</FooterListTitle>
    <ul className="font-roboto text-brand-purple-50">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <div className="bg-brand-orange-50">
    <div className="container flex flex-col py-12 items-center gap-12 self-stretch md:max-lg:px-10">
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center self-stretch">
        {/* Always render the logo on the left */}
        <Logo dark style={{ width: '50%' }} />

        <div className="flex flex-wrap justify-center gap-12">
          <FooterList
            title="Services"
            items={[
              "User Research",
              "Design Systems",
              "Rebranding",
              "Marketing",
              "Market Research",
              "User Journey",
            ]}
          />
     
          <FooterList
            title="Sitemap"
            items={[
              "Home",
              "Showcase",
              "Blog",
              "About",
              "Contact Us",
              "Sign In",
            ]}
          />
          <div>
            <FooterListTitle>Contact Us</FooterListTitle>
            <ul className="font-roboto text-brand-purple-50 mb-6">
              <li>Ruđera Boškovića 32</li>
              <li>21000, Split, Croatia</li>
            </ul>
            <ul className="font-roboto text-brand-purple-50 mb-6">
              <li className="flex gap-2 items-center">
                <Icons.phone className="w-5" /> +385 95 864 6111
              </li>
              <li className="flex gap-2 items-center">
                <Icons.envelope className="w-5" />
                design@fesb.hr
              </li>
            </ul>
            <div className="flex gap-4">
              <Icons.facebook className="w-8" />
              <Icons.twitter className="w-8" />
              <Icons.linked className="w-8" />
              <Icons.instagram className="w-8" />
            </div>
          </div>
        </div>
      </div>
      <p className="font-roboto text-brand-purple-600 text-base sm:text-lg mt-8">
        Copyright @ 2023 FESB. All rights reserved for Toni Jakelić.
      </p>
    </div>
  </div>
);

export default Footer;
