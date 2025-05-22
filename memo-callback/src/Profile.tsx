import { memo } from "react";

type Props = {
  firstname: string;
  lastname: string;
};

const Profile = memo(({ firstname, lastname }: Props) => {
  console.log("Rendered profile component");
  return (
    <h1>
      {firstname} {lastname}
    </h1>
  );
});

export default Profile;
