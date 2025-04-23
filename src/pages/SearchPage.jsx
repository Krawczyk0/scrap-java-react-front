import React, { useState } from "react";
import { Box, Button, Input, Stack, Text, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MainTemplate from "./MainTemplate";
import useSearch from "../services/useSearch"; 

const searchSchema = z.object({
  query: z.string().min(1, "Wpisz zapytanie"),
});

const SearchPage = () => {
  const [newsCount, setNewsCount] = useState(null); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const {mutateAsync,isLoading} = useSearch()


  const onSubmit = async (data) => {
    await mutateAsync(data);
  };

  return (
    <MainTemplate>
      <Flex justify="center" align="center" minHeight="60vh" direction="column">
        <Box bg="gray.800" p={8} borderRadius="md" boxShadow="lg" maxW="lg" w="full">
          <Text fontSize="2xl" fontWeight="bold" mb={4} color="white">
            Wyszukiwarka 
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <Input
                placeholder="Szukaj"
                {...register("query")}
                bg="black"
              />
              {errors.query && <Text color="red.400">{errors.query.message}</Text>}
              <Button loading={isLoading} type="submit" colorScheme="teal" w="full" isLoading={isLoading}>
                Szukaj
              </Button>
            </Stack>
          </form>
        </Box>

        {newsCount !== null && (
          <Text mt={6} fontSize="xl" fontWeight="semibold" color="white">
            Znaleziono {newsCount} newsów
          </Text>
        )}
      </Flex>
    </MainTemplate>
  );
};

export default SearchPage;