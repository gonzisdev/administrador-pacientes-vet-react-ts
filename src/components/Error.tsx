
export const Error = ({children} : {children: React.ReactNode}) => {

  return (
    <p className="text-center my-4 bg-red-600 font-bold p-3 uppercase text-sm text-white">{children}</p>
  );
};
