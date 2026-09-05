// Health component - displays API health status
// Fetches from /api/health endpoint and displays the status or loading/error state

import { useEffect, useState } from 'react'
import './Health.css'

function Health() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch('/api/health')
        const data = await response.json()
        setStatus(data)
      } catch (error) {
        setStatus('error')
      } finally {
        setLoading(false)
      }
    }

    fetchHealth()
  }, [])

  if (loading) return <div className="spinner"></div>
  return <div>Health: {status}</div>
}

export default Health
