"use client"
import styles from "./RightSideHomePage.module.css"
import UserSuggest from "./UserSuggest";
interface User {
  image_profile_user: string;
  username: string;
  description: string;
}

const mockUsers: User[] = [
  {
    image_profile_user: "https://s3-alpha-sig.figma.com/img/f1b5/c2ab/85fb415ef4f507a1bd1747f7c90a4447?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=anJRroReIIqnPiBkyxkB7JA7G3zgdx4vptVAMqf83bKNUpeH0S0tKQqu-uwZYAenorHyCgGukzNW2CIrlYXU0x6Lvl5wGuoYftS1pnivfDiz9hHj6EuR6tZR-HPayDpnWTzyh-PkV4OwLoeiKofA1k1hmWUpXN8ndMMVrbTc~B6SquzW3n26FRxdeFeU0sd0GVEI5k7SlceuoDVIHFEKUDNeWR4hfWYAByKWBq~Yje8Bzwj-ZJHwKI2PR-n5X5UGVsjD2Mcff6ygUMpzb3BrLtJ27oCZXoc-V9w7GIhDeWudZe0yeYO2As6Wyt7Bxc6sPTZvN3n8Y2waYVSm4tXhqw__",
    username: "user1",
    description: "This is user 1",
  },
  {
    image_profile_user: "https://s3-alpha-sig.figma.com/img/02dc/b37b/e364369c1425aa22414540a765f104d7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2XYg8hshbSbhWOzIl1I6MbctzrAWiahGBN~vsaCiffAOhSK5B~1ZwqtXKxnPP97HmjId90WIlHfN-7B6K0Z40HxRcq3SZrxsKUvnDEWP18omwEau-XAPXa5Y5p4XKI~8URszw-d4CmfIrGy-MaLDD30FE1gCsZ8GAUhVBclwvtuSlzoFmXrnxyhXfaH73SJIY2EMl20203WzruUl1RnewUzcAey-eGQ8fmmOYwCPqPajIFEHy9mpTAhLN21kMgEaigOl0qdQQIzVRMpU6Upez6I4Itev74GpNuDpEnNmbTk9vUKHHj5JniI0uP5l7EPGVdsQjU9rXCbfRXIAPkfkw__",
    username: "user2",
    description: "This is user 2",
  },
  {
    image_profile_user: "https://s3-alpha-sig.figma.com/img/4961/b825/03746d58b13bf1eaa3f12121fcfe4c60?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eniTCLgfj95R~KzUpSUL-aasAgh813hehmppkgsNGDSzux8aB4Gp82SVN8d44WRrTfFbLX9FHJ5r0fXsxxqxb4WU-61drwIOl6pyU91Vb52ctb4hBhO7j~irexQ9rx1lUAjJZKWAQxBJopILlnuDgefCg5Md-QVl0DbaNiQOz2T-rEovxANFiHOdU1U-bh9E6XgdVSFGm3QgW7AsTgb4loCG9ixL3o3Q3TA06JVdkvLyLzuaCXTcx0DnQjAGhC2-FdkWXr5XMfeS3lBDECqHds5zg3rgTvCXTwORlQaAmtYNfLwL0HYY5~4MzZd6u3h0ctQgkODgzkIvk8fQxeltGA__",
    username: "user3",
    description: "This is user 3",
  },
  {
    image_profile_user: "https://s3-alpha-sig.figma.com/img/1abc/33ed/260797fb26280ba4939cb0d7e5835f5c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuekCKC-q0VU78KOyCcMhfnCvQqA-TmRPhHwcugq-VZyEndkaVu1qnyrmdGdiUsMWKYJEoo9mbCWfHrHPztAullGX57GGEuXl~whraKNlQcKwq55AssYZMHTNZx9JMH6cyDHfS1KtltQN3CB-vj~fgC4Pae6zSjS4Xk6S-oj7tobExhEFETDvj7MUCoGfBXzxR~SnhKtv3Kn2Zv~6cg1xjYMvXMi8xIy~xy4C6nbEH9t0I68vIDRa9jOzkATF8EbMmBvujqT4F2Bk5vWFznVAHkP4fJwHKOpn9F5JXjvQEqXNwyxVUbK8YY53qYypEjjXPswPPdob6ybEJMLjFriNg__",
    username: "user4",
    description: "This is user 4",
  },
];

const Suggestions = () => {
  return (
    <div className={styles.suggestions_container}>
      <div className={styles.title}>
        <p>Des suggestions pour vous</p>
      </div>
      <div className={styles.users_suggestions}>
        {mockUsers.map((user, index) => (
          <UserSuggest
            key={index}
            image_profile_user={user.image_profile_user}
            username={user.username}
            description={user.description}
          />
        ))}
      </div>
    </div>
  );
};
 
export default Suggestions;