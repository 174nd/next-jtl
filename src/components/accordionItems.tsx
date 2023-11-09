"use client";
import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { Collapse } from 'react-collapse';


export default function AccordionItem(data: {open: boolean, toggle: any, title: string, description: string}) {
  return (
    <div className="py-5">
      <div className="flex justify-between items-center font-medium cursor-pointer text-gray-900" onClick={data.toggle}>
        <p className="text-gray-900">{data.title}</p>
        <div className={"text-lg transition" + (data.open == true ? " rotate-180" : "")}>
        <AiOutlineDown/>
          
        </div>
      </div>

      <Collapse isOpened={data.open}>
        <div className="text-gray-900 mt-3 text-justify lg:text-sm">{data.description}</div>
      </Collapse>
    </div>
  )
}
