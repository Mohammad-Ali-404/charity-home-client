import { useEffect, useState } from "react";

const useTrendingCauses = () =>{
    const [trendingCauses, SetTrendingCauses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('trendingCauses.json')
        .then(res => res.json())
        .then(data => {
            SetTrendingCauses(data)
            setLoading(false)
        })
    },[])
    return[trendingCauses, loading]
}

export default useTrendingCauses;