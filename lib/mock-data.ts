import type {
  Benefit,
  CardMovement,
  Coupon,
  CustomerCardData,
  FavoritePlace,
  PaymentMethod,
  Ride,
  SupportTicket,
  User,
} from "@/types";

export const mockUser: User = {
  id: "u_001",
  name: "Juan Carlos García",
  email: "juancar.garciap@gmail.com",
  phone: "+57 300 456 7890",
  memberSince: "Marzo 2023",
  cardLevel: "Gold",
};

export const mockCustomerCard: CustomerCardData = {
  number: "4829",
  level: "Gold",
  balance: 124350,
  points: 3240,
  cashback: 18750,
  progressToNext: 68,
  nextLevel: "Plus",
};

export const mockRides: Ride[] = [
  {
    id: "r_001",
    origin: "Calle 93 #12-45",
    destination: "Aeropuerto El Dorado",
    date: "12 May 2026",
    time: "07:42",
    cost: 48500,
    status: "completed",
    tier: "comfort",
    driver: {
      name: "Andrés Morales",
      rating: 4.92,
      vehicle: "Mazda 3 Gris",
      plate: "JKR-487",
    },
    distanceKm: 22.4,
    durationMin: 38,
  },
  {
    id: "r_002",
    origin: "Centro Comercial Andino",
    destination: "Cra 7 #45-12",
    date: "11 May 2026",
    time: "20:15",
    cost: 18200,
    status: "completed",
    tier: "economy",
    driver: {
      name: "Daniela Ruiz",
      rating: 4.85,
      vehicle: "Chevrolet Onix Blanco",
      plate: "LTR-902",
    },
    distanceKm: 6.7,
    durationMin: 19,
  },
  {
    id: "r_003",
    origin: "Oficina · Zona T",
    destination: "Restaurante Criterion",
    date: "10 May 2026",
    time: "13:05",
    cost: 22300,
    status: "cancelled",
    tier: "executive",
    driver: {
      name: "Camilo Torres",
      rating: 4.97,
      vehicle: "Audi A4 Negro",
      plate: "EXC-115",
    },
    distanceKm: 4.2,
    durationMin: 14,
  },
  {
    id: "r_004",
    origin: "Casa",
    destination: "Universidad de los Andes",
    date: "08 May 2026",
    time: "06:50",
    cost: 14800,
    status: "completed",
    tier: "economy",
    driver: {
      name: "Sofía Patiño",
      rating: 4.78,
      vehicle: "Renault Logan Plateado",
      plate: "MQT-330",
    },
    distanceKm: 5.1,
    durationMin: 17,
  },
  {
    id: "r_005",
    origin: "Hotel Tequendama",
    destination: "Aeropuerto El Dorado",
    date: "Hoy",
    time: "Ahora",
    cost: 0,
    status: "in_progress",
    tier: "comfort",
    driver: {
      name: "Mateo Herrera",
      rating: 4.9,
      vehicle: "Kia Cerato Blanco",
      plate: "GTH-781",
    },
    distanceKm: 18.6,
    durationMin: 32,
  },
];

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "pm_001",
    type: "credit",
    brand: "Visa",
    last4: "4821",
    expiry: "08/28",
    isDefault: true,
  },
  {
    id: "pm_002",
    type: "debit",
    brand: "Mastercard",
    last4: "9032",
    expiry: "11/27",
  },
  {
    id: "pm_003",
    type: "wallet",
    brand: "OfficeRide",
    last4: "4829",
    expiry: "—",
  },
];

export const mockCoupons: Coupon[] = [
  {
    id: "c_001",
    code: "MOVE20",
    title: "20% en tus próximos 3 viajes",
    description: "Aplica de lunes a viernes hasta las 18:00",
    discount: "-20%",
    expiresAt: "31 May 2026",
  },
  {
    id: "c_002",
    code: "AIRPORT15",
    title: "15% en viajes al aeropuerto",
    description: "Para viajes Comfort y Ejecutivo",
    discount: "-15%",
    expiresAt: "15 Jun 2026",
  },
  {
    id: "c_003",
    code: "WEEKEND10",
    title: "10% fines de semana",
    description: "Sábados y domingos en categoría Económico",
    discount: "-10%",
    expiresAt: "30 Jun 2026",
  },
];

