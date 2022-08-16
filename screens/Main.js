import { View, Text } from 'react-native'
import React from 'react'
import HeaderMain from '../components/HeaderMain'
import Search from '../components/Search'
import SliderProducts from '../components/SliderProducts'

export default function Main() {
	return (
		<View>
			<HeaderMain />
			<Search />
			<SliderProducts />
		</View>
	)
}