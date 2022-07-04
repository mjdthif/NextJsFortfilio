
import ContactQR from '../../Components/socialmediaQr/ContactQR';
import Head from 'next/head';

const QrContactPage = () => {
  return (
    <> 
     <Head>
        <title>|ContactQR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"  key="title" />
      </Head>
        <ContactQR></ContactQR>
    </>
  )
}
export default QrContactPage;