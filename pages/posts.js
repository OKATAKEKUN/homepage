import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


const posts = () => (
    <Layout title="posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4} mt={7}>
                Photographs
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="イングランドのリバプールで撮った写真。一眼レフで撮ったため、
                        雰囲気がよく映っていてお気に入りの写真です。"
                        thumbnail='/images/contents/liverpool.png'
                    />
                    <GridItem
                        title="イングランドのマンチェスターで撮った写真。こちらは高いビルが立ち並ぶ中心街で撮りました。
                        イングランドは各都市で独自の特徴があり、大変面白い。"
                        thumbnail='/images/contents/manchester.jpeg'
                    />
                    <GridItem
                        title="大学時代はサッカー部に所属していました。Aチームで公式戦には出たことなかったですが、
                        楽しくサッカーができました。"
                        thumbnail='/images/contents/football.jpeg'
                    />
                    <GridItem
                        title="バルセロナの街を歩いていたら急に出てきた巨大な建築物。サクラダファミリア。正直、ここまで大きいと思っていませんでした。"
                        thumbnail='/images/contents/sagradaFamilia.jpeg'
                    />
                    <GridItem
                        title="イタリアのローマといえばコロッセオ！！ここで争いが起こっていたのか？？よく知らんけど（笑）"
                        thumbnail='/images/contents/colosseum.jpeg'
                    />
                    <GridItem
                        title="イタリアのローマを歩いていた時、ここ見たことある！！と思い写真を撮った。あのローマの休日の有名なシーン。全部見たことないけど。。。"
                        thumbnail='/images/contents/romanHoliday.jpeg'
                    />
                    <GridItem
                        title="実際のコロッセオの中の写真です。なんか古代ローマに来たー！！って感じがしていい写真"
                        thumbnail='/images/contents/inside_colosseum.jpeg'
                    />
                    <GridItem
                        title="イングランド対クロアチアの試合を見に行きました。プレーがかっこいいモドリッチを見ることができて満足。ただ、少し距離が遠かった。。"
                        thumbnail='/images/contents/England_vs_Croatia.jpeg'
                    />
                    <GridItem
                        title="ロンドンのバッキンガム宮殿での一枚。当日は兵士？の行進などが見れました。"
                        thumbnail='/images/contents/Buckingham_Palace.jpeg'
                    />
                    <GridItem
                        title="小さいときの写真。なんか成長しちゃって悲しくなる。。こんなに小さかったのか。自分。"
                        thumbnail='/images/contents/fiveYearsOld.jpeg'
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default posts
