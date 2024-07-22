import './Works.styles.css'
import { myWorks } from '../Data/Data'
export const WorksList = () => {

    const filterWorks = myWorks.filter((work, index) => index < 2)

    return (
        <div className="container-works">
            <div className="works-nav">
                <p className="box-left">Recent works</p>
                <p className="box-right">View all</p>
            </div>
            <div className="works">
                {filterWorks.map((work) => (
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

