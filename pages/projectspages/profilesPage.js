
import Profiles from "../../Components/Projects/profiles/profiles.js";
import Head from 'next/head';

const ProfilesPage = () => {
  return (
    <> 
      <Head>
        <title>|Profiles</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"  key="title" />
      </Head>
        <Profiles></Profiles>
    </>
  )
}
export default ProfilesPage;