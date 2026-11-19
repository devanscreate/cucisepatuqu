export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  eta: string;
  description: string;
  isPopular: boolean;
}

export const services: ServiceItem[] = [
  {
    id: 'fast-clean',
    name: 'Fast Clean',
    price: 30000,
    priceLabel: 'Rp30.000',
    eta: '1 Hari',
    description: 'Cuci cepat bagian upper & midsole, cocok untuk kotoran ringan.',
    isPopular: false,
  },
  {
    id: 'deep-clean',
    name: 'Deep Clean',
    price: 50000,
    priceLabel: 'Rp50.000',
    eta: '2–3 Hari',
    description:
      'Cuci menyeluruh luar-dalam + deodorizer. Aman untuk suede, mesh, dan canvas.',
    isPopular: true,
  },
  {
    id: 'unyellowing',
    name: 'Unyellowing',
    price: 65000,
    priceLabel: 'Rp65.000',
    eta: '3 Hari',
    description: 'Menghilangkan noda kuning oksidasi pada midsole.',
    isPopular: false,
  },
  {
    id: 'reglue',
    name: 'Reglue',
    price: 45000,
    priceLabel: 'Mulai Rp45.000',
    eta: '3–4 Hari',
    description: 'Perbaikan lem ulang sol yang menganga atau lepas.',
    isPopular: false,
  },
  {
    id: 'repaint',
    name: 'Repaint',
    price: 120000,
    priceLabel: 'Mulai Rp120.000',
    eta: '5–7 Hari',
    description: 'Cat ulang warna upper yang pudar agar kembali pekat.',
    isPopular: false,
  },
];
