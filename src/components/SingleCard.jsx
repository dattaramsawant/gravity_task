import Image from 'next/image';
import Link from 'next/link';

export default function SingleCard(props) {
    return (
        <div key={props?.data?.id} className="bg-white p-4 rounded-md shadow-md grid">
            <Image
                src={props?.data?.img} 
                alt={props?.data?.name}
                width={200}
                height={200}
                className='justify-self-center'
            />
            <p className='text-slate-950'>{props?.data?.name}</p>
            <Link className='text-sky-900 mt-20' href={`/pokemon/${props?.data?.id}`}>Details</Link>
        </div>
    )
}