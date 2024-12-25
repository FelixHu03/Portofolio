"use client";

import Image from "next/image";

export default function Project() {
    return (
        <>
            <main className="flex flex-col items-center mt-14 min-h-screen font-serif mb-10">
                <h1 className="text-white text-5xl mb-10">MY PROJECT</h1>
                <div className="grid grid-cols-1 sm:grid-row-4 gap-8 pl-20">
                    {/* Gambar 1 */}
                    <div className="flex items-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out transform object-cover">
                        <a href="/ComingSoon" className="flex items-start gap-4">
                            <div className="rounded-xl w-[300px] h-[200px] overflow-hidden">
                                <Image
                                    src="/project/carcare.png"
                                    alt="Carcare"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                                <h1 className="text-white text-lg">Car Care</h1>
                                <p>Adalah sebuah website yang menyediakan layanan mobil, mulai dari gold wash, kaca film, dll. <br />Car Care merupakan website yang menggunakan framework Laravel dan filament. </p>

                            </div>
                        </a>
                    </div>

                    {/* Gambar 2 */}
                    <div className="flex items-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out transform object-cover">
                        <a href="https://mdpweb-project-uas-if21-team-novice.vercel.app/" target="_blank" className="flex items-start gap-4">
                            <div className="rounded-xl w-[300px] h-[200px] overflow-hidden">
                                <Image
                                    src="/project/lioxHotel.png"
                                    alt="Carcare"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                                <h1 className="text-white text-lg">LIOX hotel</h1>
                                <p>Adalah sebuah website booking hotel terutama booking LIOX hotel, yang menyediakan layanan spa, laundry, dll. <br />LIOX Hotel merupakan website yang menggunakan framework Laravel.</p>

                            </div>
                        </a>
                    </div>

                    {/* Gambar 3 */}
                    <div className="flex items-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out transform object-cover">
                        <a href="/ComingSoon" className="flex items-start gap-4">
                            <div className="rounded-xl w-[300px] h-[200px] overflow-hidden">
                                <Image
                                    src="/project/pocketDhammapada.png"
                                    alt="Pocket Dhammapada"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                                <h1 className="text-white text-lg">Pocket Dhammapada</h1>
                                <p className="text-white text-sm mt-2">
                                    Adalah sebuah aplikasi mobile yang merupakan kitab online Dhammapada, yang menyediakan fitur search, favorit, dll, secara lokal.<br />
                                    Pocket Dhammapada dibuat dengan framework filament dengan bahasa dasar dart.
                                </p>
                            </div>
                        </a>
                    </div>


                    {/* Gambar 4 */}
                    <div className="flex items-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out transform object-cover">
                        <a href="/ComingSoon" className="flex items-start gap-4">
                            <div className="rounded-xl w-[400px] h-[200px] overflow-hidden">
                                <Image
                                    src="/project/likelyColor.png"
                                    alt="Likely Color"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                                <h1 className="text-white text-lg">Likely Color</h1>
                                <p>Adalah sebuah website yang dapat membedakan warna dasar seperi mejikuhibiniu(merah, jingga, kuning, hijau, biru, nila, dan ungu) yang akan mengeluarkan hasil akhir dengan nilai RGB, HSL, dan HSV.<br />Likely Color merupakan website yang menggunakan framework flask.</p>

                            </div>
                        </a>
                    </div>

                    {/* Gambar 5 */}
                    <div className="flex items-start gap-4 hover:scale-110 transition-transform duration-300 ease-in-out transform object-cover">
                        <a href="https://paritta-kita.vercel.app/" className="flex items-start gap-4">
                            <div className="rounded-xl w-[300px] h-[200px] overflow-hidden">
                                <Image
                                    src="/project/ParitaKita.png"
                                    alt="ParitaKita"
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 -mr-10">
                                <h1 className="text-white text-lg">Parita Kita</h1>
                                Adalah sebuah aplikasi mobile yang merupakan kitab online<br />
                                    Parita Kita dibuat dengan menggunakan html, css dan js sederhana.
                            </div>
                        </a>
                    </div>

                </div>
            </main>
        </>
    );
}