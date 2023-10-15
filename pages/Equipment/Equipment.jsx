import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Deal from "../componants/Deal";
import PersonalEquipment from "../componants/personalEquipment";
import Arrival from "../componants/Arrival";

const Equipment = () => {
  return (
    <div className="container mx-auto pb-10">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <Deal></Deal>
        <PersonalEquipment></PersonalEquipment>
        <Arrival></Arrival>

        
      </div>
    </div>
  );
};

export default Equipment;
