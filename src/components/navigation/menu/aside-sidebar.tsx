import Cart from '@/components/e-commerce/links/cart'
import Messages from '@/components/messages/chats'
import Notifications from '@/components/messages/notifications'
import Post from '@/components/feeds/links/post'
import Settings from '@/components/configuration/links/settings'
import styles from '@/styles/components/aside-sidebar.module.css'

export default function Panel() {
  return (
    <nav className={styles.aside}>
      <ul className='flex flex-row justify-between'>
        <Post />
        <Messages />
        <Notifications />
        <Cart />
        <Settings />
      </ul>
    </nav>
  )
}
