import React from "react"
import { IProject } from "../types/types"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "wagmi"
import { ProjectService } from "../services/project"
import { api } from "../services/axios"
import { useNavigate } from "react-router"

export const useCreateProject = () => {
  const navigate = useNavigate()

  const { mutate } = useMutation(
    (project) => ProjectService.createNew(project),
    {
      onSuccess: () => navigate("/"),
    }
  )

  // const mutate = (values: any) => {
  //   try {
  //     const data = new FormData()
  //     for (let value in values) {
  //       data.append(value, values[value])
  //     }
  //     api.post("/api/project", data, {
  //       withCredentials: true,
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  type InitialValues = Omit<
    IProject,
    | "creator"
    | "_id"
    | "trendIndex"
    | "category"
    | "moderated"
    | "screenShotsUrl"
  > & {
    category: string
    screenShot1: null
    screenShot2: null
    screenShot3: null
    screenShot4: null
    screenShot5: null
    screenShot6: null
  }

  const initialValues: InitialValues = {
    name: "",
    category: "",
    tags: [],
    shortDescription: "",
    longDescription: "",
    investments: 0,
    coverUrl: null,
    presentationUrl: "",
    screenShot1: null,
    screenShot2: null,
    screenShot3: null,
    screenShot4: null,
    screenShot5: null,
    screenShot6: null,
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
      name: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
      tags: Yup.array().of(Yup.string()).required("Required"),
      shortDescription: Yup.string().required("Required"),
      longDescription: Yup.string().required("Required"),
      investments: Yup.number(),
      // coverUrl: Yup.object(),
      presentationUrl: Yup.string().required("Required"),
      // screenShotsUrl: Yup.array().of(Yup.object()),
      teamMembers: Yup.array().of(Yup.string()),
      moderated: Yup.boolean(),
      demoUrl: Yup.string().required("Required"),
      walletAddress: Yup.string(),
      freeCashFlow: Yup.number(),
      realisation: Yup.string(),
    }),
    onSubmit: () => {
      mutate(values as any)
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
