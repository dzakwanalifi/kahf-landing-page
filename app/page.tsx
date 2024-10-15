'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Star, ShoppingCart, Menu, X, ChevronDown, ChevronUp, Instagram, Twitter, Droplet, Shield, Zap, Leaf, Wind, Sparkles, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const Slider = dynamic(() => import("react-slick").then((mod) => mod.default), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function KahfLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'testimonials']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const featuredProduct = {
    name: "Kahf Oil and Acne Care Face Wash 100 ml",
    price: 40375,
    originalPrice: 42500,
    sold: "50 ribu+",
    rating: 4.9,
    reviews: 23000,
    image: "/kahf-face-wash.png",
    description: "Sabun pembersih wajah dengan kandungan HydroBalance dan Pure Cleanse menjadikan wajah bersih dan lembap secara menyeluruh. Diperkaya dengan ekstrak Mediterranean Sage dan French Cypress yang dapat membantu melawan jerawat.",
    benefits: [
      "Membuat kulit terasa lembab dan halus",
      "Membersihkan kulit dari kotoran hingga ke pori-pori",
      "Membantu melawan jerawat"
    ],
    ingredients: [
      "Mediterranean Sage: Mengurangi dan mencegah timbulnya jerawat baru serta mengurangi kemerahan dan iritasi pada jerawat",
      "French Cypress: Mengurangi minyak berlebih sehingga membuat wajah bebas kilap",
      "HydroBalance: Menjaga kelembapan alami kulit dan tidak membuat kulit kering",
      "Pure Cleanse: Mampu membersihkan kulit hingga ke pori-pori"
    ],
    usage: [
      "Bilas wajah dengan air hangat sebelum menggunakan produk agar pori-pori wajah terbuka",
      "Oleskan pada wajah hingga merata",
      "Tunggu antara 30 detik - 1 menit",
      "Bilas wajah dengan air dingin hingga bersih",
      "Untuk hasil yang maksimal, kombinasikan penggunaan dengan produk lain seperti Kahf Triple Protection Sunscreen & Moisturizer"
    ],
    link: "https://tokopedia.link/4dQXCMKNGNb",
    images: [
      "/kahf-face-wash.png",
      "/kahf-face-wash-2.jpg",
      "/kahf-face-wash-3.jpg",
      "/kahf-face-wash-4.jpg"
    ],
    video: "/kahf-face-wash-video.mp4"
  }

  const products = [
    {
      name: "Kahf Paket Merah Putih Isi 4- Face Wash,Body Wash,Sunscreen,Deodorant",
      price: 110946,
      originalPrice: 135300,
      sold: "3 ribu+",
      rating: 4.9,
      reviews: 1513,
      image: "/kahf-paket-merah-putih.png",
      link: "https://tokopedia.link/BSDlnJN0GNb"
    },
    {
      name: "Kahf Revered Oud Eau de Toilette 35 ml",
      price: 74520,
      originalPrice: 81000,
      sold: "50 ribu+",
      rating: 4.9,
      reviews: 46300,
      image: "/kahf-eau-de-toilette.png",
      link: "https://tokopedia.link/x2P4QTw0GNb"
    },
    {
      name: "Kahf Triple+ Protection Sunscreen Moisturizer SPF 30 PA+++ 30 ml",
      price: 40185,
      originalPrice: 42300,
      sold: "10 ribu+",
      rating: 4.9,
      reviews: 17200,
      image: "/kahf-sunscreen.jpg",
      link: "https://tokopedia.link/WbnIHJx0GNb"
    },
    {
      name: "Kahf Oil and Acne Care Face Wash 100 ml Twin Pack",
      price: 76500,
      originalPrice: 85000,
      sold: "10 ribu+",
      rating: 4.9,
      reviews: 7790,
      image: "/kahf-face-wash-twin.jpg",
      link: "https://tokopedia.link/nIzMyAy0GNb"
    },
    {
      name: "Kahf Antiperspirant Deodorant Roll On 45 ml - Clean Fresh",
      price: 21375,
      originalPrice: 22500,
      sold: "10 ribu+",
      rating: 5.0,
      reviews: 5660,
      image: "/kahf-deodorant.png",
      link: "https://tokopedia.link/M2Mpkiz0GNb"
    }
  ]

  const testimonials = [
    {
      name: "Ricky Harun",
      role: "Aktor",
      testimonial: "Sejak pakai Kahf Oil and Acne Face Wash, jerawatku berkurang drastis dan kulit terasa segar setiap hari!",
      image: "/testimonial.jpg"
    },
    {
      name: "Adi Pratama",
      role: "Pengusaha",
      testimonial: "Wajah jadi bersih dan bebas kilap. Cocok banget buat aktivitas sehari-hari yang padat!",
      image: "/testimonial.jpg"
    },
    {
      name: "Budi Santoso",
      role: "Atlet",
      testimonial: "Produk yang aman dan efektif. Kulit wajah jadi lebih sehat dan terlindungi.",
      image: "/testimonial.jpg"
    },
    {
      name: "Denny Sumargo",
      role: "Atlet & Aktor",
      testimonial: "Kahf adalah pilihan tepat untuk pria aktif. Produknya berkualitas dan hasil perawatannya terlihat jelas!",
      image: "/testimonial.jpg"
    }
  ]

  const faqs = [
    {
      question: "Apakah produk Kahf cocok untuk semua jenis kulit?",
      answer: "Ya, produk Kahf dirancang untuk cocok dengan berbagai jenis kulit pria. Namun, kami selalu menyarankan untuk melakukan patch test terlebih dahulu, terutama jika Anda memiliki kulit sensitif."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk melihat hasil?",
      answer: "Hasil dapat bervariasi tergantung pada individu dan produk yang digunakan. Namun, banyak pengguna melaporkan perubahan positif dalam 2-4 minggu penggunaan rutin."
    },
    {
      question: "Apakah produk Kahf halal?",
      answer: "Ya, semua produk Kahf telah mendapatkan sertifikasi halal dari LPPOM MUI."
    },
    {
      question: "Bagaimana cara memesan produk Kahf?",
      answer: "Anda dapat memesan produk Kahf melalui website resmi kami, marketplace resmi Kahf, atau mengunjungi toko-toko ritel yang menjual produk Kahf."
    },
    {
      question: "Apakah Kahf menawarkan garansi atau kebijakan pengembalian?",
      answer: "Ya, kami menawarkan garansi kepuasan. Jika Anda tidak puas dengan produk Kahf, Anda dapat mengembalikannya dalam waktu 30 hari setelah pembelian dengan syarat dan ketentuan yang berlaku."
    }
  ]

  // Konfigurasi untuk react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: false,
  };

  return (
    <div className="min-h-screen bg-white text-kahf-secondary">
      {/* Fixed CTA and Header */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* New CTA Section */}
        <div className="bg-kahf-primary text-white py-2">
          <div className="container">
            <p className="text-sm md:text-base text-center">
              Lebih hemat beli 2! Dapatkan Kahf Oil and Acne Care Face Wash Twin Pack{' '}
              <a
                href="https://tokopedia.link/nIzMyAy0GNb"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold hover:text-gray-200 transition-colors"
              >
                di sini
              </a>
            </p>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container py-4 flex justify-between items-center">
            <Image src="/kahf-logo.png" alt="Kahf Logo" width={100} height={40} />
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {['Home', 'Products', 'About', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`text-[#3c4536] hover:text-[#4f553d] transition-colors ${
                        activeSection === item.toLowerCase() ? 'font-bold' : ''
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="md:hidden text-kahf-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMounted && (
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-white shadow-lg"
              >
                <nav className="container py-4">
                  <ul className="space-y-4">
                    {['Home', 'Products', 'About', 'Testimonials'].map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => {
                            scrollToSection(item.toLowerCase());
                            setIsMenuOpen(false);
                          }}
                          className={`text-[#3c4536] hover:text-[#4f553d] transition-colors ${
                            activeSection === item.toLowerCase() ? 'font-bold' : ''
                          }`}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-kahf-primary to-kahf-secondary text-white pt-32"> {/* Ubah pt-32 sesuai kebutuhan */}
        <div className="container py-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Temukan Kesempurnaan Perawatan Pria dengan Kahf
              </h1>
              <p className="text-xl mb-8">
                Solusi lengkap untuk penampilan maksimal pria modern. Dari perawatan wajah hingga aroma personal yang memikat.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('products')}
                className="bg-white text-[#4f553d] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Jelajahi Produk Kami
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <Image src="/kahf-hero-image.jpg" alt="Kahf Product Collection" width={600} height={400} className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="products" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Produk Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{featuredProduct.name}</h3>
              <p className="text-lg mb-4">{featuredProduct.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-[#4f553d] mr-2">Rp{featuredProduct.price.toLocaleString()}</span>
                <span className="text-lg line-through text-gray-500">Rp{featuredProduct.originalPrice.toLocaleString()}</span>
                <span className="ml-2 bg-[#4f553d] text-white px-2 py-1 rounded-full text-sm">Hemat 5%</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="ml-1 text-lg font-semibold">{featuredProduct.rating}</span>
                <span className="ml-2 text-gray-600">({featuredProduct.reviews.toLocaleString()} ulasan)</span>
              </div>
              <p className="text-gray-600 mb-6">Terjual: {featuredProduct.sold}</p>
              <motion.a
                href={featuredProduct.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#4f553d] text-white px-6 py-2 rounded-full hover:bg-[#3c4536] transition duration-300"
              >
                <ShoppingCart className="w-5 h-5 inline-block mr-2" />
                Beli Sekarang
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto" // Tambahkan max-width dan center
            >
              {typeof window !== 'undefined' && (
                <Slider {...sliderSettings}>
                  {featuredProduct.images.map((image, index) => (
                    <div key={index} className="outline-none aspect-square">
                      <Image 
                        src={image} 
                        alt={`${featuredProduct.name} - Image ${index + 1}`} 
                        width={400} 
                        height={400} 
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                      />
                    </div>
                  ))}
                  <div className="outline-none aspect-square">
                    <video
                      src={featuredProduct.video}
                      controls
                      className="w-full h-full rounded-lg shadow-lg object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Slider>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manfaat Utama Section */}
      <section className="py-20 px-4 md:px-8 bg-kahf-primary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Manfaat Utama</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {featuredProduct.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-kahf-secondary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <Droplet className="w-12 h-12 text-kahf-primary mr-3" />}
                  {index === 1 && <Shield className="w-12 h-12 text-kahf-primary mr-3" />}
                  {index === 2 && <Zap className="w-12 h-12 text-kahf-primary mr-3" />}
                </div>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kandungan Utama Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Kandungan Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProduct.ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {index === 0 && <Leaf className="w-10 h-10 text-kahf-primary mr-4 flex-shrink-0" />}
                {index === 1 && <Wind className="w-10 h-10 text-kahf-primary mr-4 flex-shrink-0" />}
                {index === 2 && <Droplet className="w-10 h-10 text-kahf-primary mr-4 flex-shrink-0" />}
                {index === 3 && <Sparkles className="w-10 h-10 text-kahf-primary mr-4 flex-shrink-0" />}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{ingredient.split(':')[0]}</h3>
                  <p>{ingredient.split(':')[1]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Penggunaan Section */}
      <section className="py-20 px-4 md:px-8 bg-kahf-primary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Cara Penggunaan</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 text-kahf-secondary">
            <ol className="space-y-6">
              {featuredProduct.usage.map((step, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="flex items-center justify-center bg-kahf-primary text-white rounded-full w-10 h-10 mr-4 flex-shrink-0 text-lg font-bold">
                    {index + 1}
                  </span>
                  <p className="text-lg mt-1">{step}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Kahf Product Collection */}
      {isMounted && (
        <section className="py-20 px-4 md:px-8">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">Koleksi Produk Kahf</h2>
            <div className="relative">
              <div
                ref={productsRef}
                className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory"
              >
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-64 snap-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                        <div className="h-64 overflow-hidden">
                          <Image src={product.image} alt={product.name} width={256} height={256} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                          <div className="flex items-center mb-2">
                            <span className="text-xl font-bold text-[#4f553d] mr-2">Rp{product.price.toLocaleString()}</span>
                            <span className="text-sm line-through text-gray-500">Rp{product.originalPrice.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center mt-auto">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm">{product.rating}</span>
                            <span className="ml-2 text-xs text-gray-500">({product.reviews.toLocaleString()} ulasan)</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Apa Kata Mereka?</h2>
          <div className="relative">
            <div
              ref={testimonialsRef}
              className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 snap-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="rounded-full mr-4" />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">&quot;{testimonial.testimonial}&quot;</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-[#4f553d]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#4f553d]" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-kahf-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Punya Pertanyaan atau Ingin Konsultasi?</h2>
          <p className="text-xl mb-8">Hubungi admin kami sekarang untuk mendapatkan bantuan dan informasi lebih lanjut tentang produk Kahf!</p>
          <motion.a
            href="https://wa.me/6285156160672"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-kahf-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hubungi Admin via WhatsApp
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kahf-secondary text-white py-10 px-4 md:px-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PT Paragon Technology and Innovation</h3>
              <h4 className="text-md font-semibold mb-2">PARAGON CUSTOMER CENTER</h4>
              <p className="mb-2">Call Center: +62 804-140-1123</p>
              <p>Whatsapp: +62 878-7286-5383</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <p className="mb-2">Feel free to get in touch with us via email</p>
              <a href="mailto:info@kahfeveryday.com" className="hover:underline">info@kahfeveryday.com</a>
              <div className="mt-4 flex space-x-4">
                <a href="https://instagram.com/kahfeveryday" className="hover:text-gray-300" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/kahfeveryday" className="hover:text-gray-300" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://github.com/dzakwanalifi/kahf-landing-page" className="hover:text-gray-300" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Kahf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}