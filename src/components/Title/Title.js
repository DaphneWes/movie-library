import "./Title.css"

function Title (props) {
    return (
        <div className={`title-container ${props.sizeTitle}`}>
            MOVIE DATABASE
        </div>
    )
}

export default Title;