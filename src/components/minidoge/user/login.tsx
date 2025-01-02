import { memesTextSize, memesTitleSize } from '@/components/domain/styles'
import Icon from '@/components/icon'
import { Button, Divider, Input, Select, Modal, Alert } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSignIn, useClerk, useSignUp, useSession } from '@clerk/clerk-react'
import { useClerkSession } from '@/hooks/useClerkSession'

const { Option } = Select

interface ClerkError {
  message: string
  code: string
}

// 登录
const Login = ({
  open,
  setState,
  onSuccess,
}: {
  open: boolean
  setState: (state: 'login' | 'register') => void
  onSuccess: () => void
}) => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [sendCode, setSendCode] = useState(false)
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, isLoaded: signInLoaded } = useSignIn()
  const { session } = useSession()
  const clerk = useClerk()

  useEffect(() => {
    console.log(session, 'session')
  }, [session])

  const handleSendCode = async () => {
    if (!signInLoaded || !signIn) return

    setError(false)
    setErrorMessage('')
    setLoading(true)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailPattern.test(email)) {
      setError(true)
      setErrorMessage(t('login.pleaseEnterAValidEmailAddress'))
      setLoading(false)
      return
    }

    try {
      await signIn.create({
        identifier: email,
        strategy: 'email_code',
      })
      setSendCode(true)
    } catch (err: unknown) {
      const error = err as ClerkError
      setError(true)
      setErrorMessage(error.message || '发送验证码失败，请稍后重试')
      console.error('发送验证码错误:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleConfirm = async () => {
    if (!signInLoaded || !signIn) return

    if (!code) {
      setError(true)
      setErrorMessage('请输入验证码')
      return
    }

    setLoading(true)
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: 'email_code',
        code,
      })

      if (result.status !== 'complete') {
        setError(true)
        setErrorMessage('验证失败，请重试')
        return
      }
      await clerk.setActive({ session: result.createdSessionId })

      setEmail('')
      setCode('')
      setError(false)
      setErrorMessage('')
      setSendCode(false)
      onSuccess()
    } catch (err: unknown) {
      const error = err as ClerkError
      setError(true)
      setErrorMessage(error.message || '验证码验证失败，请检查后重试')
      console.error('验证码验证错误:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    if (!signInLoaded || !signIn) return

    try {
      const result = await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: window.location.href,
        redirectUrlComplete: window.location.href,
      })
      console.log(result, 'result')

      // google登陆成功后操作
    } catch (err) {
      console.error('Google 登录错误:', err)
    }
  }

  useEffect(() => {
    if (!open) {
      setEmail('')
      setCode('')
      setError(false)
      setErrorMessage('')
      setSendCode(false)
    }
  }, [open])

  return (
    <div className="flex flex-col items-center py-5 gap-5 sm:gap-7 mt-4">
      <div className="flex flex-col items-center gap-1">
        <span className={`${memesTitleSize} !text-3xl !font-bold`}>
          {t('login.title')}
        </span>
        <span
          className={`${memesTextSize} !text-xs !font-medium text-[#B8B8B8]`}
        >
          {t('login.text')}
        </span>
      </div>
      {error && (
        <Alert
          message={
            <>
              <Icon name="a-error" className="!text-xl -mt-1" />
              &nbsp;&nbsp;
              <span className="text-[#FF0303]">{errorMessage}</span>
              &nbsp;
              <span className="text-white/50">
                {t('login.donTHaveAnAccount')}
              </span>
              &nbsp;
              <a
                className="!text-current !underline  underline-offset-4"
                onClick={() => setState('register')}
              >
                {t('login.clickToRegister')}
              </a>
            </>
          }
          className={`${memesTextSize} !text-sm !font-medium  w-full p-5 text-center`}
          type="error"
        />
      )}
      {sendCode && (
        <Alert
          message={
            <>
              <Icon name="a-success" className="!text-xl -mt-1" />
              &nbsp;&nbsp;
              <span className="text-[#14C893]">
                {t('login.verificationCodeHasBeenSentToYourEmail')}
              </span>
              &nbsp;{email}
            </>
          }
          className={`${memesTextSize} !text-sm !font-medium  w-full p-5 text-center`}
          type="success"
        />
      )}
      {sendCode ? (
        <Input
          placeholder={t('login.verificationCode')}
          size="large"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
      ) : (
        <Input
          placeholder={t('login.pleaseEnterAValidEmailAddress')}
          size="large"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      )}
      {sendCode ? (
        <>
          {' '}
          <Button
            type="primary"
            size="large"
            className="w-full"
            onClick={handleConfirm}
            loading={loading}
          >
            {loading ? '验证中...' : t('login.confirm')}
          </Button>
        </>
      ) : (
        <Button
          type="primary"
          size="large"
          className="w-full"
          onClick={handleSendCode}
          loading={loading}
        >
          {loading ? '发送中...' : t('login.sendVerificationCode')}
        </Button>
      )}

      <Divider
        className={`${memesTextSize} !text-xs !font-medium !text-[#B8B8B8] !m-0`}
      >
        {t('login.orUseTheFollowingMethod')}
      </Divider>
      <Button
        type="default"
        size="large"
        className="w-full !text-current"
        onClick={handleGoogleLogin}
      >
        <Icon name="google" />
        {t('login.signInWithGoogle')}
      </Button>
      <span className={`${memesTextSize} !text-xs !font-medium text-[#B8B8B8]`}>
        {t('login.donTHaveAnAccount')}&nbsp;
        <a
          className="text-primary !underline !text-[#FFAC03] underline-offset-4"
          onClick={() => setState('register')}
        >
          {t('login.register')}
        </a>
      </span>
    </div>
  )
}

