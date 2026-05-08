export interface User {
    id: number
    name: string
    email: string
    role: 'USER' | 'UMKM' | 'ADMIN'
    status?: 'ACTIVE' | 'BANNED'
    createdAt?: string
}

export interface LoginResponse {
    accessToken: string
    refreshToken: string
    user: User
}

export interface UMKMProfile {
    id: number
    userId: number
    storeName: string
    slug: string
    description?: string
    address?: string
    logoUrl?: string
    bannerUrl?: string
    ktpUrl?: string
    storePhotoUrl?: string
    status: 'PENDING' | 'ACTIVE' | 'REJECTED'
    createdAt?: string
}

export interface Order {
    id: number
    userId: number
    umkmId: number
    totalAmount: number
    status: 'PENDING' | 'PAID' | 'SHIPPED' | 'COMPLETED' | 'CANCELLED'
    paymentStatus: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED'
    createdAt?: string
    user?: User
    umkm?: UMKMProfile
}

export interface Dispute {
    id: number
    orderId: number
    userId: number
    reason: string
    status: 'OPEN' | 'RESOLVED'
    resolution?: 'REFUND' | 'RELEASE'
    createdAt?: string
    order?: Order
}

export interface AuditLog {
    id: number
    adminId: number
    action: string
    target: string
    targetId?: number
    details?: string
    createdAt?: string
}

export interface ApiError {
    message: string
    status?: number
}
