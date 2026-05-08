import { useEffect, useState } from 'react'
import { Users, Store, ShoppingCart, AlertTriangle } from 'lucide-react'
import { StatCard } from '@/components/ui/Card'
import { userService } from '@/api/user'
import { umkmService } from '@/api/umkm'
import { orderService } from '@/api/order'
import { disputeService } from '@/api/dispute'

interface Stats {
    totalUsers: number
    totalUmkm: number
    totalOrders: number
    totalDisputes: number
}

export default function DashboardPage() {
    const [stats, setStats] = useState<Stats>({
        totalUsers: 0,
        totalUmkm: 0,
        totalOrders: 0,
        totalDisputes: 0,
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true)
            setError(null)

            try {
                const [users, umkm, orders, disputes] = await Promise.all([
                    userService.getAll().catch(() => []),
                    umkmService.getActive().catch(() => []),
                    orderService.getAll().catch(() => []),
                    disputeService.getAll().catch(() => []),
                ])

                setStats({
                    totalUsers: users.length,
                    totalUmkm: umkm.length,
                    totalOrders: orders.length,
                    totalDisputes: disputes.length,
                })
            } catch (err) {
                setError('Gagal memuat data dashboard')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchStats()
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-bold text-[var(--text)] mb-6">Dashboard</h1>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value={stats.totalUsers}
                    icon={<Users className="w-6 h-6" />}
                    loading={loading}
                />
                <StatCard
                    title="Total UMKM"
                    value={stats.totalUmkm}
                    icon={<Store className="w-6 h-6" />}
                    loading={loading}
                />
                <StatCard
                    title="Total Orders"
                    value={stats.totalOrders}
                    icon={<ShoppingCart className="w-6 h-6" />}
                    loading={loading}
                />
                <StatCard
                    title="Open Disputes"
                    value={stats.totalDisputes}
                    icon={<AlertTriangle className="w-6 h-6" />}
                    loading={loading}
                />
            </div>
        </div>
    )
}
