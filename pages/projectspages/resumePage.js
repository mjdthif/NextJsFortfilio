
import CvComponent from '../../Components/cvComponent/CvComponent';
import Head from 'next/head';

const CvPage = () => {
  return (
    <> 
      <Head>
        <title>|Resume </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"  key="title" />
      </Head>
        <CvComponent></CvComponent>
    </>
  )
}
export default CvPage;