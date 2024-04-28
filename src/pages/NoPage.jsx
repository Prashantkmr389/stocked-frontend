import { useRouteError } from 'react-router-dom'

function NoPage() {
  const err = useRouteError()
  return (
    <div>
        <h1>404 error Not found</h1>
        <h2>{err.status + ":" + err.statusText }</h2>

    </div>
  )
}

export default NoPage