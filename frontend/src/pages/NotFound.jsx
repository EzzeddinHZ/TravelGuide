import BG from "../assets/BG.jpg"

function NotFound() {
    return <div className="page">
        <div className="TempBG">
            <img src={BG}/>
        </div>
        <h1>404 Not Found</h1>
        <p>The page you're looking for doesn't exist!</p>
    </div>
}

export default NotFound