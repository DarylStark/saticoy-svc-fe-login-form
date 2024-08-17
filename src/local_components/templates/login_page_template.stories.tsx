import LoginPageTemplate from "./login_page_template"
import ThemeSelectMenu from "../organisms/theme_select_menu/theme_select_menu"
import LocaleSelectMenu from "../../components/organisms/user_icon_menus/locale_select_menu/locale_select_menu"
import { LoginPageTemplateProps } from "./login_page_template"
import { StoryFn } from "@storybook/react";


export default {
    title: 'Templates/LoginPageTemplate',
    component: LoginPageTemplate,
};

const Template = (props: LoginPageTemplateProps) => <LoginPageTemplate {...props} />

export const Default: StoryFn<LoginPageTemplateProps> = Template.bind({});
Default.args = {
    headerMenus: <>
        <ThemeSelectMenu
            themes={[
                { 'name': 'Example theme 1', value: 'example_theme_1' },
                { 'name': 'Example theme 2', value: 'example_theme_2' },
                { 'name': 'Example theme 3', value: 'example_theme_3' },
                { 'name': 'Example theme 4', value: 'example_theme_4' },
            ]}
            selectedMode='auto'
            selectedTheme='example_theme_1'
        />
        <LocaleSelectMenu
            locales={[
                { 'name': 'English', value: 'en' },
                { 'name': 'Español', value: 'es' },
                { 'name': 'Français', value: 'fr' },
                { 'name': 'Deutsch', value: 'de' },
            ]}
            selectedLocale='auto'
        />
    </>
}
