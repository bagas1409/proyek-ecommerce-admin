import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/auth/LoginPage'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import UsersPage from '@/pages/users/UsersPage'
import UMKMVerificationPage from '@/pages/umkm/UMKMVerificationPage'
import OrdersPage from '@/pages/orders/OrdersPage'
import DisputesPage from '@/pages/disputes/DisputesPage'
import AuditLogsPage from '@/pages/audit/AuditLogsPage'
import CategoriesPage from '@/pages/categories/CategoriesPage'
import WithdrawalsPage from '@/pages/finance/WithdrawalsPage'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, token, isLoading } = useAuth()

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-[var(--primary)] border-t-transparent"></div>
            </div>
        )
    }

    if (!token || !user) {
        return <Navigate to="/login" replace />
    }

    if (user.role !== 'ADMIN') {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/*"
                element={
                    <ProtectedRoute>
                        <MainLayout>
                            <Routes>
                                <Route path="/" element={<DashboardPage />} />
                                <Route path="/dashboard" element={<DashboardPage />} />
                                <Route path="/categories" element={<CategoriesPage />} />
                                <Route path="/users" element={<UsersPage />} />
                                <Route path="/umkm/verification" element={<UMKMVerificationPage />} />
                                <Route path="/orders" element={<OrdersPage />} />
                                <Route path="/withdrawals" element={<WithdrawalsPage />} />
                                <Route path="/disputes" element={<DisputesPage />} />
                                <Route path="/audit-logs" element={<AuditLogsPage />} />
                            </Routes>
                        </MainLayout>
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default App
