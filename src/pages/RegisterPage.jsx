import { Button, Input, Stack, Flex, Box, Text, Toaster } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import useRegister from "../services/useRegister";
import { useEffect } from "react";
import { toaster } from "../components/ui/toaster";

const schema = z.object({
    username: z.string().min(1, "Nazwa użytkownika jest wymagana"),
    email: z.string().email("Nieprawidłowy adres email"),
    password: z.string().min(6, "Hasło musi mieć co najmniej 6 znaków"),
})

const RegisterPage = () => {

  const {mutateAsync, isLoading, error}=useRegister();
  const navigate=useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    })


    useEffect(() => {
        const values = Object.entries(errors)
        values.map((val,index) => {
            setTimeout(() => {
                toaster.create({
                    title: val[1].message,
                    type: "error",
                });
            }, index * 100);
        })
    }, [errors]);




    const onSubmit =async (data) => {
     await mutateAsync(data)
     navigate("/login");
      
        }
    

    return (
        <Flex
            direction="column"
            gap="6"
            bg="gray.900"
            justify="center"
            align="center"
            minHeight="100vh"
            p={4}
        >
          
            <Box
                bg="blackAlpha.600"
                p={8}
                borderRadius="md"
                boxShadow="lg"
                width="full"
                maxW="md"
            >
                <Stack spacing={4}>
                    <Text fontSize="2xl" fontWeight="bold">
                        Rejestracja
                    </Text>
                    <Text fontSize="sm" color="gray.300">
                        Załóż konto w naszym systemie
                    </Text>
                </Stack>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4} mt={4}>
                        <div>
                            <label htmlFor="name">Nazwa użytkownika</label>
                            <Input id="name" {...register("username")} />
                            {errors.username && <Text color="red.500">{errors.username.message}</Text>}
                        </div>

                        <div>
                            <label htmlFor="email">Adres email</label>
                            <Input id="email" type="email" {...register("email")} />
                            {errors.email && <Text color="red.500">{errors.email.message}</Text>}
                        </div>

                        <div>
                            <label htmlFor="password">Hasło</label>
                            <Input id="password" type="password" {...register("password")} />
                            {errors.password && <Text color="red.500">{errors.password.message}</Text>}
                        </div>

                        <Button loading={isLoading} loadingText="Zarejestruj sie " type="submit" colorScheme="teal" width="full" mt={4}>
                            Zarejestruj się
                        </Button>
                    </Stack>
                </form>
            </Box>
            <Text fontSize="md" color="gray.300">
                Masz już konto?
                <Text as="span" display="inline" color="white" fontWeight="bold">
                   <NavLink to="/login"> Zaloguj się</NavLink>
                </Text>           
            </Text>
        </Flex>
    )
}

export default RegisterPage