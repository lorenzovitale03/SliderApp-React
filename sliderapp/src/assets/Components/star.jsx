import { FaRegStar,FaRegStarHalfStroke,FaStar  } from "react-icons/fa6";


const starReview = (num) =>{
    return Array.from({length: 5},(_,index)=>{
        if(num >= index + 1){
            return <FaStar key={index} className="star" fill="#fca093"></FaStar>;
        } else if(num >= index + 0.5){
            return <FaRegStarHalfStroke key={index} className="star" fill="#fca093"></FaRegStarHalfStroke>;
        }else{
            return <FaRegStar key={index} className="star" fill="#fca093"></FaRegStar>;
        }
    })
}

export default starReview