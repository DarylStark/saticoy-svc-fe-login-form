import LoginFormCard, { LoginFormCardProps } from "./login_form_card";

export default {
    title: 'Organisms/LoginFormCard',
    component: LoginFormCard,
};

const Template = (props: LoginFormCardProps) => <LoginFormCard {...props} />;

// With Username and Password link

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

// With Magic Code form

export const MagicCodeDefault = Template.bind({});
MagicCodeDefault.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    form: 3
};