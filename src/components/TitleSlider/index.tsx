import {Text} from 'react-native'
import { styles } from './styles'
import React from 'react'
export interface ITitle {
    titleI: string 
}
export function TitleSlider({titleI}: ITitle) {
    return(
        <Text style = {styles.title}>{titleI}</Text>
    )
}
