import React, { useState } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { Avatar } from "../../components/Avatar/Avatar"
import { Button } from "../../components/Buttons/Button"
import { LinkButton } from "../../components/Buttons/LinkButton"
import { Wrapper } from "../../components/Forms/Wrapper"
import { Slider } from "../../components/Slider/Slider"
import { ProjectService } from "../../services/project"
import { Link, NavLink } from "react-router-dom"
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
import { freeCashFlowConverter } from "../../utils/freeCashFlowConverter"

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
      to: data?.walletAddress || "",
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

  const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  return (
    <Wrapper>
      <Slider images={data?.screenShotsUrl} />
      <div className='sm:grid grid-cols-[1fr__0.6fr] gap-5 mt-5'>
        <section>
          <div className='flex flex-col gap-y-3'>
            <h1 className='font-bold text-5xl'>{data?.name}</h1>

            <p className='font-normal text-xl'>{data?.shortDescription}</p>
          </div>
          <div className='flex gap-x-5 items-center mt-[10px]'>
            <a href={`https://${data?.presentationUrl}`}>
              <div
                className={`p-[20px] py-[10px] font-bold text-2xl border rounded-[10px] border-lightGray`}
              >
                <span className='text-white'>Презентация</span>
              </div>
            </a>

            <a href={`https://${data?.demoUrl}`}>
              <div
                className={`p-[20px] py-[10px] font-bold text-2xl rounded-[10px] bg-white`}
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

            <div className='flex flex-col text-xl font-normal'>
              <p>
                FCF:{" "}
                <span className='font-bold'>
                  {freeCashFlowConverter(data?.freeCashFlow!)}
                </span>
              </p>
              <p>
                Срок реализации:{" "}
                <span className='font-bold'>{data?.realisation}</span>
              </p>
            </div>

            <div>
              <span className='text-2xl font-normal'>Команда</span>
              <div className='flex flex-wrap gap-5 mt-[10px]'>
                {data?.teamMembers[0].split(",").map((person) => (
                  <Avatar person={person} />
                ))}
              </div>
            </div>
          </Wrapper>

          <div className='flex flex-col mt-5'>
            <div className='flex gap-x-5'>
              <Button
                title={"Инвестировать"}
                className={
                  "bg-darkGreen rounded-[10px] py-[16px] px-[20px] w-full hover:bg-mainGreen transition-colors duration-300"
                }
                onClick={toggle}
              />
              <Button
                title={"Присоединиться"}
                className={
                  "bg-darkGreen rounded-[10px] py-[16px] px-[20px] w-full hover:bg-mainGreen transition-colors duration-300"
                }
                onClick={() => {}}
              />
            </div>
          </div>
        </section>
      </div>
      <Modal isOpen={isOpen} closeModal={close}>
        <div className='flex items-center flex-col gap-y-5'>
          <span className='text-4xl font-bold text-center'>
            Быстрая инвестиция
          </span>
          <ConnectButton />
          {isConnected && (
            <>
              <div className='flex items-center border border-lightGray bg-lightBlack rounded-[20px]'>
                <input
                  type={"number"}
                  name={"tokens"}
                  className={`font-bold text-2xl placeholder:text-lightGray text-white p-[22px] w-full rounded-[20px] outline-none bg-transparent`}
                  onChange={handleSetAmount}
                  value={amount}
                  placeholder={"Введите количество"}
                />

                <div className='pr-5 font-bold text-xl'>ETH</div>
              </div>

              <button
                onClick={() => sendTransaction?.()}
                // disabled={!sendTransaction}
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
