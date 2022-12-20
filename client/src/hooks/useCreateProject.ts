import React from "react"
import { IProject } from "../types/types"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "wagmi"
import { ProjectService } from "../services/project"

export const useCreateProject = () => {
  const { mutate } = useMutation((project) => ProjectService.createNew(project))

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
    webSite: "",
    logoUrl: "",
    coverUrl: "",
    presentationUrl: "",
    screenShotsUrl: [],
    teamMembers: [],
    demoUrl: "",
    walletAddress: "",
    region: "",
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
      category: Yup.string().required("Required"),
      tags: Yup.array().of(Yup.string()).required("Required"),
      shortDescription: Yup.string().required("Required"),
      longDescription: Yup.string().required("Required"),
      investments: Yup.number(),
      webSite: Yup.string(),
      logoUrl: Yup.string(),
      coverUrl: Yup.string(),
      presentationUrl: Yup.string(),
      screenShotsUrl: Yup.array().of(Yup.string()),
      teamMembers: Yup.array().of(Yup.string()),
      moderated: Yup.boolean(),
      demoUrl: Yup.string(),
      walletAddress: Yup.string(),
      region: Yup.string(),
    }),
    onSubmit: () => {
      console.log("values", values)
      console.log("errors", errors)
      //mutate(values)
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
