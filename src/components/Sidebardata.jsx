import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";

export const Sidebardata =[
    {
        title : "Home",
        icon : <IoHome />,
        link :"/"

    },
    {
        title : "Mail",
        icon : <IoMail />,
        link :"/mail"
        
    },
    {
        title : "Product",
        icon : <AiFillProduct />,
        link :"/product"
        
    },
   
    {
        title : "Gallery",
        icon : <GrGallery />,
        link :"/gallery"
        
    },
    {
        title : "Customer",
        icon : <GrGallery />,
        link :"/customer"
        
    },

]