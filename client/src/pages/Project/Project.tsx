import React, { useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { Avatar } from "../../components/Avatar/Avatar"
import { Button } from "../../components/Buttons/Button"
import { LinkButton } from "../../components/Buttons/LinkButton"
import { Wrapper } from "../../components/Forms/Wrapper"
import { Slider } from "../../components/Slider/Slider"
import { ProjectService } from "../../services/project"
import { NavLink } from "react-router-dom"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useModal } from "../../hooks/useModal"
import { Modal } from "../../components/Modals/Modal"
import { SelectButton } from "../../components/Buttons/SelectButton"
import {
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
} from "wagmi"
import { BigNumber } from "ethers"
import { TextInput } from "../../components/Inputs/TextInput"
import { ethers } from "ethers"

export const Project = () => {
  const { id } = useParams()

  const { data, isError, isLoading } = useQuery(
    ["project"],
    () => ProjectService.getById(id),
    {
      select: (data) => data.project,
    }
  )

  const { isOpen, toggle, close } = useModal()

  const { isConnected } = useAccount()

  const [amount, setAmount] = useState("0")

  const { config } = usePrepareSendTransaction({
    request: {
      to: "",
      value: BigNumber.from(
        amount != "" ? ethers.utils.parseEther(amount) : "0"
      ),
    },
  })
  const {
    data: txData,
    isLoading: txLoading,
    isSuccess: txSuccess,
    sendTransaction,
  } = useSendTransaction(config)

  console.log(txData)

  const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendTransaction?.()
  }

  return (
    <Wrapper>
      <Slider images={data?.screenShotsUrl} />
      <div className='grid grid-cols-[1fr__0.6fr] gap-5 mt-5'>
        <section>
          <div className='flex flex-col gap-y-3'>
            <h1 className='font-bold text-5xl'>{data?.name}</h1>

            <p className='font-normal text-xl'>{data?.shortDescription}</p>
          </div>
          <div className='flex gap-x-5 items-center mt-[10px]'>
            {/* {/* <LinkButton
              title={"Презентация"}
              className={"p-[20px] py-[10px] text-white"}
              url=
            /> */}
            {/* <LinkButton
              title={"Demo"}
              className={"p-[20px] py-[10px] text-black bg-white"}
              url={data?.demoUrl || ""}
            /> */}

            <a target={"_blank"} href={data?.presentationUrl}>
              <div
                className={`p-[20px] py-[10px] font-bold text-2xl border rounded-[10px] border-lightGray`}
              >
                <span className='text-white'>Презентация</span>
              </div>
            </a>

            <a target={"_blank"} href={data?.demoUrl}>
              <div
                className={`p-[20px] py-[10px] font-bold text-2xl border rounded-[10px] border-lightGray bg-white`}
              >
                <span className='text-black'>Demo</span>
              </div>
            </a>
          </div>

          <div className='mt-5'>
            <h2 className='font-bold text-2xl'>Описание</h2>
            <p>{data?.longDescription}</p>
          </div>
        </section>

        <section>
          <Wrapper>
            <div className='flex flex-col'>
              <span className='font-bold text-[32px]'>
                ~ {data?.investments} р.
              </span>
              <span>полученные инвестиции</span>
            </div>
            <div className='mt-5'>
              <span className='text-2xl font-normal'>Команда</span>
              <div className='flex flex-wrap gap-5 mt-[10px]'>
                {/* {data?.teamMembers.map((person) => (
                  <Avatar person={person} />
                ))} */}
              </div>
            </div>
          </Wrapper>
          <div className='flex flex-col mt-5'>
            <div className='flex gap-x-5'>
              <Button
                title={"Инвестировать"}
                className={"bg-darkGreen rounded-[10px] w-full"}
                onClick={toggle}
              />
              <Button
                title={"Иная поддержка"}
                className={"bg-mainGreen rounded-[10px] py-[10px] w-full"}
                onClick={() => {}}
              />
            </div>
          </div>
        </section>
      </div>
      <Modal isOpen={isOpen} closeModal={close}>
        <div className='flex items-center flex-col gap-y-5'>
          <span className='text-2xl font-bold text-center'>
            Поддержите проект переведя криптовалюту на адрес кошелька
          </span>
          <ConnectButton />
          {isConnected && (
            <>
              <form
                id='sendTokens'
                onSubmit={handleOnSubmit}
                className='flex items-center border border-lightGray bg-lightBlack rounded-[20px]'
              >
                <input
                  type={"number"}
                  name={"tokens"}
                  className={`font-bold text-2xl placeholder:text-lightGray text-white p-[22px] w-full rounded-[20px] outline-none bg-transparent`}
                  onChange={handleSetAmount}
                  value={amount}
                  placeholder={"Введите количество"}
                />

                <div className='pr-5 font-bold text-xl'>ETH</div>
              </form>

              <button
                form='sendTokens'
                type='submit'
                className={`font-bold text-2xl border-none text-black p-5 bg-darkGreen rounded-[20px]`}
              >
                Поддержать
              </button>
            </>
          )}
        </div>
      </Modal>
    </Wrapper>
  )
}
