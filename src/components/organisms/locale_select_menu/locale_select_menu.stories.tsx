import LocaleSelectMenu from "./locale_select_menu";

// Data to test with
import i18nController from "./test_data";

// Default component
export default {
    title: 'Organisms/LocaleSelectMenu',
    component: LocaleSelectMenu,
};

const Template = () => <LocaleSelectMenu localeController={i18nController} />;

export const Default = Template.bind({});