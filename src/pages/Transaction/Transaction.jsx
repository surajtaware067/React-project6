import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import React from 'react'
import DashBoardLayout from '../../Components/DashBoardLayout'
import { AiOutlineDownload } from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './Components/TransactionTable'
import { IconBase } from 'react-icons'
import { BsSearch } from 'react-icons/bs'

const Transaction = () => {
  const tabs =[
    {
      name:"All",
      count:349,
    },
    {
      name:"Deposite",
      count:114,
    },
    {
      name:"Widthdraw",
      count:213,
    },
    {
      name:"Trade",
      count:22,
    },
  ]
  return (
    <DashBoardLayout title="Transactions" >
    <Flex justify="end" mt="6" mb=
    "3">
       <Button leftIcon={<Icon as={AiOutlineDownload}/>}>Export CSV</Button>
    </Flex>
      <Card borderRadius="1rem">
      <Tabs>
  <TabList pt="4" display='flex' w="full" justifyContent="space-between" >
   <HStack>
   {
    tabs.map((tab)=>(
      <Tab key={tab.name} display="flex" gap="12" pb="4">
        {tab.name}{" "}
        <Tag colorScheme="gray" borderradius="full">
          {tab.count}

        </Tag>
      </Tab>
    ))
   }
   </HStack>
   <InputGroup maxW="200px" pr="6" >
    <InputLeftElement pointerEvents='none'>
      <Icon as={BsSearch}/>
    </InputLeftElement>
    <Input type='tel' placeholder='Search....' />
  </InputGroup>
    
  </TabList>

  <TabPanels>
    <TabPanel>
       <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Card>
    </DashBoardLayout>
  )
}

export default Transaction
