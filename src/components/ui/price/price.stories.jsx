import Price from "./price"

export default {
    title: 'Цена'
}
const Template = (args) => <Price {...args} />;

export const WithOldPrice  = Template.bind({});

WithOldPrice.args = {
    value: 1000
}