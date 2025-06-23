"use client";

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  whatsapp: string;
  shopee: string;
  tokopedia: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "VITABUNDA",
    description: "Nutrisi untuk ibu & bayi. Meningkatkan imun dan kecerdasan.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750513261/vitabunda_gk9nrg.jpg",
    whatsapp: "https://wa.me/6289673331585",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
  },
  {
    id: 2,
    name: "JAHE JERUK NIPIS",
    description: "Meningkatkan kebugaran, batuk & mencegah masuk angin.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/jahejeruk_ji55gf.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
  },
  {
    id: 3,
    name: "JAHE INSTAN",
    description: "Meredakan batuk dan menghangatkan tubuh.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750513032/jaheinstan_ii2mdz.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
  },
  {
    id: 4,
    name: "KUNYIT JERUK NIPIS",
    description: "Menyehatkan dan menyegarkan tubuh.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/kunyitjeruk_adz3xk.jpg",
    whatsapp: "https://wa.me/6281234567890",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
  },
  {
    id: 5,
    name: "DAUN SIRSAK",
    description: "Menjaga imun dan efektif melawan sel kanker.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750512901/daunsirsak_lojl0a.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
  },
  {
    id: 6,
    name: "ROSELLA",
    description: "Tinggi antioksidan untuk kesehatan tubuh.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750512902/rosella_cya5jg.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
  },
  {
    id: 7,
    name: "DAUN JATI CINA",
    description: "Melancarkan BAB dan membantu mengurangi lemak.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750512901/jaticina_lhozyw.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
  },
  {
  id: 8,
    name: "TISERA (Teh Jahe Serai)",
    description: "Detoksifikasi, menyegarkan, dan bantu tidur nyenyak.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/tisera_ibmnou.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
   {
    id: 9,
    name: "DAUN KELOR",
    description: "Tinggi antioksidan, vitamin, dan protein alami.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/daunkelorcelup_abiywk.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
   {
    id: 10,
    name: "WEDANG UWUH",
    description: "Mengontrol kolesterol, flu, dan hangatkan badan.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435597/wedanguwuh_yt4yio.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
   {
    id: 11,
    name: "WEDANG JANGKEP",
    description: "Pencernaan, imun, haid, nafsu makan & antioksidan.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/wedangjangkep_askqp6.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
   {
    id: 12,
    name: "GOLDEN LATTE",
    description: "Tinggi antioksidan, nafsu makan & turunkan kolesterol.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750432862/goldenlatte_soude9.jpg",
    whatsapp: "https://wa.me/6281234567890",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
   {
    id: 13,
    name: "JAHE INSTAN (SACHET)",
    description: "Praktis, hangatkan tubuh & bantu redakan batuk.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/jaheinstan_uzgzo9.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
   {
    id: 14,
    name: "KUNYIT JERUK NIPIS (SACHET)",
    description: "Tinggi vitamin, cocok untuk kemasan praktis.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/kunyitjeruk_adz3xk.jpg",
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
   {
    id: 15,
    name: "WEDANG JANGKEP (SACHET)",
    description: "Kesehatan pencernaan dan peningkat imun harian.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/wedangjangkep_askqp6.jpg", 
    whatsapp: "https://wa.me/6287822108775",
    shopee: "https://s.shopee.co.id/9zm8JqZYVk",
    tokopedia: "https://www.tokopedia.com/dewitiherbs",
   },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div className="p-6 text-white-600">Produk tidak ditemukan.</div>;
  }

  return (
    <main className="p-6 text-white-800">
      <Link href="/" className="text-white-600 hover:underline mb-4 block">
        ← Kembali ke Beranda
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-white-700">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md mb-4 rounded-xl shadow"
      />
      <p className="mb-6">{product.description}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={product.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-white-600 text-white px-6 py-3 rounded-lg text-center"
        >
          💬 Chat via WhatsApp
        </a>
        <a
          href={product.shopee}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-center"
        >
          🛍️ Beli di Shopee
        </a>
        <a
          href={product.tokopedia}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-center"
        >
          🛒 Lihat di Tokopedia
        </a>
      </div>
    </main>
  );
}
