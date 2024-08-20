import LoginFormCard, { LoginFormCardProps, LoginFormType } from "./login-form-card";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/LoginFormCard',
    component: LoginFormCard,
};

const Template = (props: LoginFormCardProps) => <LoginFormCard {...props} />;

// With Username and Password form

export const UsernameAndPasswordDefault: StoryFn<LoginFormCardProps> = Template.bind({});
UsernameAndPasswordDefault.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    form_type: LoginFormType.UsernameAndPassword
};

// With Magic Code form

export const MagicCodeDefault: StoryFn<LoginFormCardProps> = Template.bind({});
MagicCodeDefault.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    form_type: LoginFormType.MagicCode
};

// With Authorize from session form

export const AuthorizeFromSessionDefault: StoryFn<LoginFormCardProps> = Template.bind({});
AuthorizeFromSessionDefault.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    form_type: LoginFormType.AuthorizeFromSession
};

// With MFA TOTP form

export const MFATOTPDefault: StoryFn<LoginFormCardProps> = Template.bind({});
MFATOTPDefault.args = {
    text: 'Here comes the text to explain to the user what he needs to do.',
    form_type: LoginFormType.MFATOTP
};