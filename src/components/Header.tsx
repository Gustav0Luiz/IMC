import Image from 'next/image'
import pic from '../assets/powered.png'


export const Header = () => {

    return(
        <div className="max-w-5xl mx-auto">
            <Image src={pic} 
            alt="Powered by "
            width={200}
            height={200}/>
        </div>
    );
}