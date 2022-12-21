import React from "react"
import { IProject } from "../types/types"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "wagmi"
import { ProjectService } from "../services/project"
import { api } from "../services/axios"

export const useCreateProject = () => {
  // const { mutate } = useMutation((photo) => {
  //   const data = new FormData()
  //   data.append("coverUrl", photo)
  //   // ProjectService.upload(photo)
  //   const upload = async (photo: any) => {
  //     return api.post("/api/project", photo, {
  //       withCredentials: true,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //   }
  // })
  const mutate = (values: InitialValues) => {
    try {
      const files = new FormData()

      const screens = values.screenShotsUrl

      for (let i = 0; i < screens.length; i++) {
        files.append(`screenShot${i + 1}`, screens[i])
      }

      for (let value in values) {
        if (value != "screenShotsUrl") {
          files.append(value, values[value])
        }
      }

      api
        .post("/api/project", files, {
          withCredentials: true,
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        })
        .then((data) => console.log(data))
    } catch (err) {
      console.log(err)
    }
  }

  type InitialValues = Omit<
    IProject,
    "creator" | "_id" | "trendIndex" | "category" | "moderated"
  > & {
    category: string
  }

  const initialValues: InitialValues = {
    name: "",
    category: "",
    tags: [],
    shortDescription: "",
    longDescription: "",
    investments: 0,
    coverUrl: {},
    presentationUrl: "",
    screenShotsUrl: [],
    teamMembers: [],
    demoUrl: "",
    walletAddress: "",
    freeCashFlow: 0,
    realisation: "",
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
      name: Yup.string(),
      // .required("Required")
      category: Yup.string(),
      // .required("Required")
      tags: Yup.array().of(Yup.string()),
      // .required("Required")
      shortDescription: Yup.string(),
      // .required("Required")
      longDescription: Yup.string(),
      // .required("Required")
      investments: Yup.number(),
      // coverUrl: Yup.object(),
      presentationUrl: Yup.string(),
      //screenShotsUrl: Yup.array().of(Yup.object()),
      teamMembers: Yup.array().of(Yup.string()),
      moderated: Yup.boolean(),
      demoUrl: Yup.string(),
      walletAddress: Yup.string(),
      freeCashFlow: Yup.number(),
      realisation: Yup.string(),
    }),
    onSubmit: () => {
      console.log(values.coverUrl)

      // const formData = new FormData()
      // for (let value in values) {
      //   formData.append(value, values[value])
      // }

      // console.log(formData)

      mutate(values)
    },
  })

  //console.log("errors", errors)

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
  }
}
