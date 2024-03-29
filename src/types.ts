export interface OpenCollectiveUser {
    memberID: number;
    createdAt: string;
    type: string;
    role: "ADMIN" | "BACKER";
    isActive: boolean;
    totalAmountDonated: number;
    currency: string;
    lastTransactionAt: string;
    lastTransactionAmount: number;
    profile: string;
    name: string;
    company: string;
    description: string;
    image: string;
    email: string;
    twitter: string;
    github: string;
    website: string;
}

export interface Server {
    hostname: string;
    location: Location;
    admin: {
        name: string;
        cc: string;
    };
}

export interface Location {
    name: string;
    cc: string;
    city: string;
}

export interface Link {
    title: string;
    url: string;
    description?: string;
}
