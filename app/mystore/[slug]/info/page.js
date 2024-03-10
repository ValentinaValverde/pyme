import React from 'react'
import { getMyStoreInfo } from '@/utils/actions/storeActions'
import MyStoreInfo from '@/components/MyStoreInfo'

const myStoreInfoPage = async ({ params }) => {
	console.log(params.slug)
	const myStore = await getMyStoreInfo(params.slug)
	return <MyStoreInfo myStore={myStore} />
}

export default myStoreInfoPage
