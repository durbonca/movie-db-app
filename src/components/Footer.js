export default function Footer (props){

    const {en} = props

    return (
        <div className="footer">
            <strong>{en? 'Made By' : 'Hecho por' }</strong> &nbsp; <a style={{textDecoration:"none"}} href="https://durbonca.com" > Durbonca </a> &nbsp;2021 ©️
        </div>
    )
}