import LoginPageTemplate from "./login_page_template"
import { StoryFn } from "@storybook/react";

import { themeController } from '../../saticoy-ui/globals/theme';
import { i18nController } from '../../saticoy-ui/globals/i18n';

export default {
    title: 'Templates/LoginPageTemplate',
    component: LoginPageTemplate,
};

const Template = () => <LoginPageTemplate />

export const Default: StoryFn = Template.bind({});
Default.args = {
    themeController: themeController,
    i18nController: i18nController
}
