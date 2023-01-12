import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
} from '@chakra-ui/react';
import {
    FiMenu,
    FiX
} from 'react-icons/fi';
import DarkLight from './DarkLight';

export default function Simple({ children }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={
                            isOpen
                                ?
                                <FiX />
                                :
                                <FiMenu />
                        }
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={
                            isOpen
                                ?
                                onClose
                                :
                                onOpen
                        } />
                    <Flex
                        gap={8}
                        alignItems={'center'}
                        justifyContent='space-between'
                        w='5xl'
                        m='0 auto'>
                        <Box>
                            Logo
                        </Box>
                        <Text>
                            dia e hora
                        </Text>
                        <DarkLight />
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box
                        pb={4}
                        display={{
                            md: 'none'
                        }}>
                        <Flex
                        gap={8}
                        alignItems={'center'}
                        justifyContent='space-between'
                        w={{
                            lg: '5xl',
                            sm: 'auto'
                        }}
                        m='0 auto'>
                        <Box>
                            Logo
                        </Box>
                        <Text>
                            dia e hora
                        </Text>
                        <DarkLight />
                    </Flex>
                    </Box>
                ) : null}
            </Box>
            <Box>
                {children}
            </Box>
        </>
    )
}