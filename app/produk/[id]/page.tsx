"use client";

import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  whatsapp: string;
  shopee: string;
  tokopedia: string;
}

// [... data produk kamu tetap di sini, tidak saya ulangi agar hemat ruang ...]

const products: Product[] = [ /* ... data produk tetap ... */ ];

export default function ProductDetail({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div className="p-6 text-red-600">Produk tidak ditemukan.</div>;
  }

  return (
    <main className="p-6 text-gray-800">
      <Link href="/" className="text-green-600 hover:underline mb-4 block">
        ← Kembali ke Beranda
      </Link>

      <h1 className="text-3xl font-bold mb-4 text-green-700">{product.name}</h1>
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
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-center"
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