export const mockBenefits: Benefit[] = [
  {
    id: "b_001",
    title: "10% en viajes seleccionados",
    description: "Descuento automático en rutas frecuentes",
    icon: "Percent",
  },
  {
    id: "b_002",
    title: "Prioridad en horas pico",
    description: "Conductores disponibles antes que clientes estándar",
    icon: "Zap",
  },
  {
    id: "b_003",
    title: "Soporte preferente",
    description: "Atención dedicada en menos de 2 minutos",
    icon: "Headphones",
  },
  {
    id: "b_004",
    title: "Cupones mensuales",
    description: "Nuevos cupones cada mes según tu nivel",
    icon: "Ticket",
  },
];

export const mockMovements: CardMovement[] = [
  {
    id: "m_001",
    type: "topup",
    description: "Recarga desde Visa **** 4821",
    amount: 50000,
    date: "13 May 2026 · 09:14",
  },
  {
    id: "m_002",
    type: "ride",
    description: "Viaje · Centro Andino → Cra 7",
    amount: -18200,
    date: "11 May 2026 · 20:32",
  },
  {
    id: "m_003",
    type: "cashback",
    description: "Cashback Gold · 3%",
    amount: 546,
    date: "11 May 2026 · 20:33",
  },
  {
    id: "m_004",
    type: "coupon",
    description: "Cupón MOVE20 aplicado",
    amount: 4200,
    date: "09 May 2026 · 18:02",
  },
  {
    id: "m_005",
    type: "ride",
    description: "Viaje · Casa → Universidad",
    amount: -14800,
    date: "08 May 2026 · 07:08",
  },
];

export const mockFavoritePlaces: FavoritePlace[] = [
  {
    id: "f_001",
    label: "Casa",
    address: "Calle 93 #12-45, Bogotá",
    icon: "home",
  },
  {
    id: "f_002",
    label: "Trabajo",
    address: "Zona T, Cra 13 #82-50",
    icon: "work",
  },
  {
    id: "f_003",
    label: "Aeropuerto",
    address: "Aeropuerto El Dorado",
    icon: "airport",
  },
  {
    id: "f_004",
    label: "Centro Comercial",
    address: "Centro Andino, Cra 11 #82",
    icon: "shop",
  },
];

export const mockTickets: SupportTicket[] = [
  {
    id: "t_001",
    subject: "Cobro duplicado en viaje del 09 May",
    status: "in_review",
    createdAt: "10 May 2026",
    preview: "Hola, vi un cargo doble por el viaje de la noche del viernes...",
  },
  {
    id: "t_002",
    subject: "Olvidé una mochila en el vehículo",
    status: "resolved",
    createdAt: "02 May 2026",
    preview: "El conductor me contactó y pudimos coordinar la entrega...",
  },
];

export const mockFaqs: { q: string; a: string }[] = [
  {
    q: "¿Cómo recargo mi OfficeRide?",
    a: "Desde la sección Wallet o desde la tarjeta digital. Soportamos tarjetas Visa, Mastercard y transferencias bancarias.",
  },
  {
    q: "¿Qué pasa si cancelo un viaje?",
    a: "Si cancelas dentro de los primeros 2 minutos no hay cargo. Después se aplica una tarifa mínima.",
  },
  {
    q: "¿Cómo subo de nivel?",
    a: "Acumula puntos viajando. Cada $1.000 = 1 punto. Al llegar al objetivo del nivel, subes automáticamente.",
  },
  {
    q: "¿Puedo programar un viaje?",
    a: "Sí, desde la pantalla principal selecciona tu destino y elige la opción 'Programar' antes de confirmar.",
  },
  {
    q: "¿Cómo reporto un objeto perdido?",
    a: "Entra a Soporte > Objeto perdido y selecciona el viaje. Te contactaremos con el conductor.",
  },
];
