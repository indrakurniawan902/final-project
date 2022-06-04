function Modal({ handleClose, data }) {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={handleClose}
            >
                <div className="relative w-[520px] my-6 mx-auto max-w-3xl">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col px-8 py-6 gap-3">
                            
                            <p className="font-semibold text-lg">{data.nama}</p>
                            <div className="grid grid-cols-3 gap-y-2 my-4">
                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Nama{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.nama}{" "}
                                </p>

                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Tanggal Lahir{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.dob}{" "}
                                </p>

                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Tempat Lahir{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.birthPlace}{" "}
                                </p>
                                
                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Phone{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.phone}{" "}
                                </p>

                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Line{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.line}{" "}
                                </p>

                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Instagram{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.instagram}{" "}
                                </p>


                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    kelas{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.class} 
                                </p>

                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Universitas{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.university}
                                </p>

                                <p className="text-base font-semibold opacity-80 col-span-1">
                                    Fakultas{" "}
                                </p>
                                <p className="text-base font-medium opacity-80 col-span-2">
                                    : {data.faculty}
                                </p>

                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default Modal;
