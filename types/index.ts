export type RideStatus = "completed" | "cancelled" | "in_progress";

export type RideTier = "economy" | "comfort" | "executive";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  memberSince: string;
  cardLevel: CardLevel;
}

export type CardLevel = "Silver" | "Gold" | "Plus" | "Premium";

export interface Ride {
  id: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  cost: number;
  status: RideStatus;
  tier: RideTier;
  driver: {
    name: string;
    rating: number;
    vehicle: string;
    plate: string;
    avatarUrl?: string;
  };
  distanceKm: number;
  durationMin: number;
}

export interface PaymentMethod {
  id: string;
  type: "credit" | "debit" | "wallet";
  brand: string;
  last4: string;
  expiry: string;
  isDefault?: boolean;
}

export interface Coupon {
  id: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  expiresAt: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CardMovement {
  id: string;
  type: "topup" | "ride" | "cashback" | "coupon";
  description: string;
  amount: number;
  date: string;
}

export interface FavoritePlace {
  id: string;
  label: string;
  address: string;
  icon: "home" | "work" | "airport" | "shop" | "other";
}

export interface SupportTicket {
  id: string;
  subject: string;
  status: "open" | "in_review" | "resolved";
  createdAt: string;
  preview: string;
}

export interface CustomerCardData {
  number: string;
  level: CardLevel;
  balance: number;
  points: number;
  cashback: number;
  progressToNext: number;
  nextLevel: CardLevel;
}
