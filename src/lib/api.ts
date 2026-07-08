import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://stovetopmusic.com'

/**
 * Shared Axios instance used by all feature API modules.
 * - baseURL is set from env so it can be overridden per environment.
 * - cache: 'no-store' equivalent is handled by setting the fetch cache
 *   option; for axios we disable any default adapter caching.
 */
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
export { BASE_URL }
