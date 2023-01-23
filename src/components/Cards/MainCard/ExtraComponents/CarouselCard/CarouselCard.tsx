import React, { FC } from "react";

import { Carousel } from '@trendyol-js/react-carousel';

const CarouselCard: FC = () => {

    return (
        <>
            <Carousel show={3.5} slide={3} swiping={true} className="carousel" useArrowKeys={false}>
                <img src="https://s3-alpha-sig.figma.com/img/fb52/f3d5/761a5c3d956c7a5e8785a9cfdd0000e8?Expires=1675036800&Signature=dTYNCuqBqGl-5C~4gTYTUyc9eTS3aV8MtDURnl6OBwLdaeiJflGwvssyey5xgBZO6XmChwM~ny~M~Z4cAtOrfBv6ROm0ilw1jOt6sbKmCgc2mCSJJ8iTUQS~nNLqSBMnKpyXz5F8FAR60HamMbGyzSNKPXXRMv9brLtIQWpcyehqz8emsbgAJuGIx2gS86yAKDNxlRT6VwRrz8kTKB~Vma-AKDPlGV5KgEL43g-gl6abdHD2F1lCX5S0Ss84HU8xMx2sdsYaLeKBfAuZNdKn5sJF1wd9MtUpR5Fh~oCy6uqCo9tVsK2rpIXOdhryPC5z6O4Ze~pvXw4JybxdXLkpNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="road" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d2a4/71f4/e777b38f94e7048b5c9f3a202666d591?Expires=1675036800&Signature=MXQA5NNxdtQI7qkN7KCcupeW-cKGlMF1l5khMG2hpY2DQcNgYmoZ3w~QpV5IIeggkg9mnKd2T0qPvxVwUBedTkMSTxMiG4Q70OSPd6zTDofc0BtuYyv03CkD7SHr~HT3EBWtd5Cyldo3WAS84fF4bUsttQLJ5zQnZwn8~1qWvXVVn4IC-L-tYBJAt~mkRx26X~uNoIXDoFgKUOft3e-FD2MFLLRoY1~EahSfkKMbYR1~aqK9zj0HkoveLfsnRnFzPCKOh1YkbvNxKGR58CR1~MKs~xwIkihHJXw0n6RqkVb1uZ9w~2qPwJlDs~v7a4g1VGMr1p13wN7xx1Ft8jV9EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="forest" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d24d/f4c0/11b700cbbec1b90478095ff8f098c27d?Expires=1675036800&Signature=hCWFIV0~xpceP7rCJBIMU3jQOq78CFPbuGxEr5mqY7~HNqSXOb0vppiGSObJGENGjkMyv54J5ca1CyEAmqUu50hp7PNCb5EF-3Nx68M5dX-p0ou1CcZ9g0Ps9BfMPICZOPWO4VUc3-7tdDuseXjKcUj18gc6-WrqwIfOT2DRQaEx7ay6IQi697aEY9NMlYcF3tZDREJGPMrKLcv-ujuGN1wZLnuNAUzOYVTzgWrVOgoACdFWHLhX691G1JciQ11f~jkhlbxzttIamgY7Es1dzEyYPtTxgcx3ahnky5SS~6fB8cIIg-xCre0OJZ4qb4hQuB~vCU0n2oC8Ta38tVxrFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="house" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d2a4/71f4/e777b38f94e7048b5c9f3a202666d591?Expires=1675036800&Signature=MXQA5NNxdtQI7qkN7KCcupeW-cKGlMF1l5khMG2hpY2DQcNgYmoZ3w~QpV5IIeggkg9mnKd2T0qPvxVwUBedTkMSTxMiG4Q70OSPd6zTDofc0BtuYyv03CkD7SHr~HT3EBWtd5Cyldo3WAS84fF4bUsttQLJ5zQnZwn8~1qWvXVVn4IC-L-tYBJAt~mkRx26X~uNoIXDoFgKUOft3e-FD2MFLLRoY1~EahSfkKMbYR1~aqK9zj0HkoveLfsnRnFzPCKOh1YkbvNxKGR58CR1~MKs~xwIkihHJXw0n6RqkVb1uZ9w~2qPwJlDs~v7a4g1VGMr1p13wN7xx1Ft8jV9EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="forest" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
                <img src="https://s3-alpha-sig.figma.com/img/d24d/f4c0/11b700cbbec1b90478095ff8f098c27d?Expires=1675036800&Signature=hCWFIV0~xpceP7rCJBIMU3jQOq78CFPbuGxEr5mqY7~HNqSXOb0vppiGSObJGENGjkMyv54J5ca1CyEAmqUu50hp7PNCb5EF-3Nx68M5dX-p0ou1CcZ9g0Ps9BfMPICZOPWO4VUc3-7tdDuseXjKcUj18gc6-WrqwIfOT2DRQaEx7ay6IQi697aEY9NMlYcF3tZDREJGPMrKLcv-ujuGN1wZLnuNAUzOYVTzgWrVOgoACdFWHLhX691G1JciQ11f~jkhlbxzttIamgY7Es1dzEyYPtTxgcx3ahnky5SS~6fB8cIIg-xCre0OJZ4qb4hQuB~vCU0n2oC8Ta38tVxrFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="house" style={{ width: '164px', height: '149px', borderRadius: '10px' }} />
            </Carousel>
        </>
    )
};

export default CarouselCard;