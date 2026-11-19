export interface SiteConfig {
  brandName: string;
  whatsapp: string;
  serviceArea: string;
  address: string;
  hours: string;
  mapsEmbedUrl: string;
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    priceRange: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: 'KicksClean',
  whatsapp: '6281234567890',
  serviceArea: 'Jakarta Selatan & Sekitarnya',
  address: 'Jl. Contoh No. 12, Tebet, Jakarta Selatan',
  hours: 'Senin–Minggu, 09.00–20.00 WIB',
  /**
   * Cara pasang Google Maps Embed:
   * 1. Buka Google Maps dan cari alamat workshop Anda.
   * 2. Klik tombol "Bagikan" (Share) -> pilih tab "Sematkan peta" (Embed a map).
   * 3. Salin hanya isi atribut `src="..."` dari kode iframe yang muncul.
   * 4. Tempel URL tersebut (diawali https://www.google.com/maps/embed?pb=...) ke mapsEmbedUrl di bawah ini.
   */
  mapsEmbedUrl: '',
  seo: {
    title: 'KicksClean — Jasa Cuci Sepatu Antar-Jemput Jakarta Selatan',
    description:
      'Cuci sepatu manual yang aman untuk suede, nubuck, mesh, dan canvas. Praktis dengan layanan antar-jemput area Jakarta Selatan & sekitarnya.',
    siteUrl: 'https://kicksclean.id',
    priceRange: 'Rp30.000 - Rp120.000',
  },
};
