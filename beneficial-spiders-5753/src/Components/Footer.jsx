import { Box, Image, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
   return (
	  <>
		 {/* Footer */}

		 <Box m='auto' w='90%' pl='39px' pt='55px'>
			<Flex>
			   <Box bg='rgb(245,245,245)' w='50%'>
				  <Box pb='43px' pt='50px' pl='55px'>
					 <Flex>
						<Box>
						   <Image w='51%' src='https://www.dollartree.com/file/general/footericon_Instagram.png' />
						</Box>
						<Box>
						   <Image w='51%' src='https://www.dollartree.com/file/general/footericon-fb.png' />
						</Box>
						<Box>
						   <Image w='51%' src='https://www.dollartree.com/file/general/footericon-twitter.png' />
						</Box>
						<Box>
						   <Image w='51%' src='https://www.dollartree.com/file/general/footericon-linkedin.png' />
						</Box>
						<Box>
						   <Image w='51%' src='https://www.dollartree.com/file/general/footericon-pinterest.png' />
						</Box>
					 </Flex>
				  </Box>
				  <Box pb='44px' pl='55px'>
					 <Image w='59%' src='https://www.dollartree.com/file/general/vsblogo_final_m_260x55_20200805.png' />
				  </Box>
				  <Box pl='55px'>
					 <Image w='53%' src='https://www.dollartree.com/file/general/footer-videos.png' />
				  </Box>
			   </Box>
			   <Box bg='rgb(245,245,245)' w='50%'>
				  <Flex>
					 <Box pr='50px' pt='50px'>
						<VStack>
						   <Text fontWeight='bold'>Customer Service</Text>
						   <a style={{ color: 'green' }} href="Gift Cards" className={styles.gridShopFieldsHoverFooter}>Gift Cards</a>
						   <a style={{ color: 'green' }} href="Reloadable Debit Cards" className={styles.gridShopFieldsHoverFooter}>Reloadable Debit Cards</a>
						   <a style={{ color: 'green' }} href="Store Locator" className={styles.gridShopFieldsHoverFooter}>Store Locator</a>
						   <a style={{ color: 'green' }} href="Store Careers" className={styles.gridShopFieldsHoverFooter}>Store Careers</a>
						   <a style={{ color: 'green' }} href="Weekly Ad" className={styles.gridShopFieldsHoverFooter}>Weekly Ad</a>
						   <a style={{ color: 'green' }} href="Value Seekers Blog" className={styles.gridShopFieldsHoverFooter}>Value Seekers Blog</a>
						   <a style={{ color: 'green' }} href="Prod Factory Canada" className={styles.gridShopFieldsHoverFooter}>Prod Factory Canada</a>
						   <a style={{ color: 'green' }} href="Coronavirus Response" className={styles.gridShopFieldsHoverFooter}>Coronavirus Response</a>

						</VStack>
					 </Box>
					 <Box pr='50px' pt='50px'>
						<VStack>
						   <Text fontWeight='bold'>Prod Factory Stores</Text>
						   <a style={{ color: 'green' }} href="About Us" className={styles.gridShopFieldsHoverFooter}>About Us</a>
						   <a style={{ color: 'green' }} href="Affiliates" className={styles.gridShopFieldsHoverFooter}>Affiliates</a>
						   <a style={{ color: 'green' }} href="Associates" className={styles.gridShopFieldsHoverFooter}>Associates</a>
						   <a style={{ color: 'green' }} href="Careers" className={styles.gridShopFieldsHoverFooter}>Careers</a>
						   <a style={{ color: 'green' }} href="Investor Relations" className={styles.gridShopFieldsHoverFooter}>Investor Relations</a>
						   <a style={{ color: 'green' }} href="Real Estate Partners" className={styles.gridShopFieldsHoverFooter}>Real Estate Partners</a>
						   <a style={{ color: 'green' }} href="Report (PDF 2.7 MB)" className={styles.gridShopFieldsHoverFooter}>Report (PDF 2.7 MB)</a>
						   <a style={{ color: 'green' }} href="Vendor Partners" className={styles.gridShopFieldsHoverFooter}>Vendor Partners</a>
						   <a style={{ color: 'green' }} href="W2 Information" className={styles.gridShopFieldsHoverFooter}>W2 Information</a>

						</VStack>
					 </Box>
					 <Box pr='50px' pt='50px'>
						<VStack>
						   <Text fontWeight='bold'>Company Info</Text>
						   <a style={{ color: 'green' }} href="Catalog Quick Order" className={styles.gridShopFieldsHoverFooter}>Catalog Quick Order</a>
						   <a style={{ color: 'green' }} href="Contact Us / Help Center" className={styles.gridShopFieldsHoverFooter}>Contact Us / Help Center</a>
						   <a style={{ color: 'green' }} href="Forgot Password" className={styles.gridShopFieldsHoverFooter}>Forgot Password</a>
						   <a style={{ color: 'green' }} href="In-Store Pickup" className={styles.gridShopFieldsHoverFooter}>In-Store Pickup</a>
						   <a style={{ color: 'green' }} href="My Account" className={styles.gridShopFieldsHoverFooter}>My Account</a>
						   <a style={{ color: 'green' }} href="Order Status" className={styles.gridShopFieldsHoverFooter}>Order Status</a>
						   <a style={{ color: 'green' }} href="Placing Tax-Exempt Orders" className={styles.gridShopFieldsHoverFooter}>Placing Tax-Exempt Orders</a>
						   <a style={{ color: 'green' }} href="Recall Information" className={styles.gridShopFieldsHoverFooter}>Recall Information</a>
						   <a style={{ color: 'green' }} href="En Espanol" className={styles.gridShopFieldsHoverFooter}>En Espanol</a>
						   <a style={{ color: 'green' }} href="Privacy Requests" className={styles.gridShopFieldsHoverFooter}>Privacy Requests</a>
						</VStack>
					 </Box>
				  </Flex>
			   </Box>
			</Flex>
		 </Box>

		 <Box mt='20px'>
			<Image w='15%' pl='110px' src='https://www.dollartree.com/file/general/new-norton-seal1.png' alt='' />
		 </Box>
	  </>
   )
}

export default Footer
