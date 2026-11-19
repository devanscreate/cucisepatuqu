export interface TestimonialItem {
  name: string;
  area: string;
  shoeType: string;
  serviceUsed: string;
  quote: string;
}

export const testimonials: TestimonialItem[] = [
  {
    name: 'Raka P.',
    area: 'Tebet',
    shoeType: 'NB 574 Suede',
    serviceUsed: 'Deep Clean',
    quote:
      'Sebelum dikirim balik difotoin dulu hasilnya. Bulu suede tetap halus dan warna nggak luntur.',
  },
  {
    name: 'Nadia S.',
    area: 'Kuningan',
    shoeType: 'Kanvas Putih',
    serviceUsed: 'Deep Clean + Unyellowing',
    quote:
      'Tinggal titip di resepsionis kantor. 3 hari balik udah putih bersih lagi, midsole kuning jauh berkurang.',
  },
  {
    name: 'Fajar W.',
    area: 'Kemang',
    shoeType: 'Sepatu Lari Mesh',
    serviceUsed: 'Deep Clean',
    quote:
      'Habis kehujanan bau apek parah, sekarang hilang total. Jaring mesh juga aman, nggak ada yang ketarik.',
  },
];
