export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  eta: string;
  description: string;
  highlights: string[];
  isPopular: boolean;
}

export const services: ServiceItem[] = [
  {
    id: 'fast-clean',
    name: 'Fast Clean',
    price: 30000,
    priceLabel: 'Rp30.000',
    eta: '1 Hari',
    description: 'Cuci cepat bagian luar untuk kotoran ringan.',
    highlights: [
      'Upper & midsole',
      'Blower suhu ruang',
    ],
    isPopular: false,
  },
  {
    id: 'deep-clean',
    name: 'Deep Clean',
    price: 50000,
    priceLabel: 'Rp50.000',
    eta: '2–3 Hari',
    description: 'Cuci total luar-dalam + anti-bau. Aman untuk suede & mesh.',
    highlights: [
      'Upper, sol, insole & tali',
      'Deodorizer anti-bakteri',
      'Foto hasil WA + garansi 48 jam',
    ],
    isPopular: true,
  },
  {
    id: 'unyellowing',
    name: 'Unyellowing',
    price: 65000,
    priceLabel: 'Rp65.000',
    eta: '3 Hari',
    description: 'Hilangkan noda kuning oksidasi pada midsole.',
    highlights: [
      'Treatment midsole kuning',
      'Aman untuk tekstur karet',
    ],
    isPopular: false,
  },
  {
    id: 'reglue',
    name: 'Reglue',
    price: 45000,
    priceLabel: 'Mulai Rp45.000',
    eta: '3–4 Hari',
    description: 'Lem ulang sol yang menganga atau lepas.',
    highlights: [
      'Bersihkan sisa lem lama',
      'Lem lentur & press rapat',
    ],
    isPopular: false,
  },
  {
    id: 'repaint',
    name: 'Repaint',
    price: 120000,
    priceLabel: 'Mulai Rp120.000',
    eta: '5–7 Hari',
    description: 'Cat ulang warna upper pudar agar pekat lagi.',
    highlights: [
      'Cat khusus suede/canvas/kulit',
      'Konfirmasi warna via WA',
    ],
    isPopular: false,
  },
];
