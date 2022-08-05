import React, { useContext } from 'react'
import { CategoryContext } from '../../context/CategoryContext'

const Posts = ({ postList }) => {
    const { categories } = useContext(CategoryContext)
    return (
        <div>
            {postList.map((el, index) => (
                <React.Fragment key={index}>
                    <br />
                    <div>{JSON.stringify(el)}</div>
                </React.Fragment>
            ))}
            {categories.map((el, index) => (
                <React.Fragment key={index}>
                    <br />
                    <div>{JSON.stringify(el)}</div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Posts
