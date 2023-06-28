import "./top-bar.css"

const Topbar = () => {
    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="container-top-bar">
            <button onClick={reloadPage} className="title"><i class="fa fa-film"></i>  Movie Database by Daphne</button>
        </div>
    )
}

export default Topbar;