import React, { useContext, useEffect, useState } from 'react'
import Script from "react-load-script";
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { ContextCate } from './ConCategory';
import data from './data';
import swal from 'sweetalert'

let OmiseCard;

export default function Omise_open(props) {

    let Navigate = useNavigate()

    const [APICUR, setAPICUR] = useState(0)
    useEffect(() => {
        axios.get(data.Mainurl + data.Currency).then((res) => {
            setAPICUR(res.data)
        })
    }, [])

    let location = useLocation()
    const [item] = useState(location.state.item)
    const [number] = useState(location.state.Number)

    let amountA = ((((item.v2sprice - (((item.v2sprice - item.v2percent) * item.v2percent) / 100)) * number) / (APICUR[0]?.Currency)).toFixed(0));

    const handleLoadScript = () => {
        OmiseCard = window.OmiseCard
        OmiseCard.configure({
            publicKey: 'pkey_test_5s9anns9sj9o4hmyddu',
            currency: 'USD',
            frameLabel: 'Furnisfure SHOP',
            submitLabel: 'Pay NOW',
            buttonLabel: 'Pay with Omise'
        });
    }

    const creditCardConfigure = () => {
        OmiseCard.configure({
            defaultPaymentMethod: 'credit_card',
            otherPaymentMethods: []
        });
        OmiseCard.configureButton("#credit-card");
        OmiseCard.attach();
    }

    const HandleSubmit = (e) => {
        try {
            axios.post(data.Mainurl + data.POSTOMISE, {
                'token': e,
                'amount': (amountA+'00')
            }).then((res) => {
                axios.post(data.Mainurl + data.POSTSALE, {
                    "Image": props.arrimg,
                    "itemId": (item._id),
                    "v2Items": (item.v2Items),
                    "sellPercent": (item.v2percent),
                    "sellSize": (item.v2size),
                    "sellType": (item.v1typeId?.pro_type),
                    "sellColor": (item.v2color),
                    "sellQty": number,
                    "sellbprice": item.v2sprice,
                    "sellAmount": (amountA),
                    "Location": props.arrlocations
                }).then((req) => {
                    axios.patch(data.Mainurl + data.PATCHITEM + item._id, {
                        "v2qty": (item.v2qty - number)
                    }).then((res) => {
                        swal("ການສຳລະເງີນສຳເລັດ!", {
                            icon: "success",
                        }).then((willDelete) => {
                            if (willDelete) {
                                Navigate('/POST', { state: req.data })
                                // window.location.reload(false)
                            }
                        });
                    })
                })
            })
        } catch (error) {
            swal("ການສຳລະເງີນສຳເລັດ!", {
                icon: "error",
            }).then((willDelete) => {
                if (willDelete) {
                    window.location.reload(false)
                }
            });
        }
    }

    const OmiseHandle = () => {
        OmiseCard.open({
            amount: (amountA + '00'),
            onCreateTokenSuccess: (nonce) => {
                HandleSubmit(nonce)
            },
            onFormClosed: () => {
                /* Handler on form closure. */
            },
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        OmiseHandle()
        creditCardConfigure();
    }
    return (
        <>
            <Script
                url="https://cdn.omise.co/omise.js"
                onLoad={handleLoadScript}
            />
            <form>
                <div
                    id="credit-card"
                    type="button"
                    onClick={handleClick}
                >
                    <button type='submit' className='border text-[24px] px-3 py-1 bg-red-500 text-white'>ຍືນຍັນການສັ່ງຊື້</button>
                </div>
            </form>
        </>

    )
}
