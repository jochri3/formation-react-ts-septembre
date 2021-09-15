import "./loader.style.scss"


interface LoaderProps {
    modifier?:string
}

const Loader:React.FC<LoaderProps>=({modifier="loader--blue"})=>{
    return (
        <div className="loader">
            <div className={modifier}></div>
            <div className={modifier}></div>
        </div>
    )
}

export default Loader;