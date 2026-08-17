/**
 * TypeScript Data Models for Norden Haus Website Build
 * All media/images are intentionally omitted from these schemas.
 */

export interface SleepingArrangement {
  roomName: string;
  bedType: string;
  count: number;
  description?: string;
}

export interface AmenityCategory {
  category: string;
  items: string[];
}

export interface LocationHighlight {
  name: string;
  type: 'ski' | 'golf' | 'lake' | 'dining' | 'town' | 'nature' | 'winery';
  distanceDescription: string;
  estimatedDriveMinutes: number;
  description?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  stayDate?: string;
  rating: number; // 1-5 or 1-10 scaled to 5
  title?: string;
  comment: string;
  tripType?: string; // e.g. 'group', 'family', 'partner', 'solo'
  likedAspects?: string[];
  hostResponse?: {
    author: string;
    date: string;
    comment: string;
  };
  sentiment?: 'positive' | 'neutral' | 'negative' | 'mixed';
  sentimentScore?: number;
  aiTopics?: string[];
  language?: string;
}

export interface ReviewSummary {
  totalCount: number;
  averageRating: number;
  categoryRatings: {
    cleanliness: number;
    accuracy: number;
    communication: number;
    location: number;
    checkIn: number;
    value: number;
  };
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  sentimentBreakdown?: {
    positive: number;
    neutral: number;
    negative: number;
  };
  topKeywords?: string[];
}

export interface HouseRules {
  checkInTime: string;
  checkOutTime: string;
  selfCheckIn: boolean;
  maxGuests: number;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  partiesAllowed: boolean;
  quietHours?: string;
  additionalRules: string[];
}

export interface HostProfile {
  name: string;
  isSuperhost: boolean;
  responseRate?: string;
  responseTime?: string;
  about?: string;
  yearsHosting?: number;
}

export interface ListingWebsiteData {
  metadata: {
    listingId: string;
    sourceUrl: string;
    scrapedAt: string;
    version: string;
  };
  property: {
    title: string;
    tagline: string;
    propertyType: string;
    roomType: string;
    capacity: {
      guests: number;
      bedrooms: number;
      beds: number;
      bathrooms: number;
    };
    description: {
      shortSummary: string;
      fullAbout: string;
      theSpace: string;
      guestAccess: string;
      otherNotes: string;
      neighborhoodOverview: string;
      gettingAround: string;
    };
    highlights: string[];
    sleepingArrangements: SleepingArrangement[];
  };
  location: {
    name: string;
    resort: string;
    area: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
    nearbyAttractions: LocationHighlight[];
  };
  amenities: {
    highlighted: string[];
    categorized: AmenityCategory[];
    all: string[];
  };
  houseRules: HouseRules;
  host: HostProfile;
  reviews: {
    summary: ReviewSummary;
    items: ReviewItem[];
  };
}
