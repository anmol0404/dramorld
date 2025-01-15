import React from 'react';
import Image from 'next/image';

// Define a type for the component props
interface PersonCardProps {
  id: number;
  profile_path: string;
  name: string;
  character: string;
}

const PersonCard: React.FC<PersonCardProps> = (props) => {
  return (
    <div className="relative w-full h-full card card__person" key={props.id}>
      <div className="relative w-full h-full">
        <Image
          src={`https://image.tmdb.org/t/p/w200${props.profile_path}`}
          alt={props.name}
          width={200}   
          height={300}  
          layout="responsive"   
          className="w-full h-full object-cover"    
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-2 info">
        <div className="name text-[1.1rem] font-normal">{props.name}</div>
        <div className="character text-[0.9rem] text-[#c4c4c4]">{props.character}</div>
      </div>
    </div>
  );
}

export default PersonCard;

