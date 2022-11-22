import axios from "axios";
import { useEffect } from "react";

const Memo = () => {
  useEffect(() => {
    const user = axios.get('/api/v1/users').then(res => console.log(res))
  }, [])
  return (
    <div>memo</div>
  )
}

export default Memo;
