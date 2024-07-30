import LoginForm, { LoginFormProps } from "./login_form";

export default {
    title: 'Molecules/Forms/LoginForm',
    component: LoginForm,
};

const Template = (props: LoginFormProps) => <LoginForm {...props} />;

export const Default = Template.bind({});
Default.args = {
};

export const WithWarning = Template.bind({});
WithWarning.args = {
    warning: 'This is a warning!'
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'This is an error!'
};

export const WithInfo = Template.bind({});
WithInfo.args = {
    info: 'This is information!'
};

export const WithWarningAndError = Template.bind({});
WithWarningAndError.args = {
    warning: 'This is an warning!',
    error: 'This is an error!'
};

export const WithInfoWarningAndError = Template.bind({});
WithInfoWarningAndError.args = {
    info: 'This is information!',
    warning: 'This is an warning!',
    error: 'This is an error!'
};