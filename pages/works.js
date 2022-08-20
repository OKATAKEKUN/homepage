import { Container, Heading } from "@chakra-ui/react";
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mt={8}>
                    現在、作品はありません。
                </Heading>
            </Container>
        </Layout>
    )
}

export default Works