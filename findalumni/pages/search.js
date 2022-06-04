import { useState, useEffect } from "react";
const d3 = require("d3-sparql");
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import { BiSearchAlt, BiXCircle, BiBookContent } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import LoadingState from "../Components/LoadingState";

function Search({ keyword, data }) {
    const [isLoading, setIsLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    const [detailData, setDetailData] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const Router = useRouter();

    const handleSearchChange = (e) => {
        setSearchKeyword(e.target.value);
    };
   
    const handleSearch = (e) => {
        setIsLoading(true);
        e.preventDefault();
        Router.push({ pathname: "/search", query: { keyword: searchKeyword } });
        setIsLoading(false);
    };

    const handleClick = (data) => {
        setDetailData(data);
        setShowModal(true);
    };

    return (
        <section className="relative">
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
                                value={searchKeyword}
                                onChange={handleSearchChange}
                            />
                            <div
                                className="absolute bottom-[16px] right-4 cursor-pointer"
                                onClick={handleSearch}
                            >
                                <AiOutlineSearch size={20} />
                            </div>
                        </div>
                    </form>
                    <section className="card-container grid grid-cols-3 gap-x-3 gap-y-5 mt-6">
                    {data.map((alumni, index) => (
                        <Card
                            key={`alumni-${index}`}
                            onClick={() => handleClick(alumni)}
                            tag={alumni.class}
                            nama={alumni.nama}
                            kelas={alumni.universitas}
                        ></Card>
                    ))}
                </section>
                </div>
                <main className="container mx-auto py-6 min-h-[61vh] flex flex-col items-center">
                {isLoading && <LoadingState />}
                {data.length > 0 ? (
                    keyword == "" ? (
                        <div className="flex gap-2 items-center">
                            <BiBookContent size={24} className="text-blue-semidark" />
                            <h2 className="font-normal text-lg text-blue-semidark text-center">
                                Menampilkan Alumni
                            </h2>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <BiSearchAlt size={24} className="text-blue-semidark" />
                            <h2 className="font-normal text-lg text-blue-semidark text-center">
                                Menampilkan keyword &quot;
                                <span className="font-semibold">{Router.query.keyword}</span>&quot;
                            </h2>
                        </div>
                    )
                ) : (
                    <div className="flex gap-2 items-center">
                        <BiXCircle size={24} className="text-blue-semidark" />

                        <h2 className="font-normal text-lg text-blue-semidark text-center">
                            Tidak dapat menemukan keyword &quot;
                            <span className="font-semibold">{Router.query.keyword}</span>&quot;
                        </h2>
                    </div>
                )}

            </main>
            </header>
            {showModal && <Modal data={detailData} handleClose={() => setShowModal(false)} />}
        </section>
    );
}

const getQuery = (word) => {
    let query;
    if(word == ""){
        query = "o";
    }
    else{
        word = query;
    }
    return query;
};

export async function getServerSideProps({ query }) {
    const keyword = query.keyword ? query.keyword : "";
    const type = query.type ? getQuery(query.type) : "o";

    const rdfUrl = "http://localhost:3030/kelas/query";

    const queryRdf = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX d:  <http://learningsparql.com/ns/data#> 
    PREFIX person: <http://learningsparql.com/ns/person#> 
    
    SELECT DISTINCT ?nama ?dob ?birthPlace ?phone ?line ?instagram ?class ?university ?faculty
        WHERE { 
            ${keyword == "" ? "" : type == "o" ? "?s ?p ?o." : ""}
            ?s person:nama ?nama;
            person:dob ?dob;
            person:phone ?phone;
            person:birthPlace ?birthPlace;
            person:line ?line;
            person:instagram ?instagram;
            person:class ?class;
            person:university ?university;
            person:faculty ?faculty;.
            ${keyword == "" ? "" : `FILTER (regex(str(?${type}), "${keyword}", "i"))`}}
            GROUP BY ?nama ?dob ?phone ?birthPlace ?line ?faculty ?instagram ?class ?university  
        ${keyword == "" ? "" : type == "o" ? "?o" : ""}
`;

    const data = await d3.sparql(rdfUrl, queryRdf);

    return {
        props: {
            keyword,
            data,
        },
    };
}

export default Search;
