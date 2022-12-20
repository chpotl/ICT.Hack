import React, { FC, useEffect, useRef, useState } from "react"
import { Button } from "../Buttons/Button"
import { CloseButton } from "../Buttons/CloseButton"
import { Upload } from "../Icons/Upload"

interface Props {
  file: any
  setFile: any
  multiple?: boolean
}

export const UploadInput: FC<Props> = ({ file, setFile, multiple = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)

  const [isShow, setIsShow] = useState(false)

  // useEffect(() => {
  //   if (file) {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)

  //     reader.onload = function () {
  //       setPreview(reader.result)
  //     }
  //   } else {
  //     setPreview(null)
  //   }
  // }, [file])

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return

    setFile(event)
  }

  function resetInput() {
    setFile(null)
    setPreview(null)
    setIsShow(false)
  }

  return (
    <>
      <div
        onMouseEnter={() => file && setIsShow(true)}
        onMouseLeave={() => file && setIsShow(false)}
        className={`${
          !preview &&
          "border border-white border-dashed flex justify-center items-center"
        } rounded-[20px] relative`}
      >
        {/* {preview ? null : ( */}
        <button
          onClick={handleClick}
          className='flex items-center justify-center w-full p-5'
        >
          {/* {file?.length ? (
            <div>
              {multiple
                ? file?.map((f: File) => <div>{f.name}</div>)
                : file[0].name}
            </div>
          ) : ( */}
          <div className='flex flex-col items-center'>
            <Upload />
            <span>{`Загрузить ${multiple ? "несколько" : ""}`}</span>
          </div>
          {/* )} */}
        </button>
        {/* )} */}
        {/* {preview && (
          <img
            src={preview as string}
            className='rounded-[20px] w-full object-cover h-[200px]'
            alt='preview'
          />
        )} */}

        {isShow && (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <CloseButton close={resetInput} color={"black"} />
          </div>
        )}
      </div>

      <input
        multiple={multiple}
        accept='image/*'
        ref={fileInputRef}
        type='file'
        className='hidden'
        onChange={onChange}
      />
    </>
  )
}
