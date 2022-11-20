import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  id: yup
    .string()
    // 최소 글자수 지정
    .min(2, "아이디는 최소 2글자 이상입니다.")
    .matches(
      /^[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/,
      "아이디는 영문으로만 입력할 수 있습니다."
    )
    .required("아이디는 필수입력 사항입니다."),
  // 이메일 유효성 검사 코드
  email: yup.string().email().required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(8)
    // 최대 글자수 지정
    .max(16)
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W))/,
      "비밀번호는 영문, 숫자, 특수문자가 포함되어야 합니다."
    )
    // 반드시 입력해야 할 경우 나타날 수 있도록 하는 코드
    .required("비밀번호는 8글자 이상 16글자 이하입니다."),
  confirmPassword: yup
    .string()
    // yup에 작성한 password와 일치여부 확인
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

const signup = () => {
  return <div>signup</div>;
};

export default signup;
