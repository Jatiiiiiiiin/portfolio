import React from 'react'

export default function Card({head,title, description}) {
    return (
        <div className="card">
            <div className="card-header">
                <span className="material-icons">{head}</span>
            </div>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    )
}
