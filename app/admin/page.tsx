"use client"

import { useState } from "react"
import AdminSidebar from "../components/admin-sidebar"
import DashboardOverview from "../components/dashboard-overview"
import BookingsManager from "../components/bookings-manager"
import ProductsManager from "../components/products-manager"
import GalleryManager from "../components/gallery-manager"
import AnalyticsView from "../components/analytics-view"

type AdminView = "overview" | "bookings" | "products" | "gallery" | "analytics"

export default function AdminPage() {
  const [currentView, setCurrentView] = useState<AdminView>("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderCurrentView = () => {
    switch (currentView) {
      case "overview":
        return <DashboardOverview />
      case "bookings":
        return <BookingsManager />
      case "products":
        return <ProductsManager />
      case "gallery":
        return <GalleryManager />
      case "analytics":
        return <AnalyticsView />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <AdminSidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-background border-b border-border px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM9 12l2 2 4-4M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">A</span>
                </div>
                <span className="text-foreground font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">{renderCurrentView()}</main>
      </div>
    </div>
  )
}
