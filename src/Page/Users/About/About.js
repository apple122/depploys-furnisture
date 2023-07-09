import React from 'react'
import { useContext } from 'react'
import { Context_AboutH } from './Index'
import data from './data'
import GoogleMapReact from 'google-map-react';
import LooopUsers from './LooopUsers';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function About() {

    const { API, APIA } = useContext(Context_AboutH)

    let t = (APIA[0]?.map[0])
    let g = (APIA[0]?.map[1])

    const defaultProps = {
        center: {
            lat: t,
            lng: g
        },
        zoom: 15
    };

    return (
        <div className='relative flex justify-center w-full h-full pt-[1%]'>
            <div className='w-[90%] p-5 relative'>
                <div className='flex justify-center lg:w-[100%] mb-[2%]'>
                    <label className='text-[32px] text-center font-bold'>ກ່ຽວກັບລະບົບ</label>
                </div>
                <div className='flex justify-center lg:w-[100%] mb-[1%]'>
                    <label className='text-[32px] text-center font-bold'>ຜູ້ຈັດການ</label>
                </div>
                <div className='w-[100%] flex justify-center'>
                    <div className='w-[80%] flex justify-center gap-5'>
                        <LooopUsers />
                    </div>
                </div>

                <div className='flex justify-center lg:w-[100%] mb-[1%] mt-[5%]'>
                    <label className='text-[32px] text-center font-bold'>About</label>
                </div>
                <div className='flex justify-center w-[100%] gap-5'>
                    <div className='w-[40%] h-[60vh] rounded overflow-hidden object-cover'>
                        <img src={data.IMG + APIA[0]?.ab_image} className='w-[80vh] object-cover' />
                    </div>
                    <div className='w-[40%]'>
                        <p className='text-[22px] font-bold'>ຫົວຂໍ້</p>
                        <p className='text-[20px]'>
                            {APIA[0]?.ab_text}
                        </p>
                    </div>
                </div>

                <div className='flex justify-center lg:w-[100%] mb-[1%] mt-[5%]'>
                    <label className='text-[32px] text-center font-bold'>ສະຖານທີ່ຕັ້ງ</label>
                </div>
                {t !== undefined ?
                    <div className='flex justify-center gap-5 mb-[5%]'>
                        <div className='w-[80%]'>
                            <div style={{ height: '60vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                    <AnyReactComponent
                                        lat={t}
                                        lng={g}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>

                            </div>
                        </div>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}
