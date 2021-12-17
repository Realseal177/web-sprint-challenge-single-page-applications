import * as yup from 'yup';

const formSchema = yup.object().shape({
    custName: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['large', 'massive', 'insane', 'glowing-alien'], "Size doesn't usually matter but it does here. Pick a size."),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    olives: yup.boolean(),
    anchovies: yup.boolean(),
    cheese: yup.boolean(),
})

export default formSchema;