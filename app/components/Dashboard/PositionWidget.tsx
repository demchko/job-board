type PositionWidgetProps = {
  icon?: string;
  position: string;
  company: string;
  salary: string;
};

export const PositionWidget = ({
  icon,
  position,
  company,
  salary,
}: PositionWidgetProps) => {
  return (
    <div className="bg-white cursor-pointer transition-all duration-400 hover:shadow-2xl rounded-xl w-[200px] h-[180px] px-3 py-3 text-center flex flex-col justify-center items-center">
      <img className="w-16 h-16" src={icon} alt="company icon" />
      <p className="text-lg font-semibold">{position}</p>
      <p className="text-sm text-gray-400">{company}</p>
      <p className="mt-3 font-medium">{salary}</p>
    </div>
  );
};
