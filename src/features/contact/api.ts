import apiClient from '@/lib/api'

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export interface ContactFieldErrors {
  name?: string[]
  email?: string[]
  message?: string[]
}

export interface ContactErrorResponse {
  message: string
  errors: ContactFieldErrors | null
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  await apiClient.post('/api/website/contact/', payload)
}
