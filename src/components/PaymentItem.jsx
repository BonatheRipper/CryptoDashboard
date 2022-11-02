export const PamentItem = ({ bg, icon, header, body }) => {
  return (
    <div
      className={`px-6 my-3 border w-full ${bg} transform scale-100 hover:scale-105 rounded-xl flex justify-start items-center flex-row py-0 h-28`}
    >
      <div className="flex bg-[#d2eef4] text-[#4e8d9b] justify-center items-center rounded-full  px-2 py-2 border">
        {icon}
      </div>
      <div className="mx-4 flex justify-start  flex-col">
        <h6 className="my-1 font-medium">{header}</h6>
        <p style={{ fontWeight: "400" }} className="font-thin text-xs">
          {body}
        </p>
      </div>
    </div>
  );
};
