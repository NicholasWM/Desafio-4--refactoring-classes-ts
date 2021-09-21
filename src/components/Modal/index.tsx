import {useState, useRef, useEffect, ReactNode, KeyboardEvent, MouseEvent} from 'react'
import ReactModal from 'react-modal';

interface ModalProps{
  isOpen: any,
  children: ReactNode,
  setIsOpen: any;
}

function Modal(props:ModalProps){
  const { isOpen, children, setIsOpen } = props;
  const [modalStatus, setModalStatus] = useState<boolean>(isOpen)
  const prevIsOpenRef = useRef<boolean>()
  useEffect(()=>{
    prevIsOpenRef.current = isOpen
  })
  const isOpenPreviousValue = prevIsOpenRef ?? isOpen

  useEffect(()=>{
    if (isOpenPreviousValue !== isOpen) {
      console.log(props)
      setModalStatus(isOpen)
    }
  },[isOpen, isOpenPreviousValue])
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  )
}

export default Modal;