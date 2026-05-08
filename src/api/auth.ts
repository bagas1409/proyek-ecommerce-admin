import api from './axios'
import type { LoginResponse } from '@/types'

export const authService = {
    login: async (email: string, password: string): Promise<LoginResponse> => {
        const response = await api.post<LoginResponse>('/auth/login', { email, password })
        return response.data
    },

    getProfile: async () => {
        const response = await api.get('/me')
        return response.data
    },
}
