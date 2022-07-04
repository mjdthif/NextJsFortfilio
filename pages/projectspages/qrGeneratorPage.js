
import Qrcode from '../../Components/Projects/QrCodeGenerator/QrGenerator.js';
import Head from 'next/head';

const  QrPage = () => {
  return (
    <> 
     <Head>
        <title>|QrGenerator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"  key="title" />
      </Head>
        <Qrcode></Qrcode>
    </>
  )
}
export default QrPage;