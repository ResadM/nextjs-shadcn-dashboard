import { auth } from "@/auth";
import ProfileForm from "@/components/forms/profile-form";

export default async function Profile() {
  const session = await auth();
  return (
    <div>
      <ProfileForm session={session} />
    </div>
  );
}
