export const ButtonBg = ({ children, disable, handleClick, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${
          disable ? "bg-zinc-500" : "bg-black"
        } sm:px-6 px-2 py-2 rounded-[9px] items-center justify-center inline-flex text-center text-white md:text-sm sm:text-[12px] text-[10px] font-normal uppercase leading-normal tracking-[1px] md:tracking-[3.50px]`}
        onClick={handleClick}
        disabled={disable}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export const ButtonOutline = ({ children, disable, handleClick, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${
          disable ? "bg-zinc-500" : "bg-transparent"
        } px-6 py-2 border border-black rounded-md items-center justify-center inline-flex text-center text-black text-sm font-medium leading-normal`}
        onClick={handleClick}
        disabled={disable}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
