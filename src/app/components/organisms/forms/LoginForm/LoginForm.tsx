import React from "react";
import { useQuery } from "@apollo/client";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Button,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import useAuth from "../../../../hooks/useAuth";
import { notifyError } from "../../../notify";
import { operations, Types } from "./duck";

interface FormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("This is a required field!")
    .email("Please enter a valid email"),
  password: yup.string().required("This is a required field!"),
});

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const { toggleColorMode } = useColorMode();
  const auth: any = useAuth();

  const { data, loading } = useQuery<
    Types.GetUsersUsernamesQuery,
    Types.GetUsersUsernamesQueryVariables
  >(operations.getUsersUsernames);

  const onFinish: SubmitHandler<FormValues> = (values: any) => {
    const emails = data?.users?.data?.map((item) => {
      return item?.email;
    });

    if (emails?.includes(values.email)) {
      auth.logIn(Date.now());
    } else {
      notifyError("User with this email does not exist!");
    }
  };

  return (
    <>
      <Heading>Log In</Heading>
      <form onSubmit={handleSubmit(onFinish)}>
        <FormControl
          isDisabled={!data || loading}
          mb={3}
          isInvalid={!!errors.email}
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            placeholder="Enter your email"
            id="email"
            mb={3}
            type="email"
            {...register("email")}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isDisabled={!data || loading}
          mb={3}
          isInvalid={!!errors.password}
        >
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            placeholder="*******"
            id="password"
            mb={3}
            type="password"
            {...register("password")}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          colorScheme="teal"
          w="100%"
          isLoading={!data || loading || isSubmitting}
          type="submit"
        >
          Log In
        </Button>
      </form>
      <Button onClick={toggleColorMode} w="100%">
        Toggle color mode
      </Button>
    </>
  );
};

export default LoginForm;
