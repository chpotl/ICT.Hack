import React from "react"
import { IProject } from "../types/types"
import { useFormik } from "formik"
import * as Yup from "yup"

export const useCreateProject = () => {
  type InitialValues = Omit<
    IProject,
    "creator" | "_id" | "moderated" | "trendIndex"
  >

  const initialValues: InitialValues = {
    name: "",
    category: [],
    tags: [],
    shortDescription: "",
    longDescription: "",
    investments: 0,
    webSite: "",
    logoUrl: "",
    coverUrl: "",
    presentationUrl: "",
    screenShotsUrl: [],
    teamMembers: [],
    demoUrl: "",
    region: "",
    walletAddress: "",
  }

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      shortDescription: Yup.string().required("Required"),
      longDescription: Yup.string().required("Required"),
      webSite: Yup.string(),
      investments: Yup.number(),
    }),
    onSubmit: () => {
      console.log(errors)
      console.log(values)
    },
  })

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
  }
}

// {
//     "name": "Yooci",
//     "category": "6395d58168e21e1428a9b213",
//     "tags": [
//       "NFT",
//       "blockchain",
//       "health"
//     ],
//     "shortDescription": "Yooci is a blockchain application that utilizes Nfts to store health records that are only accessible to the owner or organizations given access to by the user",
//     "longDescription": "Yooci is a blockchain application that utilizes Nfts to store health records that are only accessible to the owner or organizations given access to by the user. In a normal hospital management system, every hospital has it’s own records for patients. But by Utilizing Nfts, Yooci makes it possible for users to own their own records, So no more creating new records in every hospital you go to.",
//     "investments": 710000,
//     "webSite": "https://yooci.vercel.app/",
//     "logoUrl": "https://storage.googleapis.com/ethglobal-api-production/projects%2Fhm2h6%2Fimages%2FYOOCI%20(600%20%C3%97%20335%20px)%20(1).png",
//     "coverUrl": "https://storage.googleapis.com/ethglobal-api-production/projects%2Fhm2h6%2Fimages%2FYOOCI%20(600%20%C3%97%20335%20px)%20(1).png",
//     "presentationUrl": "https://drive.google.com/file/d/1GLusWAo6T9WmvLUiIpSR3tyXPLTSLFBu/view?usp=share_link",
//     "screenShotsUrl": [
//       "https://storage.googleapis.com/ethglobal-api-production/projects%2Fhm2h6%2Fimages%2FScreenshot%202022-09-25%20at%2018.34.46.png",
//       "https://storage.googleapis.com/ethglobal-api-production/projects%2Fhm2h6%2Fimages%2FScreenshot%202022-09-25%20at%2018.34.09.png",
//       "https://storage.googleapis.com/ethglobal-api-production/projects%2Fhm2h6%2Fimages%2FScreenshot%202022-09-25%20at%2018.33.47.png"
//     ],
//     "teamMembers": ["6395af0716ba804341bbb950"],
//     "moderated": false,
//     "demoUrl": "https://yooci.vercel.app/",
//     "walletAddress": "0xEfbb567781278e130CC518D15664bBd3bc3260B2",
//     "region": "6395b35d74c93fc92b1f293a"
//   }
