import axios from 'axios'

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  console.warn('[api] NEXT_PUBLIC_API_BASE_URL is not set. Requests may fail.')
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''

/**
 * Shared Axios instance used by all feature API modules.
 * - baseURL is driven entirely by the NEXT_PUBLIC_API_BASE_URL env variable.
 * - Set it in .env.local (dev) or .env.production (prod) — no trailing slash.
 */
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
export { BASE_URL }
