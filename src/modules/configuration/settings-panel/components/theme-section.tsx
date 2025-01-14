'use client'

// Assets
import activeDarkIcon from '@/assets/icons/buttons/active/light-theme/dark-light-icon.svg'
import activeLightIcon from '@/assets/icons/buttons/active/light-theme/light-light-icon.svg'
import activeSystemIcon from '@/assets/icons/buttons/active/light-theme/system-light-icon.svg'
import inactiveDarkIcon from '@/assets/icons/buttons/inactive/light-theme/themes/dark-light-icon.svg'
import inactiveLightIcon from '@/assets/icons/buttons/inactive/light-theme/themes/light-light-icon.svg'
import inactiveSystemIcon from '@/assets/icons/buttons/inactive/light-theme/themes/system-light-icon.svg'

// Hooks
import useThemeSection from '@/modules/configuration/settings-panel/hooks/useThemeSection'

// Intl
import { useTranslations } from 'next-intl'

// Shadcn
import OptionButton from '@/modules/configuration/settings-panel/buttons/option-button'

const ThemeSection = () => {
  const { theme, changeTheme } = useThemeSection()
  const t = useTranslations('SettingsPanel')

  return (
    <section className='w-full h-fit flex flex-col'>
      <OptionButton
        label={t('themes.dark')}
        isSelected={theme === 'dark'}
        onClick={() => changeTheme('dark')}
        iconSrc={theme === 'dark' ? activeDarkIcon : inactiveDarkIcon}
        altText='Dark theme icon'
      />
      <OptionButton
        label={t('themes.light')}
        isSelected={theme === 'light'}
        onClick={() => changeTheme('light')}
        iconSrc={theme === 'light' ? activeLightIcon : inactiveLightIcon}
        altText='Light theme icon'
      />
      <OptionButton
        label={t('themes.system')}
        isSelected={theme === 'system'}
        onClick={() => changeTheme('system')}
        iconSrc={theme === 'system' ? activeSystemIcon : inactiveSystemIcon}
        altText='System theme icon'
      />
    </section>
  )
}

export default ThemeSection
