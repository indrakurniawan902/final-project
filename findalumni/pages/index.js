import { BiBookReader } from "react-icons/bi";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home({}) {
    const [keyword, setKeyword] = useState("");
    const Router = useRouter();

    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        Router.push({ pathname: "/search", query: { keyword: keyword } });
    };

    return (
        <>
            <main className="min-h-screen relative">
            <header className="sticky top-0 py-10 bg-white-0">
            <div className="container mx-auto flex items-center justify-center flex-col py-16">
                <h1 className="text-3xl font-bold mt-6">Find Alumni</h1>
                    <div className="flex items-center justify-center w-screen">
                    <Image alt="Logo" src="/logo.png" width={150} height={150}></Image>
                </div>
                    <form onSubmit={handleSearch}>
                        <div className="flex-[3] relative">
                            <input
                                placeholder="Keyword"
                                type="text"
                                name="search"
                                id="search"
                                className="input mt-6 rounded-full w-[460px]"
                                value={keyword}
                                onChange={handleSearchChange}
                            />
                            <div className="absolute bottom-[16px] right-4">
                                <AiOutlineSearch size={20} />
                            </div>
                        </div>
                    </form>
                </div>
            </header>
            </main>
        </>
    );
}
