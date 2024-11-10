import communityBlackSVG from '@/assets/icons/navbar/black/community.svg'
import communityWhiteSVG from '@/assets/icons/navbar/white/community.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Community() {
  return (
    <NavigationItem
      route='community'
      blackIcon={communityBlackSVG}
      whiteIcon={communityWhiteSVG}
      textKey='community'
    />
  )
}