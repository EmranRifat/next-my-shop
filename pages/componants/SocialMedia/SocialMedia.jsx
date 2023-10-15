import { AuthContext } from "@/pages/providers/AuthProvider";
import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const SocialMedia = () => {
  const { googleLogin, facebookLogin } = useContext(AuthContext);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      const saveUser = { name: user.displayName, email: user.email, image: user.photoURL };

      // Send user data to your server for further processing
      await fetch(`api/userAccountCreate`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      });

      // Display a success message and navigate to the desired page
      Swal.fire({
        icon: "success",
        title: "User created successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/');
    } catch (error) {
      console.log("Google error message:", error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await facebookLogin();
      const user = result.user;
      // Do something with the Facebook user data
      console.log(user);
    } catch (error) {
      console.log("Facebook error message:", error.message);
    }
  };

  return (
    <div className="mt-5 px-8">
      <div className="w-full text-center mb-4 flex items-center justify-center gap-3 md:gap-6">
        <div>
          <button onClick={handleGoogleLogin} className="rounded-full text-center">
            <span className="text-4xl md:text-5xl">
              <FcGoogle className="border-2 rounded-full border-green-500 hover:bg-sky-200 px-1"></FcGoogle>
            </span>
          </button>
        </div>
        <div>
          <button onClick={handleFacebookLogin} className="rounded-full text-center">
            <span className="text-4xl md:text-5xl">
              <FaFacebook className="text-sky-600 border-2 rounded-full border-green-500 hover:bg-sky-200 px-1"></FaFacebook>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
