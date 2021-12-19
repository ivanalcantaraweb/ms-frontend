import Image1 from '../../Media/Images/image1.jpg';
import Image2 from '../../Media/Images/image2.jpg';
import Image3 from '../../Media/Images/image3.jpg';
import Image4 from '../../Media/Images/image4.jpg';
import Image5 from '../../Media/Images/image5.jpg';
import Image6 from '../../Media/Images/image6.jpg';
import Image7 from '../../Media/Images/image7.jpg';
import Image8 from '../../Media/Images/image8.jpg';

import Masonry from 'react-masonry-css'


// Hacer el masonry un hook

const DiscoverGrid = (props) => {
    var items = [
        {
            id: 1, 
            name: 'My First Item', 
            img: Image1,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago',
            slug: '/backedCake'
        },
        {
            id: 2, 
            name: 'My First Item', 
            img: Image2,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago'
        },
        {
            id: 3, 
            name: 'My First Item', 
            img: Image3,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago'
        },
        {
            id: 4, 
            name: 'My First Item', 
            img: Image4,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago'
        },
        {
            id: 5, 
            name: 'My First Item', 
            img: Image5,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago'
        },
        {
            id: 6, 
            name: 'My First Item', 
            img: Image6,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago'
        },
        {
            id: 7, 
            name: 'My First Item', 
            img: Image7,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago'
        },
        {
            id: 8, 
            name: 'My First Item', 
            img: Image8,
            author: 'Amanda White',
            description: 'This is a description for the publish',
            date_published: '4 Days Ago'
        },
       
      ];
    
      const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };
      
items = items.map((item) => {
    return (
    <div key={item.id} className='relative rounded-xl overflow-hidden'>
        <img src={item.img} alt={`element-${item.id}`}></img>
        <div className='absolute bottom-0 containerItemGrid h-full w-full flex flex-col justify-end p-5 text-gray-300'>
            <p className='text-sm'>{item.author}</p>
            <div>
                <span className='text-lg font-bold'>
                    {item.description}
                </span>
                <span className='text-xs font-normal ml-2'>
                    {item.date_published}
                </span>
            </div>
         </div>
    </div>
    )
  });

    return (
        <div>
         <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
            {items}
            </Masonry> 
        </div>
    )
}
export default DiscoverGrid;