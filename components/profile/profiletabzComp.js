const ProfileTabz = ({ tab = {}, Tab, ptabz = [] }) => {
  return (
    <div className="flex flex-row  border-t justify-center">
      <div className="flex flex-row items-center space-x-20">
        {ptabz?.map((item) => (
          <div
            key={item.id}
            className={`text-xs ${
              tab[`${item.id}`] === true
                ? 'text-[12px] border-t border-black border-solid '
                : ''
            }`}
            onClick={() => Tab({ ...item.state })}
          >
            <p className="flex space-x-4 mt-2">
              {item.icon}
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabz;
