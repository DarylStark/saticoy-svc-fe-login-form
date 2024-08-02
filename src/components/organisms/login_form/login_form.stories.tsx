import LoginForm, { LoginFormProps } from "./login_form";

export default {
    title: 'Molecules/Forms/LoginForm',
    component: LoginForm,
};

const Template = (props: LoginFormProps) => <LoginForm {...props} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Here comes the text to explain to the user what he needs to do.'
};

export const WithWarning = Template.bind({});
WithWarning.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    warning: 'This is a warning!'
};

export const WithError = Template.bind({});
WithError.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    error: 'This is an error!'
};

export const WithInfo = Template.bind({});
WithInfo.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    info: 'This is information!'
};

export const WithWarningAndError = Template.bind({});
WithWarningAndError.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    warning: 'This is an warning!',
    error: 'This is an error!'
};

export const WithInfoWarningAndError = Template.bind({});
WithInfoWarningAndError.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    info: 'This is information!',
    warning: 'This is an warning!',
    error: 'This is an error!'
};