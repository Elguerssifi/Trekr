"use client";
import styles from './MiddleHomePage.module.css';
import Story, { StoryProps } from './story';
import Head from 'next/head';

const Stories: React.FC = () => {
  // Simulated API data
  const simulatedData: StoryProps[] = [
    { 
      img_profile: 'https://s3-alpha-sig.figma.com/img/f1b5/c2ab/85fb415ef4f507a1bd1747f7c90a4447?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=anJRroReIIqnPiBkyxkB7JA7G3zgdx4vptVAMqf83bKNUpeH0S0tKQqu-uwZYAenorHyCgGukzNW2CIrlYXU0x6Lvl5wGuoYftS1pnivfDiz9hHj6EuR6tZR-HPayDpnWTzyh-PkV4OwLoeiKofA1k1hmWUpXN8ndMMVrbTc~B6SquzW3n26FRxdeFeU0sd0GVEI5k7SlceuoDVIHFEKUDNeWR4hfWYAByKWBq~Yje8Bzwj-ZJHwKI2PR-n5X5UGVsjD2Mcff6ygUMpzb3BrLtJ27oCZXoc-V9w7GIhDeWudZe0yeYO2As6Wyt7Bxc6sPTZvN3n8Y2waYVSm4tXhqw__', 
      name_utilisateur: 'itsdougthepug', 
      visited: false 
    },
    { 
      img_profile: 'https://s3-alpha-sig.figma.com/img/02dc/b37b/e364369c1425aa22414540a765f104d7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2XYg8hshbSbhWOzIl1I6MbctzrAWiahGBN~vsaCiffAOhSK5B~1ZwqtXKxnPP97HmjId90WIlHfN-7B6K0Z40HxRcq3SZrxsKUvnDEWP18omwEau-XAPXa5Y5p4XKI~8URszw-d4CmfIrGy-MaLDD30FE1gCsZ8GAUhVBclwvtuSlzoFmXrnxyhXfaH73SJIY2EMl20203WzruUl1RnewUzcAey-eGQ8fmmOYwCPqPajIFEHy9mpTAhLN21kMgEaigOl0qdQQIzVRMpU6Upez6I4Itev74GpNuDpEnNmbTk9vUKHHj5JniI0uP5l7EPGVdsQjU9rXCbfRXIAPkfkw__', 
      name_utilisateur: 'openaidalle', 
      visited: false
    },
    { 
      img_profile: 'https://s3-alpha-sig.figma.com/img/4961/b825/03746d58b13bf1eaa3f12121fcfe4c60?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eniTCLgfj95R~KzUpSUL-aasAgh813hehmppkgsNGDSzux8aB4Gp82SVN8d44WRrTfFbLX9FHJ5r0fXsxxqxb4WU-61drwIOl6pyU91Vb52ctb4hBhO7j~irexQ9rx1lUAjJZKWAQxBJopILlnuDgefCg5Md-QVl0DbaNiQOz2T-rEovxANFiHOdU1U-bh9E6XgdVSFGm3QgW7AsTgb4loCG9ixL3o3Q3TA06JVdkvLyLzuaCXTcx0DnQjAGhC2-FdkWXr5XMfeS3lBDECqHds5zg3rgTvCXTwORlQaAmtYNfLwL0HYY5~4MzZd6u3h0ctQgkODgzkIvk8fQxeltGA__', 
      name_utilisateur: 'mkbhd', 
      visited: false 
    },
    { 
      img_profile: 'https://s3-alpha-sig.figma.com/img/1abc/33ed/260797fb26280ba4939cb0d7e5835f5c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuekCKC-q0VU78KOyCcMhfnCvQqA-TmRPhHwcugq-VZyEndkaVu1qnyrmdGdiUsMWKYJEoo9mbCWfHrHPztAullGX57GGEuXl~whraKNlQcKwq55AssYZMHTNZx9JMH6cyDHfS1KtltQN3CB-vj~fgC4Pae6zSjS4Xk6S-oj7tobExhEFETDvj7MUCoGfBXzxR~SnhKtv3Kn2Zv~6cg1xjYMvXMi8xIy~xy4C6nbEH9t0I68vIDRa9jOzkATF8EbMmBvujqT4F2Bk5vWFznVAHkP4fJwHKOpn9F5JXjvQEqXNwyxVUbK8YY53qYypEjjXPswPPdob6ybEJMLjFriNg__', 
      name_utilisateur: 'wahab.xyz', 
      visited: true
    },
    { 
      img_profile: 'https://s3-alpha-sig.figma.com/img/bc08/1145/322d64092b54a3f6573d6fb9a77ad43f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZiqJc5q-7WFranEO8SooND3YDDZuOfXpz1sD7wuYfJJolpM-dha3qjleibcwaNs5NxWlhlTQBwOlxfOl0NvBJ9jKDbNxQ-vuu~Ldz2qtFulwknQrrAsu70XGerY4RQRm3Y2K~sSbVD7icxknr92vYfh8VbJac1g8N1AaQRlOoBKsQKQwLE07TVAxjUaB-QebPBymDmA9QGm6ybCySIt7WftJumKdBticAWuIRGqO44IDM7W8Gpeup7uktizotzN9FT3Up5FWM6ZzU6GoWEFhjasalgHwxqE5eki2gqujBadqoVDcn9K8qBhXtachZbgmqBy6EUmOoazgg0REI3z0CQ__', 
      name_utilisateur: 'lewishamilton', 
      visited: false 
    },
    { 
      img_profile: 'https://s3-alpha-sig.figma.com/img/1d5a/67f1/05c87ba141ebe9163071de206e1502b6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RO2xYpEKGlWeSvDSc5oWbvEp0KsB48Hv7-~WoIMaRjWzDRDJ5zZ6-UE25qZD~7LFh3gHKVjUSiHl3~XCmp~Zb7KcgZO6wXnk0ORAyoesLpOUV5GX-OvySmvLfV-cdXFKLOYNz4Sj3agBz14jSxLafePDFrDs5urVXGcGRPyvSHerf9heV-s3t86jySjOjOA~n2gBuvvDcouEhY2rO1ezlcOTFI93IlSEZFfYZHblPfPIzwzlHI0UPE5xxPTQ-YKPy~iGGl1xs7KQRFTnwUgMxCkfYvh757O11KNWDV5vC5bCD2GC3nkEzEAzBY8P53pvdbQg9NriIBuc0Wcfwf~YJg__', 
      name_utilisateur: 'defavours', 
      visited: true
    }
  ];

  return (
    <>
    <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Head>
    <div className={styles.stories_container}>
      <div className={styles.stories_row}>
        {simulatedData.map((user, index) => (
          <Story
            key={index}
            img_profile={user.img_profile}
            name_utilisateur={user.name_utilisateur}
            visited={user.visited}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Stories;
