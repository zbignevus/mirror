import React from 'react';
import './styles.scss';

import MenuItem from '../menu-item';


class DirectoryMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'processors',
                    imageUrl: 'https://images.techhive.com/images/article/2013/12/6800k-100154895-orig.jpg',
                    id: 1,
                    size: 'large',

                },
                {
                    title: "graphic cards",
                    imageUrl: 'http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/03/QuadroM600024GB.jpg',
                    id: 2,
                    size: 'large',

                },
                {
                    title: "ram",
                    imageUrl: 'https://pixfeeds.com/images/5/278542/1200-507957560-random-access-memory.jpg',
                    id: 3,
                    size: 'large',

                },
                {
                    title: "storage",
                    imageUrl: 'https://images.idgesg.net/images/article/2017/09/crucial_bx300_ssd-100735866-large.jpg',
                    id: 4,
                    size: 'large',

                },
                {
                    title: "cooling",
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/AMD_heatsink_and_fan.jpg/1200px-AMD_heatsink_and_fan.jpg',
                    id: 5,
                    size: 'large',

                },
                {
                    title: "cases",
                    imageUrl: 'http://assets.coolermaster.com/products/masterbox-mb500-tuf-gaming/img/section4-img.png',
                    id: 6,
                    size: 'large',

                },
                {
                    title: "external components",
                    imageUrl: 'https://www.wallpaperu3.com/wp-content/mywallpapers/backlit-keyboard-wallpaper-4k-1920x1200.jpg',
                    id: 7,
                    size: 'large',

                }

            ]
        }
    }

    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {
                    sections.map(({ id, title, imageUrl, size }) => (
                        <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
                    ))
                }
            </div>
        )
    }

}

export default DirectoryMenu;