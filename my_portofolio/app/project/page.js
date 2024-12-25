"use client";

import Image from "next/image";

export default function Project() {
    return (
        <>
            <main className="flex flex-col items-center mt-14 min-h-screen font-serif">
                <h1 className="text-white text-5xl mb-10">MY PROJECT</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {/* Gambar 1 */}
                    <div className="relative overflow-hidden rounded-xl flex">
                        <a href="/ComingSoon">
                            <Image
                                src="/Project/carcare.png"
                                alt="Carcare"
                                width={300}
                                height={200}
                                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                        </a>
                    </div>
                    {/* Gambar 2 */}
                    <div className="relative overflow-hidden rounded-xl flex">
                        <a href="https://mdpweb-project-uas-if21-team-novice.vercel.app/" target="_blank">
                            <Image
                                src="/Project/lioxHotel.png"
                                alt="Liox Hotel"
                                width={300}
                                height={300}
                                className="transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover "
                            />
                        </a>
                    </div>

                    {/* Gambar 3 */}
                    <div className="relative overflow-hidden rounded-xl">
                        <a href="/ComingSoon">
                            <Image
                                src="/Project/pocketDhammapada.png"
                                alt="Carcare"
                                width={300}
                                height={200}
                                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                        </a>

                    </div>
                    {/* Gambar 4 */}
                    <div className="relative overflow-hidden rounded-xl">
                        <a href="/ComingSoon">
                            <Image
                                src="/Project/likelyColor.png"
                                alt="Carcare"
                                width={300}
                                height={200}
                                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                        </a>

                    </div>
                </div>
            </main>
        </>
    );
}
