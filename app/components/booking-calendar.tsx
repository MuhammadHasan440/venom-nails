"use client"

import { useState } from "react"

interface BookingCalendarProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
}

export default function BookingCalendar({ selectedDate, onDateSelect }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = new Date()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const isDateAvailable = (date: Date) => {
    // Simple availability logic - exclude past dates and some random unavailable dates
    if (date < today) return false
    const dayOfWeek = date.getDay()
    // Example: Make Mondays unavailable
    if (dayOfWeek === 1) return false
    return true
  }

  const isDateSelected = (date: Date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  const handleDateClick = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (isDateAvailable(date)) {
      onDateSelect(date)
    }
  }

  const renderCalendarDays = () => {
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const isAvailable = isDateAvailable(date)
      const isSelected = isDateSelected(date)
      const isToday = date.toDateString() === today.toDateString()

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={!isAvailable}
          className={`h-12 w-full rounded-lg font-medium transition-colors ${
            isSelected
              ? "bg-primary text-primary-foreground"
              : isToday
                ? "bg-accent text-accent-foreground"
                : isAvailable
                  ? "hover:bg-muted text-foreground"
                  : "text-muted-foreground cursor-not-allowed opacity-50"
          }`}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  return (
    <div className="bg-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Select Date</h3>
        <div className="flex items-center space-x-4">
          <button onClick={prevMonth} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h4 className="text-lg font-medium text-foreground min-w-[140px] text-center">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h4>
          <button onClick={nextMonth} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map((day) => (
          <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{renderCalendarDays()}</div>

      <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-primary rounded"></div>
          <span className="text-muted-foreground">Selected</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-accent rounded"></div>
          <span className="text-muted-foreground">Today</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
          <span className="text-muted-foreground">Unavailable</span>
        </div>
      </div>
    </div>
  )
}
