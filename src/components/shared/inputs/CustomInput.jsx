export const CustomInput = ({
  handleChange,
  label,
  type,
  name,
  placeholder,
}) => {
  return (
    <>
      <section className="w-full mb-3">
        {label && (
          <label className="text-neutral-800 text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          className="w-full bg-zinc-300 rounded-xl py-2 px-4 text-black md:text-base text-sm font-normal outline-none"
          placeholder={placeholder}
          autoComplete="off"
          onChange={(e) => handleChange(e)}
        />
      </section>
    </>
  );
};