// 注册
const Register = ({
  open,
  onSuccess,
}: {
  open: boolean
  onSuccess: () => void
}) => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showCode, setShowCode] = useState(false)
  const { signUp, isLoaded: signUpLoaded } = useSignUp()
  const clerk = useClerk()

  const handleRegister = async () => {
    if (!signUpLoaded || !signUp) return

    if (!email) {
      setError(t('login.pleaseEnterAValidEmailAddress'))
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError(t('login.pleaseEnterAValidEmailAddress'))
      return
    }

    setLoading(true)
    try {
      await signUp.create({
        emailAddress: email,
      })

      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      })
      setShowCode(true)
      setError('')
    } catch (err: unknown) {
      const error = err as ClerkError
      setError(error.message || '注册失败，请稍后重试')
      console.error('注册错误:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    if (!signUpLoaded || !signUp) return

    if (!code) {
      setError('请输入验证码')
      return
    }

    setLoading(true)
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (
        completeSignUp.status === 'complete' &&
        completeSignUp.createdSessionId
      ) {
        await clerk.setActive({ session: completeSignUp.createdSessionId })
        setEmail('')
        setCode('')
        setError('')
        setShowCode(false)
        onSuccess()
      } else {
        throw new Error('注册未完成')
      }
    } catch (err: unknown) {
      const error = err as ClerkError
      if (error.code === 'session_exists') {
        await clerk.signOut()
        handleVerifyCode()
        return
      }
      setError(error.message || '验证码验证失败，请检查后重试')
      console.error('验证码验证错误:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!open) {
      setEmail('')
      setCode('')
      setError('')
      setShowCode(false)
    }
  }, [open])

  return (
    <>
      <div className="flex flex-col items-center py-5 gap-5 sm:gap-7">
        <div className="flex flex-col items-center gap-1">
          <span className={`${memesTitleSize} !text-3xl !font-bold`}>
            {t('login.registerYourAccount')}
          </span>
          <span
            className={`${memesTextSize} !text-xs !font-medium text-[#B8B8B8]`}
          >
            {t('login.automaticallyLogInAfterSuccessfulRegistration')}
          </span>
        </div>
        {error && (
          <Alert
            message={<span className="text-[#FF0303]">{error}</span>}
            className={`${memesTextSize} !text-sm !font-medium w-full p-5 text-center`}
            type="error"
          />
        )}
        {showCode ? (
          <div className="flex flex-col gap-5 w-full">
            <Input
              placeholder={t('login.verificationCode')}
              size="large"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            <div className="flex gap-4">
              <Button
                size="large"
                className="flex-1"
                onClick={() => setShowCode(false)}
              >
                {t('login.back')}
              </Button>
              <Button
                type="primary"
                size="large"
                className="flex-1"
                onClick={handleVerifyCode}
                loading={loading}
              >
                {loading ? '验证中...' : t('login.verify')}
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex gap-2 w-full">
              <Input
                placeholder={t('login.emailAddress')}
                size="large"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <Button
              type="primary"
              size="large"
              className="w-full"
              onClick={handleRegister}
              loading={loading}
            >
              {loading ? '发送中...' : t('login.sendVerificationCode')}
            </Button>
          </>
        )}
      </div>
    </>
  )
}

// 登录弹窗
export const LoginModal = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const [state, setState] = useState<'login' | 'register'>('login')
  useClerkSession()
  useEffect(() => {
    if (!open) {
      setState('login')
    }
  }, [open])

  return (
    <Modal open={open} centered footer={null} onCancel={onClose}>
      {state === 'login' ? (
        <Login
          open
          setState={setState}
          onSuccess={() => {
            onClose()
          }}
        />
      ) : (
        <Register
          open
          onSuccess={() => {
            onClose()
          }}
        />
      )}
    </Modal>
  )
}
