import { LucideIcon } from 'lucide-react';

export type ActivityType = 'transport' | 'food' | 'relax' | 'activity' | 'logistics' | 'leisure';

export interface ItineraryItem {
  time: string;
  title: string;
  detail: string;
  type: ActivityType;
}

export interface DaySchedule {
  date: string; // e.g., "1/22"
  label: string; // e.g., "Day 1"
  items: ItineraryItem[];
}

export interface FlightInfo {
  type: 'Departure' | 'Return';
  code: string;
  from: string;
  fromTime: string;
  to: string;
  toTime: string;
  seats: string;
}

export interface HotelInfo {
  name: string;
  period: string;
  nights: number;
  bookingId: string;
}

export interface CostItem {
  category: string;
  amount: number;
  detail: string;
  color: string;
}

export interface PlaceInfo {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  address: string;
}
