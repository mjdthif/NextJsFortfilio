    import react from 'react';
    import QRCode from 'qrcode'
    import { useState } from 'react'
    import ProjectNav from '../ProjectNav/ProjectNav';
    import './QrGenerator.scss';
 



    function Qrcode() {
        const [url, setUrl] = useState('')
        const [qr, setQr] = useState('')
        const GenerateQRCode = () => {
            QRCode.toDataURL(url, {
                width: 800,
                margin: 2,
                color: {
                    // dark: '#335383FF',
                    // light: '#EEEEEEFF'
                }
            }, (err, url) => {
                if (err) return console.error(err)
                console.log(url)
                setQr(url)
            })
        }
        return (
            <div className='container'>
               <main className='QrContainer'>
                <div className='Qrinput-container'>   
                <input className='QrInput'
                    type="text"
                    placeholder="e.g. https://website.com"
                    value={url}
                    onChange={e => setUrl(e.target.value)} />
                <button className='btn' variant="contained" onClick={GenerateQRCode}>Generate</button>
            </div>
             
                {qr && <>
                    <img src={qr}  className='QrImg'/>
                    <a className='btn' variant='contained' color='success' href={qr} download="qrcode.png">Download</a>
                </>}
                <ProjectNav></ProjectNav>
                </main>
            </div>
        )
    }
    export default Qrcode;