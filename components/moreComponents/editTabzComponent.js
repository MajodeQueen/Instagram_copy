const TabComponent = ({ tab = {}, Tab, tabz = [] }) => {
    return (
      <div
        className="flex flex-col  bg-[#FFFFFF]  mt-0  justify-center items-center"
      >
        <div className="flex flex-col w-full ">
          {tabz.map((item) => (
            <div
              key={item.id}
              className={`pt-4  flex justify-start text-xs py-2 ${
                tab[`${item.id}`] === true
                  ? "bg-white font-semibold border-solid  border-l-[2px] border-black"
                  : "bg-white hover:bg-gray-50 hover:border-l-[2px] hover:border-gray-400 border-solid cursor-pointer"
              }`}
              onClick={() => Tab({ ...item.state })}
            >
              <span className="text-sm px-8">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TabComponent;
  