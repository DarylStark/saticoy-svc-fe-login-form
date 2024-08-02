import LoginForm, { LoginFormProps } from "./login_form";

export default {
    title: 'Molecules/Forms/LoginForm',
    component: LoginForm,
};

const Template = (props: LoginFormProps) => <LoginForm {...props} />;

export const UsernameAndPasswordDefault = Template.bind({});
UsernameAndPasswordDefault.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    form: 1
};

export const UsernameAndPasswordWithWarning = Template.bind({});
UsernameAndPasswordWithWarning.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    warning: 'This is a warning!',
    form: 1
};

export const UsernameAndPasswordWithError = Template.bind({});
UsernameAndPasswordWithError.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    error: 'This is an error!',
    form: 1
};

export const UsernameAndPasswordWithInfo = Template.bind({});
UsernameAndPasswordWithInfo.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    info: 'This is information!',
    form: 1
};

// With MFA TOTP form

export const MFATOTPDefault = Template.bind({});
MFATOTPDefault.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    form: 2
};

export const MFATOTPWithWarning = Template.bind({});
MFATOTPWithWarning.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    warning: 'This is a warning!',
    form: 2
};

export const MFATOTPWithError = Template.bind({});
MFATOTPWithError.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    error: 'This is a error!',
    form: 2
};

export const MFATOTPWithInfo = Template.bind({});
MFATOTPWithInfo.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    info: 'This is information!',
    form: 2
};