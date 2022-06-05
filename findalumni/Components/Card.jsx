import { CgProfile } from "react-icons/cg";

function Card({ kelas, tag, nama, onClick }) {
    return (
        <div
            className="border-[1px] border-grey-1 rounded-xl px-6 py-5 flex flex-col gap-2 cursor-pointer hover:shadow-card transition-all duration-300"
            onClick={onClick}
        >
            <p
                className={`tag font-medium text-xs px-2 py-1 rounded-full  text-white w-fit ${
                    tag == "Ipa 1" ? "bg-blue-cyan" : tag == "Ipa 2" ? "bg-green" : tag == "Ipa 3" ?"bg-black" :
                    tag == "Ipa 4" ?"bg-blue-semidark" : "bg-blue-dark"
                }`}
            >
                {tag}
            </p>
            <p className="font-semibold text-base leading-[20px] text-elipsis-2">{kelas}</p>
            <div className="flex gap-2">
                <CgProfile size={20} className="text-blue-dark flex-shrink-0" />
                <p className="nama text-sm font-bold text-b-1 text-elipsis-1">{nama}</p>
            </div>
        </div>
    );
}

export default Card;
