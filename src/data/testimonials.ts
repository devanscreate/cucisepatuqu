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
      'Awalnya ragu cuci suede karena pernah rusak di tempat lain. Di sini sebelum dikirim balik dikirimin foto hasilnya dulu, bulu suede-nya tetap halus dan warnanya nggak luntur.',
  },
  {
    name: 'Nadia S.',
    area: 'Kuningan',
    shoeType: 'Sneakers Kanvas Putih',
    serviceUsed: 'Deep Clean + Unyellowing',
    quote:
      'Praktis banget, tinggal titip di resepsionis kantor pas jam makan siang. 3 hari kemudian balik udah putih bersih lagi, bagian midsole kuningnya jauh berkurang.',
  },
  {
    name: 'Fajar W.',
    area: 'Kemang',
    shoeType: 'Sepatu Lari Mesh',
    serviceUsed: 'Deep Clean',
    quote:
      'Sepatu lari habis kehujanan jadi apek parah. Setelah masuk sini baunya hilang total, jaring mesh-nya juga nggak ada yang ketarik atau berbulu.',
  },
];
