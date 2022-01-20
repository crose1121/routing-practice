import {useParams} from "react-router";

const Info = (props) => {
    
    const {info,textcolor,backgroundcolor} = useParams();

    return (
        <div >
            {
                isNaN(info)?
                <h3  style={{color: `${textcolor}`,backgroundColor: `${backgroundcolor}`}}>The word is: {info}</h3>
                :<h3  style={{color: `${textcolor}`,backgroundColor: `${backgroundcolor}`}}>The number is: {info}</h3>
            }
        </div>
    )
}

export default Info;