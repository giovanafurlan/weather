import { useState } from "react";
import {
  Button,
  Center,
  CircularProgress,
  Container,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  Text
} from "@chakra-ui/react";
import Nav from '../components/Nav';

export default function Home() {

  const [string, setString] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState('hidden');

  const handleChange = (e) => {
    setString(e.target.value);
  }

  function checkDomain() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user: {
        place: string
      }
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setIsLoading(true);

    fetch("/api/weather", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setIsLoading(false);
        setVisibility('visible');

        const data = result;

      })
      .catch(error => {
        setIsLoading(false);
        console.log('error index', error);
      })
  }

  const list = [
    {
      nome: '',
      content: ''
    }
  ]

  return (
    <Nav>
      <Flex
        w='full'
        minH='2xl'>
        <Container
          flexDir={'column'}
          py='10'
          px='0'
          maxW={'5xl'}>
          <FormControl>
            <Flex
              gap={'4'}>
              <Input
                required
                onChange={handleChange} />
              <Button
                onClick={() => { checkDomain() }}
                disabled={isLoading}>
                Conferir
              </Button>
            </Flex>
          </FormControl>
          {isLoading
            ?
            <CircularProgress
              isIndeterminate
              color='orange'
              pl='40%'
              py='4' />
            :
            result}
          <Flex
            borderRadius={'lg'}
            textAlign='center'
            my='6'
            flexDir='column'
            gap='10'>
            <Grid
              templateColumns={'repeat(3,1fr)'}
              gap='10'>
              <GridItem>
                <Flex
                  flexDir={'column'}
                  gap='10'>
                  <Flex
                    flexDir={'column'}
                    align={'center'}>
                    <Text
                      fontSize={'8xl'}>
                      12 º
                    </Text>
                    <Text
                      fontSize={'lg'}>
                      Nublado
                    </Text>
                  </Flex>
                  <Flex
                    justifyContent={'space-between'}>
                    <Flex
                      flexDir={'column'}
                      gap='2'>
                      <Text
                        fontSize={'xl'}>
                        Umidade
                      </Text>
                      <Text>
                        64%
                      </Text>
                    </Flex>
                    <Center>
                      <Divider orientation='vertical' />
                    </Center>
                    <Flex
                      flexDir={'column'}
                      gap='2'>
                      <Text
                        fontSize={'xl'}>
                        Vento
                      </Text>
                      <Text>
                        12 km
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem
                colSpan={'2'}>
                <Flex>
                  <Text
                    fontSize={'4xl'}
                    m='0 auto'
                    my='10'>
                    Paris
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
            <Flex
              justifyContent={'space-between'}>
              <Flex>
                <Text>Mais infos</Text>
              </Flex>
              <Divider orientation='vertical' />
              <Text>
                Outras temperaturas
              </Text>
            </Flex>

          </Flex>
          {/* <ResultTemplate
        visibility={visibility}>
        {list.map((item, idx) => (
          <Flex
            key={idx}
            gap='2'>
            <Text
              fontWeight='700'>
              {item.nome}
            </Text>
            <Text>
              {item.content}
            </Text>
          </Flex>
        ))}
      </ResultTemplate> */}
        </Container>
      </Flex>
    </Nav>
  )
}

function ResultTemplate({ visibility, children }) {

  return (
    <Grid
      visibility={visibility}
      templateColumns={{
        lg: 'repeat(2, 1fr)'
      }}
      gap='4'>
      <Flex
        flexDir={'column'}
        boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.07)'}
        borderRadius='10px'
        px='4'
        py='6'
        gap='4'>
        {children}
      </Flex>
      <Flex
        flexDir={'column'}
        boxShadow={'0px 4px 15px rgba(0, 0, 0, 0.07)'}
        borderRadius='10px'
        px='4'
        py='6'
        gap='4'
        fontSize={'xs'}
        color='black'>
      </Flex>
    </Grid>
  )
}