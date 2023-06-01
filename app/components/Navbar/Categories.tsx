'use client'

import Container from "../Container"
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiCutDiamond, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategorySection from "../CategorySection"
import { usePathname, useSearchParams } from "next/navigation"
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Property is close to the beach!',
    },
    {
        label: 'Windmill',
        icon: GiWindmill,
        description: 'Property has windmills!',
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'Property has windmills!',
    },
    {
        label: 'Counryside',
        icon: TbMountain,
        description: 'Property is in the countryside!',
    },
    {
        label: 'Pool',
        icon: TbPool,
        description: 'Property has a pool!',
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'Property is in an island!',
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'Property is close to a lake!',
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'Property has skiing facilities!',
    },
    {
        label: 'Casle',
        icon: GiCastle,
        description: 'Property is a castle!',
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Property has a camping facilities!',
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'Property is in the arctic!',
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'Property is a cave',
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'Property is in the desert',
    },
    {
        label: 'Barn',
        icon: GiBarn,
        description: 'Property is in a Barn',
    },
    {
        label: 'Luxurious',
        icon: GiCutDiamond,
        description: 'Property is Luxurious',
    },

]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    
    const isMainPage = pathname === '/';

    if(!isMainPage) {
        return null
    }

  return (
    <Container>
      <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
        {
            categories.map((item) => (
                <CategorySection key={item.label} label={item.label} selected={ category === item.label} icon={item.icon}/>
            ))
        }
      </div>
    </Container>
  )
}

export default Categories
