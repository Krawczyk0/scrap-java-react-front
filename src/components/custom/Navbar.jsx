import { Button, Flex, Spacer, Box, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useLogout from '../../services/useLogout'

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLogout()
    navigate("/login")
  }

  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex align="center">
        <NavLink to="/">
          <Box fontSize="xl" fontWeight="bold" color="white">
            Homepage
          </Box>
        </NavLink>

        <Spacer />

        <Flex gap={4}>
          <NavLink to="/">
            <Link fontSize="lg" _hover={{ textDecoration: "underline", color: "teal.200" }} color="white">
              Panel
            </Link>
          </NavLink>
          <NavLink to="/search">
            <Link fontSize="lg" _hover={{ textDecoration: "underline", color: "teal.200" }} color="white">
             Wyszukiwarka
            </Link>
          </NavLink>
        </Flex>

        <Spacer />

        <Button colorScheme="teal" variant="outline" onClick={handleLogout}>
          Wyloguj
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar
