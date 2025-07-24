import React from "react";
import { ItemType } from "@/data";

export interface ExperienceItemProps {
  item: ItemType;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
  const { item } = props;

  return (
    <div>
      <div className=" text-[26px] text-gray-400 pt-[10px]">{item.title}</div>
      <div className=" text-gray-500  text-[20px]">
        {item.work.map((ele, idx) => {
          return <div key={idx}>{ele.content}</div>;
        })}
      </div>
    </div>
  );
};
export default ExperienceItem;
