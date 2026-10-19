import apiClient from '@/lib/api'

export interface InterviewBookingPayload {
  name: string
  email: string
  date: string // YYYY-MM-DD
  time: string // 24-hour format: HH:MM (e.g., "09:00", "14:30")
  format: 'in-studio' | 'zoom'
  notes?: string
}

export interface InterviewBookingData {
  id: string
  name: string
  email: string
  date: string
  time: string
  format: 'in-studio' | 'zoom'
  notes: string
  status: 'pending'
  submitted_at: string
}

export interface InterviewBookingFieldErrors {
  name?: string[]
  email?: string[]
  date?: string[]
  time?: string[]
  format?: string[]
  notes?: string[]
}

export interface InterviewBookingSuccessResponse {
  success: true
  statusCode: 201
  message: string
  timestamp: string
  data: InterviewBookingData
  errors: null
}

export interface InterviewBookingErrorResponse {
  success: false
  statusCode: 400
  message: string
  timestamp: string
  data: null
  errors: InterviewBookingFieldErrors
}

export type InterviewBookingResponse =
  | InterviewBookingSuccessResponse
  | InterviewBookingErrorResponse

export async function submitInterviewBooking(
  payload: InterviewBookingPayload
): Promise<InterviewBookingSuccessResponse> {
  const response = await apiClient.post<InterviewBookingSuccessResponse>(
    '/api/website/interview-booking/',
    payload
  )
  return response.data
}
