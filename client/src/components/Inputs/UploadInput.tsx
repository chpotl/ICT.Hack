import React, { FC, useEffect, useRef, useState } from "react"
import { Button } from "../Buttons/Button"
import { CloseButton } from "../Buttons/CloseButton"
import { Upload } from "../Icons/Upload"

interface Props {
  file: any
  setFile: any
}

export const UploadInput: FC<Props> = ({ file, setFile }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if (file) {
      const reader = new FileReader()

      reader.readAsDataURL(file[0])

      reader.onload = function () {
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
    setFile(event.target.files)
  }

  function resetInput() {
    setFile(null)
    setPreview(null)
    setIsShow(false)
  }

  return (
    <>
      <div
        onMouseEnter={() => preview && setIsShow(true)}
        onMouseLeave={() => preview && setIsShow(false)}
        className={`${
          !preview &&
          "border border-white border-dashed flex justify-center items-center"
        } rounded-[20px] relative`}
      >
        {preview ? null : (
          <button
            onClick={handleClick}
            className='flex items-center justify-center w-full p-5'
          >
            <div className='flex flex-col items-center'>
              <Upload />
              <span>Загрузить</span>
            </div>
          </button>
        )}
        {preview && (
          <img
            src={preview as string}
            className='rounded-[20px] w-full object-cover h-[200px]'
            alt='preview'
          />
        )}
        {isShow && (
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <CloseButton close={resetInput} color={"black"} />
          </div>
        )}
      </div>

      <input
        accept='image/*'
        ref={fileInputRef}
        type='file'
        className='hidden'
        onChange={onChange}
      />
    </>
  )
}
