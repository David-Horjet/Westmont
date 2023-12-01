export const CustomTextArea = ({
  label,
  type,
  name,
  placeholder,
  handleChange,
  cols,
  rows
}) => {
  return (
    <>
      <section className="w-full mb-3">
        {label && (
          <label className="text-neutral-500 text-xs font-medium mb-2">
            {label}
          </label>
        )}
        <textarea
          type={type}
          name={name}
          className="w-full bg-zinc-300 rounded-xl py-2 px-4 text-black md:text-base text-sm font-normal outline-none"
          placeholder={placeholder}
          autoComplete="off"
          cols={cols}
          rows={rows}
          onChange={(e) => handleChange(e)}
        />
      </section>
    </>
  );
};
