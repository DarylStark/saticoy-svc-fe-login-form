import LoginForm, {LoginFormProps} from "./login_form";

export default {
    title: 'Molecules/Forms/LoginForm',
    component: LoginForm,
};

const Template = (props: LoginFormProps) => <LoginForm {...props} />;

export const Default = Template.bind({});
Default.args = {
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'A error occured while logging in'
};