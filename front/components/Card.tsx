import Image from 'next/image';



interface Props {
    img: string;
    name: string;
    prize: string;
    strikedPrize: string;
    salePrize: string;
    offerPrize: string;
    colors: string;
}

export const Card: React.FC<Props> = (props) => {

return (
    <div className="cardContainer">
        <Image
              priority
              src={`/../public/static/assets/${props.img}.jpg`}
              className="cardImg"
              height={144}
              width={144}
              alt="sorry something has happened"
            />
        <div className='cardText'>
            <p className='cardName'>{props.name}</p>
            <p className='cardPrize'>{props.prize}</p>
            <del className='cardStrikedPrize'>{props.strikedPrize}</del>
            <p className='cardSalePrize'>{props.salePrize}</p>
            <p className='cardColors'>{props.colors}</p>
        </div>
        <button>AÑADIR</button>
    </div>
)
}
