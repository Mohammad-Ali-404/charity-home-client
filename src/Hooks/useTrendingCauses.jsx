import { useEffect, useState } from "react";

const useTrendingCauses = () =>{
    const [trendingCauses, SetTrendingCauses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/causes')
        .then(res => res.json())
        .then(data => {
            SetTrendingCauses(data)
            setLoading(false)
        })
    },[])
    return[trendingCauses, loading]
}

export default useTrendingCauses;