import { useEffect, useState } from 'react'

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

  if (loading) return <div>Loading...</div>
  return <div>Health: {status}</div>
}

export default Health
