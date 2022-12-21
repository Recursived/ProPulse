import { Text, Box, Flex, Icon, useColorModeValue, IconProps} from "@chakra-ui/react";

interface TimelineRowProps {
	logo: any,
	title: string,
	date?: string,
	color: string,
	index: number,
	arrLength: number,
	content: string
}

export default function TimelineRow(props: TimelineRowProps) {
	const { logo, title, date, color, index, arrLength, content } = props
	const textColor = useColorModeValue('gray.700', 'white.300')
	const bgIconColor = useColorModeValue('white.300', 'gray.700')

	return (
		<Flex alignItems='stretch' minH='78px' justifyContent='start' mb='10px'>
			<Flex direction='column' align={"center"}>
				<Icon
					as={logo}
					bg={bgIconColor}
					color={color}
					h={'30px'}
					w={'26px'}
					pe='6px'
					zIndex='1'
					position='relative'
				/>
				<Box w='2px' bg='gray.200' h={index === arrLength - 1 ? '15px' : '100%'} mr="8px"/>
			</Flex>
			<Flex direction='column' justifyContent='flex-start' >
				<Text fontSize='sm' color={textColor} fontWeight='bold'>
					{title}
				</Text>
				<Text fontSize='xs'  color={textColor} fontWeight='normal'>
					{date}
				</Text>
				<Text fontSize='sm' maxWidth={"50%"} color={textColor} fontWeight='normal'>
					{content}
				</Text>
			</Flex>
		</Flex>
	);
}
