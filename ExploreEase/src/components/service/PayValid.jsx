import * as Yup from 'yup';

const payvalid = Yup.object().shape({
  holdername:Yup.string().required("holder name cannot be empty"),
  cardno:Yup.string().required("card number cannot be empty").min(16,"card number must be 16 numbers").max(19,"card number must 16 numbers"),
  cvcpwd:Yup.string().required("cvv cannot be empty").length(3,"please enter right cvv"),
  exp:Yup.string().required("expire date cannot be empty").length(5,"invalid expire date")
})
export default payvalid;