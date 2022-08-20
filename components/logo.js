import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
    const shibaImg = `/images/shiba${useColorModeValue('', '-dark')}.jpg`

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={shibaImg} width={60} height={60} alt="logo"></Image>
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAopha.900')}
                        fontFamily='M PLUS Rounded 1C'
                        fontWeight="bold"
                        ml={4}
                        fontSize={20}
                    >
                        Takeshi Okada
                    </Text>
                </LogoBox>
            </a>
        </Link>  
    )
}

export default Logo