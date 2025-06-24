import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-800 p-6">
      {/* Tidak ada tombol keranjang */}

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">Dewiti Herbs</h1>
        <p className="text-lg mt-2">Segar Bugar Bersama Dewiti 🍃</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Produk Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/produk/${product.id}`}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition block"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

// Daftar produk (pastikan semua image valid)
const products = [
 {
    id: 1,
    name: "VITABUNDA",
    description: "Nutrisi untuk ibu & bayi. Meningkatkan imun dan kecerdasan.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750513261/vitabunda_gk9nrg.jpg", // harus disimpan di /public/images/
  },
  {
    id: 2,
    name: "JAHE JERUK NIPIS",
    description: "Meningkatkan kebugaran, batuk & mencegah masuk angin.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/jahejeruk_ji55gf.jpg",
  },
  {
    id: 3,
    name: "JAHE INSTAN",
    description: "Meredakan batuk dan menghangatkan tubuh.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750513032/jaheinstan_ii2mdz.jpg",
  },
  {
    id: 4,
    name: "KUNYIT JERUK NIPIS",
    description: "Menyehatkan dan menyegarkan tubuh.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/kunyitjeruk_adz3xk.jpg",
  },
  {
    id: 5,
    name: "DAUN SIRSAK",
    description: "Menjaga imun dan efektif melawan sel kanker.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750512901/daunsirsak_lojl0a.jpg",
  },
  {
    id: 6,
    name: "ROSELLA",
    description: "Tinggi antioksidan untuk kesehatan tubuh.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750512902/rosella_cya5jg.jpg",
  },
  {
    id: 7,
    name: "DAUN JATI CINA",
    description: "Melancarkan BAB dan membantu mengurangi lemak.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750512901/jaticina_lhozyw.jpg",
  },
  {
    id: 8,
    name: "TISERA (Teh Jahe Serai)",
    description: "Detoksifikasi, menyegarkan, dan bantu tidur nyenyak.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/tisera_ibmnou.jpg",
  },
  {
    id: 9,
    name: "DAUN KELOR",
    description: "Tinggi antioksidan, vitamin, dan protein alami.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/daunkelorcelup_abiywk.jpg",
  },
  {
    id: 10,
    name: "WEDANG UWUH",
    description: "Mengontrol kolesterol, flu, dan hangatkan badan.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435597/wedanguwuh_yt4yio.jpg",
  },
  {
    id: 11,
    name: "WEDANG JANGKEP",
    description: "Pencernaan, imun, haid, nafsu makan & antioksidan.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/wedangjangkep_askqp6.jpg",
  },
  {
    id: 12,
    name: "GOLDEN LATTE",
    description: "Tinggi antioksidan, nafsu makan & turunkan kolesterol.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750432862/goldenlatte_soude9.jpg",
  },
  {
    id: 13,
    name: "JAHE INSTAN (SACHET)",
    description: "Praktis, hangatkan tubuh & bantu redakan batuk.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/jaheinstan_uzgzo9.jpg",
  },
  {
    id: 14,
    name: "KUNYIT JERUK NIPIS (SACHET)",
    description: "Tinggi vitamin, cocok untuk kemasan praktis.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/kunyitjeruk_adz3xk.jpg",
  },
  {
    id: 15,
    name: "WEDANG JANGKEP (SACHET)",
    description: "Kesehatan pencernaan dan peningkat imun harian.",
    image: "https://res.cloudinary.com/dnxnpudcs/image/upload/v1750435596/wedangjangkep_askqp6.jpg", // ganti link ini jika kamu sudah punya di Cloudinary
  },
];
