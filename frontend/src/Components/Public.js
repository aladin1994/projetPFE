import { Link } from "react-router-dom"


const Public =()=>{
    const content =(
        <section className="public">
            <header>
                <h1>Welcome to repair store</h1>
            </header>
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi voluptas unde consectetur? Ipsum voluptatem dicta recusandae quaerat necessitatibus iure magni quia error numquam? Earum temporibus sequi quasi cum voluptatibus!</p>
                <address>
                repair store <br/>
                555 foo Drive <br />

                </address>
            </main>
            <footer>
            <Link to="/login">Employer login </Link>
            </footer>
        </section>
    )
    return content
}

export default Public