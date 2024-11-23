export default function Button({ ...props }) {
  return (
    <button 
      {...props}
      className={`transition-all ease-in-out duration-300 hover:scale-[1.05] bg-black text-white py-1 px-6 rounded-lg text-base font-bold flex justify-center items-center ${props.className}`}
    >
      {props.children}
    </button>
  );
}
