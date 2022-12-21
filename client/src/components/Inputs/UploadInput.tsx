import React, { FC, useEffect, useRef, useState } from "react"
import { Button } from "../Buttons/Button"
import { CloseButton } from "../Buttons/CloseButton"
import { Upload } from "../Icons/Upload"
import { ErrorBoundary } from "react-error-boundary"

interface Props {
  file: File | null
  setFile: (event: React.ChangeEvent<HTMLInputElement>) => void
  multiple?: boolean
}

export const UploadInput: FC<Props> = ({ file, setFile, multiple = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)

  useEffect(() => {
    if (file) {
      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = () => {
        setPreview(reader.result)
      }
    } else {
      setPreview(null)
    }
  }, [file])

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

  return (
    <div
      className={`border border-white border-dashed flex justify-center items-center
        rounded-[20px] relative`}
    >
      <button
        onClick={handleClick}
        className='flex items-center justify-center w-full p-5'
      >
        {preview ? (
          <img
            src={preview as string}
            className='rounded-[20px] w-full object-cover h-[200px]'
            alt='preview'
          />
        ) : (
          <div className='flex flex-col items-center'>
            <Upload />
            <span>{`Загрузить ${multiple ? "несколько" : ""}`}</span>
          </div>
        )}
      </button>
      <input
        multiple={multiple}
        accept='image/*'
        ref={fileInputRef}
        type='file'
        className='hidden'
        onChange={onChange}
      />
    </div>
  )
}
