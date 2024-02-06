import Link from "next/link";

const NavigationLinks = ({title}) => {
    return (
        <div className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer  ">
            {title}
        </div>
    );
};

export default NavigationLinks;