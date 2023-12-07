type BadgeProps = {
  text: string;
  bgColor: string;
  textColor: string;
};

export type BadgeNode = React.ReactElement<BadgeProps, typeof Badge>;

const Badge = ({ text, bgColor, textColor }: BadgeProps) => (
  <div
    className={`inline-flex items-center  ${bgColor} ${textColor} text-xs font-roboto font-[500] px-6 py-3 rounded-full`}
  >
    {text}
  </div>
);

const Badges = {
  design: () => (
    <Badge
      text="Something Healthy"
      bgColor="bg-brand-orange-600"       //svaku ikonicu zasebno minjaj
      textColor="text-brand-purple-900"
    />
  ),
  digital: () => (
    <Badge
      text="Cheat Days"
      bgColor="bg-brand-orange-600" 
      textColor="text-brand-orange-800"
    />
  ),
  branding: () => (
    <Badge
      text="Exquisite"
      bgColor="bg-brand-orange-600" 
      textColor="text-brand-purple-000"
    />
  ),
  paper: () => (
    <Badge
      text="Design"
      bgColor="bg-brand-orange-600" 
      textColor="text-brand-purple-50"
    />
  ),
};

export default Badges;
