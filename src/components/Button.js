function Button ({text}) {
    return (  
        <button
        type="button"
        className="bg-[#FFF4D2] text-yellow-800 font-semibold cursor-pointer text-xs sm:text-sm rounded-md px-3 py-2 sm:px-4 sm:py-3 hover:bg-[#f4e6bc] flex mt-4 mb-12"
        aria-label="View All Projects"
      >
        {text}
      </button>
    );
}

export default Button;