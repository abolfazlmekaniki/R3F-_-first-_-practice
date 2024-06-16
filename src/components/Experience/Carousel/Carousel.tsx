import { Html } from "@react-three/drei";
import Card from "../Card/Card"

interface props{
    count:number
}
const Carousel:React.FC<props> = ({count=8}):JSX.Element => {
    let cards=[];
    for(let i=1;i<=count;i++){
        cards.push(i)
    }
    console.log(cards);
    
    return (
       <>
       {cards.map(i=>(
            <Card
            key={i}
            url={`/img${i+1}_.jpg`}
            position={[Math.sin((i / count) * Math.PI * 2) * 2.5, 0, Math.cos((i / count) * Math.PI * 2) * 2.5]}
            rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
             
             />
       ))}
       </>
    )
}

export default Carousel