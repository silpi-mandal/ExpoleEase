import * as Yup from 'yup';
const validation = Yup.object().shape({
  nm:Yup.string().required("name cannot be empty").min(3,"Minimum 3 characters required").max(20,"maximum 20 characters allow"),
  unm:Yup.string().required("username cannot be empty").min(3,"Minimum length 3 required").max(15,"maximum length 15 allow"),
  em:Yup.string().required("email cannot be empty").email("email is invalid"),
  pass:Yup.string().required("password cannot be empty").min(8,"minimum length 8 needed, it has must be 1 number, 1 character, 1 special character needed").max(13,"maximum length 13 allow")
})
export default validation;