import { useState } from "react"
import './Works.styles.css'

export const WorksList = () => {
    const [works, setWorks] = useState([
        {title: "Score Board", date: "15 Jun 2024", content: "App made in React. It is designed like a live scoreboard to track results for two teams.", id: 2},
        {title: "Fitnes Tracker", date: "04 April 2024", content: "Fitness app design as a single page in vanilla js. With this app you can track your workout progress, weight change and calorie consumption. Also, you can compare different data through charts for a certain period of time.", id: 1},
        {title: "Book Review App", date: "01 February 2024", content: "Application for books review, done in vanilla js. It is design like single page app. It ontaints sections for all available books, and section where you can add books to favorites and also to add review for selected books.", id: 2},
        
    ])

    return (
        <div className="container-works">
            <div className="works-nav">
                <p>Recent works</p>
                <p className="box-right">View all</p>
            </div>
            <div className="works">
            {works.map((work) => (
                <div className="work-preview" key={work.id}>
                    <h3>{work.title}</h3>
                    <p>{work.date}</p>
                    <p>{work.content}</p>
                </div>
                )
            )}
            </div>
        </div>
    )
}

