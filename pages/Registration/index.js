import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { FaRegEye } from "react-icons/fa";
import Lottie from "lottie-react";
import loginImage from "../../public/animation_lnbc4zei";
import SocialMedia from "../componants/SocialMedia/SocialMedia";
import Link from "next/link";
import { AuthContext } from "../providers/AuthProvider";

const index = () => {
  const router = useRouter();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [show, setShow] = useState(true);
  const [confirmShow, setConfirmShow] = useState(true);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();


  let imgURL;

  //imagebb upload image and get image url
  const img_hosting_token = "d73659ce7a4d4dee84b0a167ca4d6f40";
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
 

  const onSubmit = async (data) => {

    // here upload the image in imagebb and get url for this image 
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          imgURL = imgResponse.data.display_url;
        }
      });


    setError("");

    if (data.confirmPassword === data.password) {
      try {
        const result = await createUser(data.email, data.password);
        const loggedUser = result.user;

        await updateUserProfile(data.name, data.photoURL);

        const saveUser = {
          name: data.name,
          email: data.email,
          image: imgURL,
          password: data.password,
          phoneNumber: data.phoneNumber,
        };

        const response = await fetch(
          `api/userAccountCreate`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          }
        );

        const responseData = await response.json();
        if (responseData.data.acknowledged) {
          reset();
          Swal.fire({
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/");
        }
      } catch (error) {
        setError(error);
      }
    } else {
      setError(
        "Confirm password and password are not the same, please try again!!"
      );
    }
  };

  return (
    <div className="hero min-h-[80vh]  pt-20 md:pt-0">
      <div className="hero-content w-full flex flex-col md:flex-row">
        <div className="w-1/2">
          <Lottie animationData={loginImage} loop={true} />
        </div>
        <div className="card flex-shrink-0 md:w-1/3 shadow-2xl bg-base-100">
          <h1 className="text-xl font-semibold text-center mt-10">
            Registration
          </h1>
          <p className="text-center text-red-500 text-lg">{error}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                {...register("phoneNumber", { required: true })}
                name="phoneNumber"
                placeholder="Phone Number"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Phone Number is required</span>
              )}
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div> */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Choose a Image</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full "
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "password" : "text"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase, one special character.
                </p>
              )}
              <p
                onClick={() => setShow(!show)}
                className="absolute right-2 bottom-4 text-xl"
              >
                {" "}
                <FaRegEye className=""></FaRegEye>
              </p>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={confirmShow ? "password" : "text"}
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Confirm Password is required</p>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <p className="text-red-600">
                  Confirm Password must be 6 characters
                </p>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <p className="text-red-600">
                  Confirm Password must have one Uppercase, one special
                  character.
                </p>
              )}
              <p
                onClick={() => setConfirmShow(!confirmShow)}
                className="absolute right-2 bottom-4 text-xl"
              >
                {" "}
                <FaRegEye className=""></FaRegEye>
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-cyan-300 hover:bg-cyan-600 hover:text-white"
                type="submit"
                value="Registration"
              />
            </div>
          </form>
          <p className="text-center">
            All ready have an{" "}
            <span className="text-cyan-500">
              <Link href="/Login">account</Link>
            </span>
          </p>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default index;
