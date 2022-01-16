import React from 'react'
import BlogCard from '../components/BlogCard'
import { useFetch } from '../helpers/firebase'

const Dashboard = () => {
    const { cardList } = useFetch()
    return (
        <div style={{display: 'flex', justifyContent:'center', flexWrap:'wrap', padding:'3rem' }}>
            {cardList?.map((card) => (
                <BlogCard key={card.id} card={{...card}} />
            ))}
            
        </div>
    )
}

export default Dashboard
