import "./Head.styles.css"
export const Head = ()=> {
    return(
        <section className="container-head">
             <div className="column-one">
                <h1>Hi, I am Marko,<br />Web Developer</h1>
                <p className="paragraph-one">I work with companies and agencies around the world, building Web user interfaces and digital products with focus on responsive design, accessibility, performance, and cutting-edge tech.</p>
                <button id="btn">Download Resume</button>
            </div>
            <div className="column-two"><img className="portfolio-picture" src="/images/portfolio_picture.png" alt="Portfolio picture" /></div>
        </section>
    )    
}