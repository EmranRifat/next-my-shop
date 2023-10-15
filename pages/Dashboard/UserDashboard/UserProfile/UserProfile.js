import { AuthContext } from "@/pages/providers/AuthProvider";
import { Upload } from "antd";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot, FaPhone, FaUser, FaUserGroup } from "react-icons/fa6";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-3/5 mx-auto bg-white p-10 shadow-2xl">
      <h1 className="text-2xl front-bold">Personal Details</h1>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Name and Email Input filed */}
        <div className="flex flex-wrap justify-around gap-6 ">
          <div className="form-control w-2/5">
            <label className="label ">
              <span className="label-text flex items-center">
                {" "}
                <FaUser /> <span className="pl-2">Name</span>
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="email"
              value={user?.displayName}
              placeholder={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-2/5">
            <label className="label ">
              <span className="label-text flex items-center">
                {" "}
                <AiOutlineMail /> <span className="pl-2">Email</span>
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              value={user?.email}
              placeholder={user?.email}
              disabled
              className="input input-bordered"
            />
          </div>
        </div>
        {/* Phone Number and Gender Input filed */}
        <div className="flex flex-wrap justify-around gap-6 mt-5">
          <div className="form-control w-2/5">
            <label className="label ">
              <span className="label-text flex items-center">
                {" "}
                <FaPhone /> <span className="pl-2">Phone Number</span>
              </span>
            </label>
            <input
              type="number"
              {...register("phoneNumber", { required: true })}
              name="phoneNumber"
              placeholder={user?.phoneNumber}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-2/5">
            <label className="label ">
              <span className="label-text flex items-center">
                {" "}
                <FaUserGroup /> <span className="pl-2">Gender Selection</span>
              </span>
            </label>
            <select {...register("gender")} className="input input-bordered">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <div className="form-control mx-10 mt-5">
            <label className="label ">
              <span className="label-text flex items-center">
                {" "}
                <FaLocationDot /> <span className="pl-2">Location</span>
              </span>
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              name="location"
              placeholder="Location"
              className="input input-bordered"
            />
          </div>
        </div>
        <div>
          <div className="form-control mx-10 mt-5">
            <label className="label ">
              <span className="label-text flex items-center">
                {" "}
                <AiOutlineMail /> <span className="pl-2">Message</span>
              </span>
            </label>
            <textarea className="textarea textarea-bordered textarea-lg w-full "
            type="text"
            {...register("message", { required: true })}
            name="message"
            placeholder="Message"
            ></textarea>
          </div>
        </div>
        <input className="mt-16 mx-auto border-2 px-10 py-2 text-lg md:text-xl font-bold bg-blue-500 hover:bg-blue-800 text-white" type="submit"  value={"Update Profile"}/>
      </form>
    </div>
  );
};

export default UserProfile;
