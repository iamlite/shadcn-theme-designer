import { Mail } from '@/components/examples/mail/components/mail'
import { accounts, mails } from '@/components/examples/mail/data'

interface MailPageProps {
  defaultLayout: any
  defaultCollapsed: any
}

export default function MailPage({ defaultLayout, defaultCollapsed }: MailPageProps) {
  return (
    <Mail
      accounts={accounts}
      mails={mails}
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
    />
  )
}
