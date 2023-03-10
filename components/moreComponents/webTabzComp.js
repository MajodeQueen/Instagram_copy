const WebTabComponent = ({ contab={} ,Tabz={} ,contbz=[] }) => {
    return (
      <div
        className="flex flex-row  border-b"
      >
        <div className="flex flex-row w-full justify-between">
          {contbz.map((item) => (
            <div
              key={item.id}
              className={`text-xs ${
                contab[`${item.id}`] === true
                  ? "text-[#063970] border-b border-black border-solid "
                  : "text-[#bfd7ef]"
              }`}
              onClick={() => Tabz({ ...item.state })}
            >
              <span className="text-sm px-8">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default WebTabComponent;