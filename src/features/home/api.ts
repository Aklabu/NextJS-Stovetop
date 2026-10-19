import apiClient from '@/lib/api'

export interface ServiceBookingPayload {
  tier: 'small-venue' | 'medium-venue' | 'large-venue'
  name: string
  email: string
  date: string // YYYY-MM-DD
  time: string // 24-hour format: HH:MM (e.g., "09:00", "18:30")
  location: string
  guests: number
  occasion: string
  genres: string[] // ['R&B', 'Rap', 'Pop', 'Soul', 'Jazz', 'Reggae']
}

export interface ServiceBookingData {
  id: string
  tier: 'small-venue' | 'medium-venue' | 'large-venue'
  name: string
  email: string
  date: string
  time: string
  location: string
  guests: number
  occasion: string
  genres: string[]
  status: 'pending'
  submitted_at: string
}

export interface ServiceBookingFieldErrors {
  tier?: string[]
  name?: string[]
  email?: string[]
  date?: string[]
  time?: string[]
  location?: string[]
  guests?: string[]
  occasion?: string[]
  genres?: string[]
}

export interface ServiceBookingSuccessResponse {
  success: true
  statusCode: 201
  message: string
  timestamp: string
  data: ServiceBookingData
  errors: null
}

export interface ServiceBookingErrorResponse {
  success: false
  statusCode: 400
  message: string
  timestamp: string
  data: null
  errors: ServiceBookingFieldErrors
}

export type ServiceBookingResponse =
  | ServiceBookingSuccessResponse
  | ServiceBookingErrorResponse

export async function submitServiceBooking(
  payload: ServiceBookingPayload
): Promise<ServiceBookingSuccessResponse> {
  const response = await apiClient.post<ServiceBookingSuccessResponse>(
    '/api/website/service-booking/',
    payload
  )
  return response.data
}
