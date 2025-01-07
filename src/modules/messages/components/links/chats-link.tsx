import chatBlackSVG from '@/modules/messages/assets/black/chats-light.svg'
import chatWhiteSVG from '@/modules/messages/assets/white/chats-light.svg'
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

export default function Chats() {
  return (
    <NavigationItem
      route='chats'
      blackIcon={chatBlackSVG}
      whiteIcon={chatWhiteSVG}
    />
  )
}
