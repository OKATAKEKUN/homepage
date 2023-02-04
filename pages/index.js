import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue,
    List,
    ListItem,
    Link,
    Button,
    Icon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
} from 'react-icons/io5'

const Page = () => {
    return ( 
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={10} mb={10} align="center">
                    Hello, I&apos;m a software-engineer based in Japan!
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page=title">
                            岡田　孟
                        </Heading>
                        <p>Software-Enginner ( Developer / Designer )</p>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4, md: 0}} 
                        ml={{md: 3}}
                        align="center"
                    >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            boxSize="90px"
                            src="images/takeshi.jpg"
                            alt="Profile Image"/>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title" mb="3">
                        自己紹介
                    </Heading>
                    <Paragraph>
                        私は社会人二年目のエンジニアとして働いています。現在は自動倉庫システム開発を基本設計から結合テストまで一貫として
                        開発を任されております。得意言語はJavaですが、現在React,TypeScript,Goを中心に勉強しております。
                        資格はITパスポート、基本情報技術者、応用情報技術者、Java Silver、Java Goldを取得しています。
                        まだまだ未熟ですが、これからも技術力を高めるべく精進していくつもりです。
                        暖かくこのサイトを見ていただければ幸いです。
                    </Paragraph>    
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title" mb="3">
                        経歴
                    </Heading>
                    <BioSection>
                        <BioYear>
                            1997
                        </BioYear>
                        神奈川県横浜市出身
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2016
                        </BioYear>
                        横浜国立大学経済学部国際経済学科入学
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021
                        </BioYear>
                        ソフトウェアエンジニアとして未知の世界に踏み込む
                    </BioSection>   
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title" mb={3}>
                        趣味
                    </Heading>
                    <Paragraph>
                        プログラミング、サッカー観戦、犬、赤ちゃんの動画
                    </Paragraph> 
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title" mb="3">
                        SNS
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://twitter.com/@CozyEnginner" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}></Icon>} >Twitter</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/cozy_life_enginner/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}></Icon>} >Instagram</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/OKATAKEKUN/homepage" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}></Icon>} >Github</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

                <Section delay={3.0}>
                    <Heading as="h3" variant="section-title" mb="3">
                        参考にしたホームページ
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.craftz.dog/" target="_blank">
                                <Button variant="ghost" colorScheme="teal">Link</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    ) 
}
export default Page
