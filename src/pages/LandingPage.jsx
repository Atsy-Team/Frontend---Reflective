import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HiPlay, HiOutlineNewspaper } from "react-icons/hi";
import { FaCheckCircle, FaYoutube, FaGooglePlay } from 'react-icons/fa';

import mainContentPhoto from "../assets/Frame-1.png";
import tentangKamiPhoto from "../assets/Frame-2.png";
import sectionTigaPhoto from "../assets/Frame-3.png";
import fotoEmpat from "../assets/Frame-4.png";
import fotoLima from "../assets/Frame-5.png";


export default function LandingPage () {
    return (
        <div className="bg-[#25A6B2] min-h-screen">
            <Navbar />
            <div className="container mx-auto p-12">
                {/* Main Content */}
                <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-1/2 p-4">
                    <p className="text-[#BFE95E] text-lg font-medium">Reflective - AI Sentiment Analysis</p>
                    <h2 className="font-bold text-white text-4xl">Telusuri Analisis Sentimen Kami untuk Wawasan Data yang Mendalam</h2>
                    <p className="text-white mt-4">Di era digital, setiap kata memiliki kekuatan. Reflective membantu Anda memahami 
                    emosi di balik setiap kata dengan teknologi analisis sentimen AI terbaik.</p>
                    <button
                        type="button"
                        className="py-2 px-4 mt-4 rounded-full bg-white bg-opacity-25 hover:bg-opacity-100 focus:outline-none hover:bg-white transition-colors duration-300"
                    >
                        <div className="flex items-center">
                            <HiPlay className="mr-1 text-2xl"/>
                            <span className="text-md text-white hover:text-[#0E3D42]  font-medium">Memulai</span>
                        </div>
                    </button>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <img 
                        src={mainContentPhoto} 
                        alt="Foto Main Content" 
                        className="w-full h-auto md:max-w-md"
                    />
                </div>
                </div>
                
                {/* Tentang Kami */}
                <div className="flex flex-wrap items-center justify-between rounded-3xl bg-white bg-opacity-25">
                    <div className="w-full md:w-1/2 p-4">
                        <img 
                            src={tentangKamiPhoto} 
                            alt="Foto Tentang Kami"
                            className="w-full h-auto md:max-w-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <p className="text-[#BFE95E] font-medium text-xl mb-4">Pahami Sentimen. Kendalikan Strategi</p>
                        <h2 className="text-white text-3xl mb-4 font-bold">Tentang Kami</h2>
                        <p className="text-white mb-4">Tim kami dibentuk untuk menggali perasaan dan pendapat masyarakat serta mengoptimalkan pemahaman 
                        terhadap sentimen pengguna. Kami berkomitmen memberikan wawasan berharga untuk mendukung pengambilan 
                        keputusan cerdas dengan solusi analisis sentimen yang efektif dan berdampak positif.</p>

                        <div className="flex items-center text-white">
                            <FaCheckCircle className="text-xl mr-2" />
                            <p>{`Menyediakan Pemahaman Mendalam Melalui Data`}</p>
                        </div>

                        <div className="flex items-center text-white ">
                            <FaCheckCircle className="text-xl mr-2" />
                            <p>{`Mengidentifikasi Tren Sentimen yang Mendalam`}</p>
                        </div>

                        <div className="flex items-center text-white ">
                            <FaCheckCircle className="text-xl mr-2" />
                            <p>{`Mengintegrasikan Analisis Multisumber`}</p>
                        </div>

                        <div className="flex items-center text-white ">
                            <FaCheckCircle className="text-xl mr-2" />
                            <p>{`Mewujudkan Visi Bersama, Satu Tugas Akhir pada Waktunya`}</p>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="rounded-r-2xl bg-white bg-opacity-25 p-2">
                            <h2 className="text-[#BFE95E] font-bold text-3xl mb-3">Jelajahi Sentimen Trafik</h2>
                            <p className="text-white font-medium">Menulusuri Dinamika Sentimen Positif dan Negatif Diruang Digital</p>
                        </div>
                        <div>
                            <div>
                                <h2 className="text-white font-bold text-3xl mb-3">Sentimen Terbuka</h2>
                                <p className="text-white font-medium mb-3">Menganalisis Review dan Opini Pengguna Playstore</p>
                            </div>
                            <div>
                                <h2 className="text-white font-bold text-3xl mb-3">Visualisasi yang Mudah Dimengerti</h2>
                                <p className="text-white font-medium mb-3">Grafik Data yang Menyajikan Informasi dengan Lebih Mudah di Dashboard</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img 
                            src={sectionTigaPhoto} 
                            alt="Foto Jelajahi Sentimen"
                            className="w-full h-auto md:max-w-md"
                        />
                    </div>
                </div>

                {/* Layanan Kami */}
                <div>
                    <h4 className="text-[#BFE95E] text-2xl font-medium text-center m-2">Analisis Sentimen yang Menjelaskan Emosi</h4>
                    <h2 className="text-white text-3xl font-bold text-center m-2">Layanan Kami</h2>
                    <p className="text-white text-center m-2">Kami Menggunakan  analisis sentimen dari berbagai platform, termasuk Youtube, berita, dan Ulasan  
                    Play Store, <br /> untuk memahami respons  pengguna secara menyeluruh</p>

                    <div className="flex items-center justify-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full md:w-1/3 p-4">
                                <div className="rounded-3xl bg-white bg-opacity-25 p-6 h-full">
                                    <FaYoutube className="text-4xl text-[#BFE95E] mb-4" />
                                    <p className="text-white text-xl font-semibold mb-2">Youtube</p>
                                    <p className="text-white">Kami menganalisis sentimen dari komentar pengguna di platform Youtube untuk memahami respons dan umpan balik pengguna dengan lebih baik.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4">
                                <div className="rounded-3xl bg-white bg-opacity-25 p-6 h-full">
                                    <FaGooglePlay className="text-4xl text-[#BFE95E] mb-4" />
                                    <p className="text-white text-xl font-semibold mb-2">Playstore</p>
                                    <p className="text-white">Sentimen dari Riview Pengguna Play Store memberikan pandangan mendalam tentang kepuasan dan pengalaman pengguna. Kami terus memperhatikan umpan balik ini untuk terus meningkatkan layanan dan produk.</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4">
                                <div className="rounded-3xl bg-white bg-opacity-25 p-6 h-full">
                                    <HiOutlineNewspaper className="text-4xl text-[#BFE95E] mb-4" />
                                    <p className="text-white text-xl font-semibold mb-2">Berita</p>
                                    <p className="text-white">Sentimen dari berita utama menjad sumber wawasan penting bagi kami. Dengan memahami respons publik terhadap berita terkini, kami dapat merancang langkah langkah yang responsif dan sesuai dengan kebutuhan saat ini.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Section 4 */}
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/2 p-4">
                        <img 
                            src={fotoEmpat} 
                            alt=""
                            className="w-full h-auto md:max-w-md" 
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <p className="text-[#BFE95E] text-2xl font-medium mb-2">Menguak Perasaan di Balik Kata-Kata</p>
                        <h2 className="text-white text-3xl font-bold pb-2">Mari Bergabung dengan Reflective AI Kami, Kunci Pemahaman Emosi Anda</h2>
                        <p className="text-white">Di dunia yang penuh dengan data, memahami emosi di balik kata-kata adalah kunci untuk membuat keputusan yang lebih 
                        cerdas dan lebih terinformasi.Reflective hadir untuk memberikan wawasan mendalam melalui 
                        teknologi analisis sentimen AI tercanggih.</p>

                        <div className="rounded-3xl bg-white bg-opacity-25 p-6 mt-4">
                            <div className="flex flex-wrap items-center justify-between">
                                <div className="w-full md:w-1/2 p-4">
                                    <p className="text-white text-xl font-semibold mb-2">Visualisasi Data Reflective</p>
                                    <p className="text-white">Nikmati visualisasi data yang intuitif dan mudah dipahami.</p>
                                </div>
                                <div className="w-full md:w-1/2 p-4">
                                    <p className="text-white text-xl font-semibold mb-2">Akurasi Tinggi Reflective</p>
                                    <p className="text-white">Sentimen dengan tingkat akurasi yang tak tertandingi.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/2 p-4">
                        <p className="text-[#BFE95E] text-2xl font-medium mb-2">AI Kami, Kunci Pemahaman Strategi Anda</p>
                        <h2 className="text-white text-3xl font-bold pb-2">Siapa yang Bisa Mendapatkan Manfaat Reflective?</h2>
                        <p className="text-white">Dengan memanfaatkan teknologi AI terbaru, Reflective menganalisis teks dari berbagai sumber, 
                        termasuk media sosial, ulasan pelanggan, dan umpan balik karyawan, untuk mengidentifikasi dan mengukur emosi yang diekspresikan. 
                        Hasilnya? Wawasan yang lebih dalam dan dapat ditindaklanjuti untuk meningkatkan strategi bisnis Anda.</p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                    <img 
                        src={fotoLima} 
                        alt="" 
                        // className="w-full h-auto md:max-w-md"
                    />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}