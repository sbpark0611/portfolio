import React, { useRef, useEffect, useState } from 'react'

const Profile = ({ size }) => {
    const [imageStyle, setImageStyle] = useState({})
    const imgRef = useRef()

    useEffect(() => {
        const handleResize = () => {
            const imgElement = imgRef.current;
            if (imgElement) {
                const parentWidth = imgElement.parentNode.clientWidth
                const parentHeight = imgElement.parentNode.clientHeight
                const imageRatio = imgElement.naturalWidth / imgElement.naturalHeight
                const parentRatio = parentWidth / parentHeight

                let width
                let height

                if (imageRatio > parentRatio) {
                    width = 'auto'
                    height = '100%'
                } else {
                    width = '100%'
                    height = 'auto'
                }

                setImageStyle({
                    width: width,
                    height: height,
                    objectFit: 'cover',
                })
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div style={{margin:10, height:size, width:size, borderRadius:size/2, backgroundColor:'gray', overflow: 'hidden'}}>
            <img
                ref={imgRef}
                style={{ ...imageStyle }}
                alt="profile"
                src="image/profile.jpg"
            />
        </div>
    )
}

export default Profile
